import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

function CADMesh({ modelType }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  if (modelType === 'gear-assembly') {
    return (
      <group ref={meshRef}>
        <mesh>
          <cylinderGeometry args={[1.2, 1.2, 0.4, 24]} />
          <meshStandardMaterial color="#0052CC" metalness={0.8} roughness={0.2} wireframe={false} />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.6, 16]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    );
  }

  if (modelType === 'press-machine') {
    return (
      <group ref={meshRef}>
        <mesh position={[0, -0.8, 0]}>
          <boxGeometry args={[1.6, 0.3, 1.2]} />
          <meshStandardMaterial color="#1E293B" metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 1.6, 16]} />
          <meshStandardMaterial color="#0052CC" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[1.2, 0.4, 0.9]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.7} />
        </mesh>
      </group>
    );
  }

  // Default CAD Geometry
  return (
    <group ref={meshRef}>
      <mesh>
        <torusKnotGeometry args={[0.9, 0.28, 100, 16]} />
        <meshStandardMaterial color="#0052CC" metalness={0.85} roughness={0.15} wireframe={false} />
      </mesh>
    </group>
  );
}

export default function ThreeCADVisualizer({ modelType = 'default', title = '3D CAD Model' }) {
  return (
    <div className="w-full h-64 bg-slate-900 rounded-xl overflow-hidden relative border border-slate-700 shadow-inner">
      <div className="absolute top-3 left-3 z-10 bg-slate-800/80 backdrop-blur-sm text-xs font-mono text-emerald-400 px-2.5 py-1 rounded flex items-center gap-1.5 border border-slate-700">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        CAD Visualizer: {title}
      </div>
      <Canvas camera={{ position: [0, 1, 3.5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#0052CC" />
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <CADMesh modelType={modelType} />
        </Float>
        <OrbitControls enableZoom={true} minDistance={2} maxDistance={6} />
      </Canvas>
    </div>
  );
}
