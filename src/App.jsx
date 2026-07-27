import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import CoffeeScene from "./components/CoffeeScene";
import Lights from "./components/Lights";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{
  position: [0, 3, 25],
  fov: 35,
}}
        shadows
      >
        {/* Fond noir */}
        <color attach="background" args={["#000000"]} />

        {/* Étoiles */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Lumières */}
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 10, 5]}
          intensity={0.5}
          castShadow
        />

        <Lights />
        <CoffeeScene />

        {/* Contrôles caméra */}
        <OrbitControls
          target={[0, 2, 0]}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minDistance={5}
          maxDistance={25}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
        <EffectComposer>
  <Bloom
    intensity={0.2}
    luminanceThreshold={0.2}
    luminanceSmoothing={0.9}
  />
</EffectComposer>
      </Canvas>
    </div>
  );
}