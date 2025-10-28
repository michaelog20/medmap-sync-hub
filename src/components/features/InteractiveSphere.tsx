import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveSphereProps {
  position: [number, number, number];
  color: string;
  isActive: boolean;
  isDimmed: boolean;
  onClick: () => void;
}

export const InteractiveSphere = ({ 
  position, 
  color, 
  isActive, 
  isDimmed, 
  onClick 
}: InteractiveSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetScale = isActive ? 1.3 : 1;
  const targetOpacity = isDimmed ? 0.3 : 1;

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotation animation - slow down when active or dimmed
      const rotationSpeed = (isActive || isDimmed) ? 0.1 : 0.3;
      meshRef.current.rotation.x += delta * rotationSpeed;
      meshRef.current.rotation.y += delta * rotationSpeed * 0.5;

      // Smooth scale transition
      const currentScale = meshRef.current.scale.x;
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(currentScale, targetScale, 0.1)
      );
    }
  });

  return (
    <mesh ref={meshRef} position={position} onClick={onClick} scale={1}>
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={targetOpacity}
          distort={0.2}
          speed={2}
          roughness={0.4}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={isActive ? 0.6 : 0.3}
        />
      </Sphere>
      {/* Outer glow sphere */}
      <Sphere args={[1.05, 32, 32]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={isActive ? 0.3 : 0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </mesh>
  );
};
