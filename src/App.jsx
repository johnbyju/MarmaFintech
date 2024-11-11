import { Canvas } from '@react-three/fiber';
import './App.css';
import React, { useEffect, useRef } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import Border from './component/Border/Border';



const App = () => {
  return (
    <>

          <Border/>
    
      {/* <Canvas>
      </Canvas> */}
        {/* <ambientLight intensity={0} />
        <directionalLight position={[0, 0, 0]} intensity={0} />
        <OrbitControls enableRotate={true} autoRotate={0}   enableZoom={false}/>
        <Earth/>
        <Environment preset="sunset" /> */}
    
     
    </>
  );
};

export default App;
