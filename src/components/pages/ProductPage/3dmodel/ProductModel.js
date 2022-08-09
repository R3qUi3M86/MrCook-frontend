import React from "react";
import { MeshPhongMaterial } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from "react";
import { useLoader } from "react-three-fiber";

const path = process.env.PUBLIC_URL;
const scenePath = path + '/scene/scene.gltf'

const ProductModel = () => {
    const newMaterial = new MeshPhongMaterial({color: 0x5e3440, shininess:83});
    const gltf = useLoader(GLTFLoader, scenePath)
    if (gltf) {
        gltf.scene.traverse((o) => {
            if (o.isMesh) o.material = newMaterial;
        });
    }
    return (
        <Suspense fallback={null}>
            <primitive object={gltf.scene} />
        </Suspense>
  )
}

export default ProductModel