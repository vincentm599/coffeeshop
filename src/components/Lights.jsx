export default function Lights() {
  return (
    <>
      {/* Lumière intérieure du café */}
      <pointLight
        position={[-4.5, 2.9, -5.5]}
        intensity={85}
        distance={5}
        decay={1}
        color="#f88901"
        castShadow
      />

      {/* Ampoule du lampadaire */}
      <pointLight
        position={[-10.4, 4, -0.5]}
        intensity={150}
        distance={8}
        decay={2}
        color="#ffb300"
        castShadow
      />

      {/* Boule lumineuse */}
      <mesh position={[-10.4, 4.1, -0.6]}>
  <sphereGeometry args={[0.12, 32, 32]} />
  <meshStandardMaterial
    color="#ffffff"
    emissive="#fff5cc"
    emissiveIntensity={10}
  />
</mesh>
    </>
  );
}