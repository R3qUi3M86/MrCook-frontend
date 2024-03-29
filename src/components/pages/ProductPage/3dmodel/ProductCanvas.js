import ProductModel from "./ProductModel"
import { Canvas } from "react-three-fiber";
import Controls from "./Controls";

const ProductCanvas = () => {
    const canvasStyle={height: "100vh"}

    return(
        <div style={canvasStyle}>
            <Canvas camera={{fov: 33, position: [13, 10, 13]}}>
                <Controls/>
                <spotLight position={[-15,25,25]}/>
                <spotLight position={[10,-30,-10]}/>
                <ambientLight intensity={0.5}/>
                <ProductModel/>
            </Canvas>
        </div>
    )
}

export default ProductCanvas;