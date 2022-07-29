import React, { useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const ProductModel = () => {
    // const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);
    const props = useSpring({
        scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
        color: hovered ? "red" : "grey"
    });
    // useFrame(() => {
    //     meshRef.current.rotation.y += 0.01
    // })

    return(
        <a.mesh 
            // ref={meshRef}
            onPointerEnter={() => setHovered(true)} 
            onPointerLeave={() => setHovered(false)}
            onClick={() => setActive(!active)}
            scale={props.scale}>

            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
            <a.meshBasicMaterial attach="material" color={props.color}/>
        </a.mesh>
    );
}

export default ProductModel