export default function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial emissive="yellow" emissiveIntensity={2} />
    </mesh>
  );
}

