import React, {Component} from 'react';
import ProductCanvas from './ProductPage/3dmodel/ProductCanvas';
import PictogramOverlay from './ProductPage/pictograms/PictogramOverlay';
import CommercialPhrase from './ProductPage/description/CommercialPhrase';

class ProductPage extends Component {

    render() {
        return (
            <div className="position-relative">
                <ProductCanvas/>
                <PictogramOverlay side="left"/>
                <PictogramOverlay side="right"/>
                <CommercialPhrase/>
            </div>
        );
    }
}

export default ProductPage;