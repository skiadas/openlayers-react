import path, { resolve } from 'path';
import glob from 'glob';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import EsLint from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';

const { EsLinter, linterPlugin } = EsLint;

const entryPairs = glob.sync('src/component/**/*.{ts,tsx}').map((file) => [
  // This remove `src/` as well as the file extension from each
  // file, so e.g. src/nested/foo.js becomes nested/foo
  path.relative('src/component', file.slice(0, file.length - path.extname(file).length)),
  // This expands the relative paths to absolute paths, so e.g.
  // src/nested/foo becomes /project/src/nested/foo.js
  fileURLToPath(new URL(file, import.meta.url)),
]);
const entries = {};
for (const [key, value] of entryPairs) {
  if (value.includes('component/index')) {
    console.log(key, value);
  }
  entries[key] = value;
}

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['src/component/'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    outDir: './dist',
    lib: {
      // Instead of entries
      entry: './src/component/index.ts',
      name: 'ReactOpenLayersLibrary',
      formats: ['es'],
      // fileName: 'index.es',
      fileName: (format, entryAlias) => {
        return `${entryAlias}.${format}.js`;
      },
    },
    rollupOptions: {
      external: (id) => {
        if (id.includes('node_modules')) return true;
        if (id.startsWith('.')) return false;
        if (id.startsWith('react') || id.startsWith('ol')) return true;
        if (id.includes('component/index')) {
          console.log(id);
          return false;
        }
        return false;
      },
      //['ol', ...Object.keys(packageJson.peerDependencies)],
      // input: entries,
      output: {
        interop: 'auto',
      },
    },
  },
}));
