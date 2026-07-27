import { useGLTF } from "@react-three/drei";

export default function CoffeeScene() {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/coffeeshop.glb`)

  return (
    <primitive
      object={scene}
      position={[-2.5, 0, 0]}
      scale={1}
    />
  );
}