import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

function Badge() {
    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[2, 3, 0.1]} />
            <MeshWobbleMaterial color="blue" factor={1} speed={2} />
        </mesh>
    );
}

export default Badge;
