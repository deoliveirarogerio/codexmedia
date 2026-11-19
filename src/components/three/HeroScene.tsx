"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, MeshDistortMaterial, Sparkles, ContactShadows } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PURPLE = "#5a339c";
const PURPLE_LIGHT = "#9472d0";
const GRAY = "#b4b4b7";

/** Núcleo central: esfera líquida que "respira", representando a marca. */
function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });
  return (
    <mesh ref={ref} castShadow>
      <icosahedronGeometry args={[1.25, 64]} />
      <MeshDistortMaterial color={PURPLE} metalness={0.55} roughness={0.12} distort={0.38} speed={1.6} envMapIntensity={1.3} />
    </mesh>
  );
}

/** Anéis orbitais em perspectiva — remetem a dados, órbitas de busca e tráfego. */
function Rings() {
  const a = useRef<THREE.Mesh>(null);
  const b = useRef<THREE.Mesh>(null);
  const c = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (a.current) a.current.rotation.z += delta * 0.25;
    if (b.current) b.current.rotation.z -= delta * 0.18;
    if (c.current) c.current.rotation.z += delta * 0.1;
  });
  return (
    <>
      <mesh ref={a} rotation={[Math.PI / 2.3, 0.2, 0]}>
        <torusGeometry args={[2.05, 0.018, 16, 200]} />
        <meshStandardMaterial color={GRAY} metalness={1} roughness={0.2} />
      </mesh>
      <mesh ref={b} rotation={[Math.PI / 1.7, -0.5, 0.4]}>
        <torusGeometry args={[2.45, 0.012, 16, 200]} />
        <meshStandardMaterial color={PURPLE_LIGHT} metalness={0.9} roughness={0.25} emissive={PURPLE_LIGHT} emissiveIntensity={0.35} />
      </mesh>
      <mesh ref={c} rotation={[Math.PI / 2.8, 0.9, -0.3]}>
        <torusGeometry args={[2.9, 0.008, 16, 200]} />
        <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.3} transparent opacity={0.5} />
      </mesh>
    </>
  );
}

type ShapeKind = "box" | "octa" | "tetra" | "torus";

interface Satellite {
  kind: ShapeKind;
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}

function SatelliteMesh({ kind, position, scale, color, speed }: Satellite) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 0.8;
  });
  return (
    <Float speed={1.4 + speed} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        {kind === "box" && <boxGeometry args={[1, 1, 1]} />}
        {kind === "octa" && <octahedronGeometry args={[0.8]} />}
        {kind === "tetra" && <tetrahedronGeometry args={[0.85]} />}
        {kind === "torus" && <torusGeometry args={[0.55, 0.22, 32, 64]} />}
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.18} envMapIntensity={1.2} />
      </mesh>
    </Float>
  );
}

/** Grupo que acompanha o mouse com inércia, criando parallax e profundidade real. */
function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, x * 0.45, 3, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -y * 0.3, 3, delta);
    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, x * 0.6, 2, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, y * 0.4, 2, delta);
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={group}>{children}</group>;
}

export default function HeroScene() {
  const satellites = useMemo<Satellite[]>(
    () => [
      { kind: "box", position: [2.6, 1.3, 0.4], scale: 0.42, color: GRAY, speed: 0.5 },
      { kind: "octa", position: [-2.5, 1.5, -0.6], scale: 0.48, color: PURPLE_LIGHT, speed: 0.4 },
      { kind: "torus", position: [-2.3, -1.6, 0.8], scale: 0.62, color: PURPLE, speed: 0.35 },
      { kind: "tetra", position: [2.4, -1.5, -0.4], scale: 0.5, color: "#ffffff", speed: 0.6 },
      { kind: "box", position: [0.4, 2.6, -1.4], scale: 0.26, color: PURPLE_LIGHT, speed: 0.7 },
      { kind: "octa", position: [0.9, -2.5, 0.9], scale: 0.3, color: GRAY, speed: 0.5 },
    ],
    [],
  );

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 8.4], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}

    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} castShadow />
      <pointLight position={[-4, -2, 3]} intensity={30} color={PURPLE_LIGHT} />
      <pointLight position={[3, 2, -3]} intensity={18} color="#ffffff" />

      <Rig>
        <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
          <Core />
        </Float>
        <Rings />
        {satellites.map((s, i) => (
          <SatelliteMesh key={i} {...s} />
        ))}
        <Sparkles count={90} scale={[8, 6, 5]} size={2.2} speed={0.35} color="#d6c8ef" opacity={0.8} />
      </Rig>

      <ContactShadows position={[0, -3, 0]} opacity={0.35} scale={12} blur={2.8} far={5} color="#000000" />

      {/* Ambiente de estúdio gerado localmente (sem baixar HDRI) para reflexos realistas */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 4, 3]} scale={[8, 2, 1]} color="#ffffff" />
        <Lightformer form="rect" intensity={2} position={[-5, 0, 2]} rotation-y={Math.PI / 2} scale={[6, 2, 1]} color={PURPLE_LIGHT} />
        <Lightformer form="ring" intensity={2.5} position={[5, 1, -2]} scale={3} color="#ebe4f7" />
        <Lightformer form="rect" intensity={1} position={[0, -4, -4]} scale={[10, 2, 1]} color={PURPLE} />
      </Environment>
    </Canvas>
  );
}
