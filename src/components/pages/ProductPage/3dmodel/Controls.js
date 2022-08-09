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
            maxDistance={23.0}
            minDistance={15.0}
            target={[0, 2.7, 0]}
            enableDamping
            autoRotate
        />
    );
}

export default Controls;