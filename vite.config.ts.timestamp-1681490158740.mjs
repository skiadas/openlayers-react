// vite.config.ts
import { resolve } from "node:path";
import react from "file:///Users/haris/Documents/Programming/sabbatical/openlayers-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/haris/Documents/Programming/sabbatical/openlayers-react/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/haris/Documents/Programming/sabbatical/openlayers-react/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///Users/haris/Documents/Programming/sabbatical/openlayers-react/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///Users/haris/Documents/Programming/sabbatical/openlayers-react/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var peerDependencies = {
  react: "^18.2.0",
  "react-dom": "^18.2.0"
};

// vite.config.ts
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    }),
    dts({
      include: ["src/component/"]
    })
  ],
  build: {
    lib: {
      entry: resolve("src", "component/index.ts"),
      name: "ReactOpenLayersLibrary",
      formats: ["es", "umd"],
      fileName: (format) => `react-ol-lib.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2hhcmlzL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9zYWJiYXRpY2FsL29wZW5sYXllcnMtcmVhY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9oYXJpcy9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvc2FiYmF0aWNhbC9vcGVubGF5ZXJzLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9oYXJpcy9Eb2N1bWVudHMvUHJvZ3JhbW1pbmcvc2FiYmF0aWNhbC9vcGVubGF5ZXJzLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcblxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IEVzTGludCBmcm9tICd2aXRlLXBsdWdpbi1saW50ZXInXG5pbXBvcnQgdHNDb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xuaW1wb3J0ICogYXMgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nXG5cbmNvbnN0IHsgRXNMaW50ZXIsIGxpbnRlclBsdWdpbiB9ID0gRXNMaW50O1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChjb25maWdFbnYpID0+ICh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHRzQ29uZmlnUGF0aHMoKSxcbiAgICBsaW50ZXJQbHVnaW4oe1xuICAgICAgaW5jbHVkZTogWycuL3NyY30vKiovKi57dHMsdHN4fSddLFxuICAgICAgbGludGVyczogW25ldyBFc0xpbnRlcih7IGNvbmZpZ0VudiB9KV0sXG4gICAgfSksXG4gICAgZHRzKHtcbiAgICAgIGluY2x1ZGU6IFsnc3JjL2NvbXBvbmVudC8nXSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKCdzcmMnLCAnY29tcG9uZW50L2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnUmVhY3RPcGVuTGF5ZXJzTGlicmFyeScsXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGByZWFjdC1vbC1saWIuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbLi4uT2JqZWN0LmtleXMocGFja2FnZUpzb24ucGVlckRlcGVuZGVuY2llcyldLFxuICAgIH0sXG4gIH0sXG59KSlcbiIsICJ7XG4gIFwibmFtZVwiOiBcIm9wZW5sYXllcnMtcmVhY3RcIixcbiAgXCJwcml2YXRlXCI6IHRydWUsXG4gIFwidmVyc2lvblwiOiBcIjAuMC4wXCIsXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxuICAgIFwiYnVpbGRcIjogXCJ0c2MgJiYgdml0ZSBidWlsZFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGUgcHJldmlld1wiLFxuICAgIFwibGludFwiOiBcImVzbGludCAnc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9J1wiLFxuICAgIFwibGludDpmaXhcIjogXCJlc2xpbnQgLS1maXggJ3NyYy8qKi8qLntqc3gsdHMsdHN4fSdcIixcbiAgICBcImZvcm1hdFwiOiBcInByZXR0aWVyIC0td3JpdGUgc3JjLy8qKi8qLnt0cyx0c3gsY3NzfSAtLWNvbmZpZyAuLy5wcmV0dGllcnJjXCJcbiAgfSxcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0XCJcbiAgXSxcbiAgXCJleHBvcnRzXCI6IHtcbiAgICBcIi5cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvcmVhY3Qtb2wtbGliLmVzLmpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvcmVhY3Qtb2wtbGliLnVtZC5qc1wiXG4gICAgfSxcbiAgICBcIi4vZGlzdC9zdHlsZS5jc3NcIjogXCIuL2Rpc3Qvc3R5bGUuY3NzXCJcbiAgfSxcbiAgXCJtYWluXCI6IFwiLi9kaXN0L3JlYWN0LW9sLWxpYi51bWQuanNcIixcbiAgXCJtb2R1bGVcIjogXCIuL2Rpc3QvcmVhY3Qtb2wtbGliLmVzLmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJvbFwiOiBcIl43LjMuMFwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4wLjI4XCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjAuMTFcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjMuMS4wXCIsXG4gICAgXCJlc2xpbnRcIjogXCJeOC4zOC4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMzIuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1zaW1wbGUtaW1wb3J0LXNvcnRcIjogXCJeMTAuMC4wXCIsXG4gICAgXCJwcmV0dGllclwiOiBcIl4yLjguN1wiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl40LjkuM1wiLFxuICAgIFwidml0ZVwiOiBcIl40LjIuMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjIuMi4wXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1saW50ZXJcIjogXCJeMi4wLjJcIixcbiAgICBcInZpdGUtdHNjb25maWctcGF0aHNcIjogXCJeNC4yLjBcIlxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRXLFNBQVMsZUFBZTtBQUVwWSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLG1CQUFtQjs7O0FDeUJ4Qix1QkFBb0I7QUFBQSxFQUNsQixPQUFTO0FBQUEsRUFDVCxhQUFhO0FBQ2Y7OztBRHpCRixJQUFNLEVBQUUsVUFBVSxhQUFhLElBQUk7QUFHbkMsSUFBTyxzQkFBUSxhQUFhLENBQUMsZUFBZTtBQUFBLEVBQzFDLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxNQUNYLFNBQVMsQ0FBQyxzQkFBc0I7QUFBQSxNQUNoQyxTQUFTLENBQUMsSUFBSSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFBQSxJQUN2QyxDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsZ0JBQWdCO0FBQUEsSUFDNUIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxPQUFPLG9CQUFvQjtBQUFBLE1BQzFDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxnQkFBZ0I7QUFBQSxJQUN4QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEdBQUcsT0FBTyxLQUFpQixnQkFBZ0IsQ0FBQztBQUFBLElBQ3pEO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==