import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshWobbleMaterial, Sparkles } from '@react-three/drei';

function RoboticArmModel() {
  const baseRef = useRef();
  const arm1Ref = useRef();
  const arm2Ref = useRef();
  const gearRef = useRef();

  useFrame((state, delta) => {
    if (baseRef.current) {
      baseRef.current.rotation.y += delta * 0.3;
    }
    if (arm1Ref.current) {
      arm1Ref.current.rotation.z = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
    if (arm2Ref.current) {
      arm2Ref.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 1.5) * 0.25;
    }
    if (gearRef.current) {
      gearRef.current.rotation.z -= delta * 0.8;
    }
  });

  return (
    <group ref={baseRef} position={[0, -1.2, 0]} scale={1.2}>
      {/* Base Pedestal */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.4, 1.6, 0.4, 32]} />
        <meshStandardMaterial color="#1E293B" metalness={0.9} roughness={0.2} />
      </mesh>
      
      {/* Lower Joint Ring */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[1.0, 1.0, 0.2, 32]} />
        <meshStandardMaterial color="#0052CC" metalness={0.8} roughness={0.3} emissive="#003D99" emissiveIntensity={0.2} />
      </mesh>

      {/* Rotating Industrial Gear Accent */}
      <group ref={gearRef} position={[0, 0.45, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <torusGeometry args={[0.9, 0.12, 16, 32]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.2} />
        </mesh>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((angle * Math.PI) / 180) * 0.9,
              Math.sin((angle * Math.PI) / 180) * 0.9,
              0,
            ]}
          >
            <boxGeometry args={[0.15, 0.15, 0.2]} />
            <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.2} />
          </mesh>
        ))}
      </group>

      {/* Main Base Arm Column */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.45, 0.65, 1.4, 16]} />
        <meshStandardMaterial color="#475569" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Shoulder Joint Pivot */}
      <group ref={arm1Ref} position={[0, 1.9, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.4, 0.4, 0.9, 16]} />
          <meshStandardMaterial color="#0052CC" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Upper Arm Section */}
        <mesh position={[0.6, 0.9, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.35, 1.6, 0.35]} />
          <meshStandardMaterial color="#1E293B" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* Elbow Joint & Upper Manipulator */}
        <group ref={arm2Ref} position={[1.1, 1.5, 0]}>
          <mesh>
            <sphereGeometry args={[0.32, 16, 16]} />
            <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, 0.7, 0]}>
            <cylinderGeometry args={[0.18, 0.22, 1.1, 16]} />
            <meshStandardMaterial color="#0052CC" metalness={0.7} roughness={0.3} />
          </mesh>

          {/* Robotic Gripper / Tool Tip */}
          <group position={[0, 1.3, 0]}>
            <mesh>
              <boxGeometry args={[0.5, 0.15, 0.3]} />
              <meshStandardMaterial color="#1E293B" metalness={0.9} />
            </mesh>
            {/* Laser Probe Light */}
            <mesh position={[0, 0.15, 0]}>
              <coneGeometry args={[0.1, 0.3, 16]} />
              <MeshWobbleMaterial factor={0.2} speed={3} color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.8} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

export default function ThreeRobotCanvas() {
  return (
    <div className="w-full h-[380px] md:h-[480px] lg:h-[550px] relative rounded-2xl overflow-hidden glass-card">
      <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-brand-blue border border-brand-blue/20 shadow-sm flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        Interactive 3D Robotic Cell Canvas
      </div>
      <div className="absolute bottom-4 right-4 z-10 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-md text-[11px] font-mono tracking-wide">
        Drag to Rotate | Scroll to Zoom
      </div>
      <Canvas
        camera={{ position: [3, 2.5, 5], fov: 45 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#FFFFFF" castShadow />
        <pointLight position={[-5, 5, -5]} intensity={0.8} color="#0052CC" />
        <pointLight position={[5, -2, 5]} intensity={0.6} color="#F59E0B" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <RoboticArmModel />
        </Float>

        <Sparkles count={40} scale={6} size={3} speed={0.4} color="#0052CC" />
        <OrbitControls enableZoom={true} minDistance={3} maxDistance={8} maxPolarAngle={Math.PI / 2 + 0.1} />
      </Canvas>
    </div>
  );
}
