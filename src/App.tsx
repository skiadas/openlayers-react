import './App.css';
import { Map } from './component/map';
import { Layers, TileLayer, VectorLayer } from './component/layers';
import { osm, vector } from './component/source';
import { point } from './component/geom';
import { feature } from './component/features';
import { circleStyle, fill, stroke } from './component/style';
import { Coordinate } from 'ol/coordinate';
import { FeatureLike } from 'ol/Feature';

const style = circleStyle(5, fill('rgba(255,255,255,0.4)'), stroke('#3399CC', 1.25));

function App() {
  const clickHandler = (coords: Coordinate, features: FeatureLike[]) => {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) tooltip.innerHTML = `(${coords[0]}, ${coords[1]}) ${features[0]?.get('name')}`;
  };
  return (
    <>
      <div id="tooltip">Tooltip!</div>
      <Map zoom={5} center={[0, 0]} rotation={1} onClick={clickHandler}>
        <Layers>
          <TileLayer source={osm()} />
          <VectorLayer
            source={vector({
              features: [feature(point([0, 0]), { name: 'here' })],
            })}
            style={style}
          />
        </Layers>
      </Map>
    </>
  );
}

export default App;
