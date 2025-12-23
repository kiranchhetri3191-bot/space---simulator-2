import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Starfield from "./Starfield";
import Galaxy from "./Galaxy";
import Sun from "./Sun";
import Planet from "./Planet";
import AsteroidBelt from "./AsteroidBelt";
import BlackHole from "./BlackHole";

export default function Universe() {
  return (
    <Canvas camera={{ position: [0, 12, 25], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={3} />

      <Starfield />
      <Galaxy />

      <Sun />
      <Planet distance={5} size={0.5} color="blue" speed={0.02} />
      <Planet distance={8} size={0.7} color="red" speed={0.015} />
      <Planet distance={12} size={1} color="orange" speed={0.01} />

      <AsteroidBelt />
      <BlackHole />

      <OrbitControls enableZoom enablePan />
    </Canvas>
  );
}

