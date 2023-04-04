import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import './assets/css/central.css'
import * as THREE from 'three';


const Tech = (props) => {
    const [decal] = useTexture([props.imgUrl]);
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow position={[0, 0, 0]} rotation={[0, 0, 0]}>
                <planeGeometry args={[4, 4]} />
                <meshPhysicalMaterial color='rgba(0, 0, 0, 0.5)' transparent opacity={0.8} side={THREE.DoubleSide} />
                <Decal
                    position={[0, 0, 0.001]}
                    rotation={[0, 0, 0]}
                    scale={[4, 4, 4]}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const Techcanvas = ({ icon }) => {

    return (
        <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }} id="glass2">
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <Tech imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default Techcanvas;
