import { Environment, Html, PresentationControls, useGLTF } from '@react-three/drei'
import React from 'react'


const Laptop = () => {
    const laptop = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf")
    return (
        <>
        <Environment preset='warehouse' />
        <PresentationControls global azimuth={[-0.4,1]} >
        <primitive object={laptop.scene} position-y={-1.1} position-x={0.5} />
        <Html wrapperClass='laptop' position-x={0.55} position-y={0.3} position={[0.3,1,-1.5]} transform rotation-x={-0.25} distanceFactor={1.19} >
            <iframe src='https://projects-3s2a.onrender.com/'  />
        </Html>
        </PresentationControls>
        </>
    )
}

export default Laptop