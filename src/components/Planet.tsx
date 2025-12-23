import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Planet({ distance, size, color, speed }: any) {
  const ref = useRef<THREE.Mesh>(null!);
  let angle = Math.random() * Math.PI * 2;

  useFrame(() => {
    angle += speed;
    ref.current.position.set(
      Math.cos(angle) * distance,
      0,
      Math.sin(angle) * distance
    );
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

