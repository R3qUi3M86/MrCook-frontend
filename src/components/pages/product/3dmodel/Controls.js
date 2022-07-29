import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useThree, useFrame } from "react-three-fiber";

extend({ OrbitControls })

const Controls = () => {
    const orbitCtrlRef = useRef();
    const {camera, gl} = useThree();

    useFrame(() => {
        orbitCtrlRef.current.update();
    });

    return(
        <orbitControls 
            args={[camera, gl.domElement]}
            ref={orbitCtrlRef}
            enablePan={false}
            maxDistance={5.0}
            minDistance={0.2}
            autoRotate
        />
    );
}

export default Controls;