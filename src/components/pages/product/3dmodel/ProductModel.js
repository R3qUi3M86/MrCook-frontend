import React, { useState, useRef, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const path = process.env.PUBLIC_URL;
const scenePath = path + '/scene/scene.gltf'

const ProductModel = () => {
    const [model, setModel] = useState();
    useEffect(() => {
        new GLTFLoader().load(scenePath, setModel)
    })

    return model ? <primitive object={model.scene}/> : null
}

export default ProductModel