import React from 'react';
import Header from '../Components/Header';
import Heart from '../Components/Heart';
import ImgSwiper from '../Components/ImgSwiper';
import "../Styles/product-details-page.css";
const ProductDetailsPage = () => {
    return ( 
        <div className="product-details-page">
            <Header/>
            <div className="imgs-details">
                <div className="imgs-description">
                    <ImgSwiper/>
                    <div className="description">
                        <h3>Description</h3>
                    <p>11.94 cm (4.7 inch) Retina HD Display

                    8MP Rear Camera | 1.2MP Front Camera

                    Apple A8 64-bit processor and M8 Motion Co-processor

                    1 Year Manufacturer Warranty

                    All colours are available

                    Cod all over India</p>
                    </div>
                </div>
                <div className="details">
                    <div className="product-details">
                        <Heart/>
                        <p>price</p>
                        <p>Product Name</p>
                        <p>Posted Date</p>
                    </div>
                    <div className="seller-details">
                        <h3>Seller</h3>
                        <p>Name</p>
                        <p>Branch</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetailsPage;