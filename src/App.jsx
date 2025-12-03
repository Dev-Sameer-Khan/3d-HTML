import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Intro from "./components/Intro";

const App = () => {
  return (
    <>
      <Intro />
      <Canvas camera={{ position: [2.5, 2, 6], fov: 75 }}>
        <OrbitControls
          enableDamping
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minDistance={2}
          maxDistance={10}
        />
        <Environment preset="apartment" />
        <Scene />
      </Canvas>
    </>
  );
};

export default App;
