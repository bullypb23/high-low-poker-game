import React from 'react';
import { Container } from './App.styles';
import { Stage, Layer, Rect} from 'react-konva';
import Global from './Global';

function App() {
  return (
    <Container>
      <Global />
      betting
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect width={120} height={200} x={20} y={120} fill="red" />
        </Layer>
      </Stage>
    </Container>
  );
}

export default App;
