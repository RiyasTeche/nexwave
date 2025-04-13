import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ContainerModel } from "./ContainerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ContainerModelConatiner = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading..">
        <mesh>
          <Stage environment={"city"} intensity={0.5}>
            <ContainerModel />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={.2}/>
          <PerspectiveCamera position={[4, .8, 1.8]} zoom={1.2} makeDefault />
        </mesh>
      </Suspense>
    </Canvas>
  );
};

export default ContainerModelConatiner;
