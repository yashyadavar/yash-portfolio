'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// 1. Here is the 3D Model function living right inside the same file!
function ArchitecturalModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  // This runs on every single frame to continuously spin the object
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4; // Speed of horizontal spin
      meshRef.current.rotation.x += delta * 0.1; // Speed of vertical spin
    }
  });

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1}>
      <mesh ref={meshRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <icosahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial color="#1a1a1a" wireframe />
      </mesh>
    </Float>
  );
}

// 2. Here is your main Hero component
export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="h-screen w-full grid md:grid-cols-2 items-center px-10 md:px-24 relative bg-gray-50">
      
      {/* Foreground Text */}
      <div ref={textRef} className="z-10 pointer-events-none md:col-start-1 flex flex-col gap-2">
        <div className="overflow-hidden">
          {/* Using safely escaped quotes to fix the red error! */}
          <h1 className="hero-text text-5xl md:text-[5vw] lg:text-[6vw] font-bold leading-[0.9] tracking-tighter uppercase text-[#1a1a1a]">
            Yash's
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1 className="hero-text text-5xl md:text-[5vw] lg:text-[6vw] font-bold leading-[0.9] tracking-tighter uppercase text-[#1a1a1a]">
            Architecture
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1 className="hero-text text-5xl md:text-[5vw] lg:text-[6vw] font-bold leading-[0.9] tracking-tighter uppercase text-gray-400">
            Portfolio.
          </h1>
        </div>
      </div>

      {/* 3D Container */}
      <div className="absolute inset-0 md:relative md:inset-auto md:w-full md:h-full md:col-start-2 z-0 opacity-50 md:opacity-100 h-screen md:h-auto top-0 left-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <ArchitecturalModel />
        </Canvas>
      </div>

    </section>
  );
}