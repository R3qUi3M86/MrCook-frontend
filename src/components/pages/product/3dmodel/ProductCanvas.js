import ProductModel from "./ProductModel"
import { Canvas } from "react-three-fiber";
import Controls from "./Controls";

const ProductCanvas = () => {
    return(
        <div style={{ height: "75vh" }}>
            <Canvas>
                <Controls/>
                <ProductModel/>
            </Canvas>
        </div>
    )
}

export default ProductCanvas;