import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Badge from "./Badge";

function Scene() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Badge />
            <OrbitControls />
        </Canvas>
    );
}

export default Scene;
