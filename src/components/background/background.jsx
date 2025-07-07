import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";

export default function BackgroundCanvas() {
  return (
    <Canvas style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} camera={{ position: [0, 0, 5], fov: 75 }}>
      {/* Dark starry background */}
      <color attach="background" args={["#0F0F0F"]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      {/* Interactive floating text */}
      <Text
        fontSize={1}
        color="#4ADE80"
        position={[0, 0, 0]}
        anchorX="center"
        anchorY="middle"
      >
        Software Developer
      </Text>

      {/* Camera controls */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
