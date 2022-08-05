import React, { useState, useEffect } from "react";
import { MeshLambertMaterial, MeshPhongMaterial } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const path = process.env.PUBLIC_URL;
const scenePath = path + '/scene/scene.gltf'

const ProductModel = () => {
    const newMaterial = new MeshPhongMaterial({color: 0x5e3440, shininess:83});
    const [model, setModel] = useState();
    useEffect(() => {
        new GLTFLoader().load(scenePath, setModel)
        if (model){
            model.scene.traverse((o) => {if (o.isMesh) o.material = newMaterial;})
        }
    })
    
    
    
    return (
        model ? <primitive object={model.scene}/> : null
    )
}

export default ProductModel