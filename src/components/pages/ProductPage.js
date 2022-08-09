import React, {Component} from 'react';
import ProductCanvas from './ProductPage/3dmodel/ProductCanvas';
import PictogramOverlay from './ProductPage/pictograms/PictogramOverlay';
import CommercialPhrase from './ProductPage/description/CommercialPhrase';
import ImageCarousel from './ProductPage/imageCarousel/ImageCarousel';

class ProductPage extends Component {

    render() {
        return (
            <div>
                <div className="position-relative">
                    <ProductCanvas/>
                    <PictogramOverlay side="left"/>
                    <PictogramOverlay side="right"/>
                    
                </div>
                <CommercialPhrase/>
                <ImageCarousel/>
            </div>
        );
    }
}

export default ProductPage;