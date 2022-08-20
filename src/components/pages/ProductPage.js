import React, {Component} from 'react';
import ProductCanvas from './productPage/3dmodel/ProductCanvas';
import PictogramOverlay from './productPage/pictograms/PictogramOverlay';
import CommercialPhrase from './productPage/description/CommercialPhrase';
import ImageCarousel from './productPage/imageCarousel/ImageCarousel';
import GoldSection from './productPage/description/goldSection/GoldSection';
import PlatinumSection from './productPage/description/silverSection/PlatinumSection';
import CompatibilitySection from './productPage/description/compatibilitySection/CompatibilitySection';
import FeaturesSection from './productPage/description/featuresSection/FeaturesSection';
import ReviewsSection from './productPage/reviewsSection/ReviewsSection';

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
                <GoldSection/>
                <PlatinumSection/>
                <CompatibilitySection/>
                <FeaturesSection/>
                <ReviewsSection/>
            </div>
        );
    }
}

export default ProductPage;