import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import backend from '../backend';
import Heart from '../Components/Heart';
import ImgSwiper from '../Components/ImgSwiper';
import { AuthContext } from '../context/AuthContext';
import "../Styles/product-details-page.css";
const ProductDetailsPage = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const [prod,setProd] = useState({});
    const [imgs,setImgs] = useState([]);
    const fetchProduct = async()=>{
        
        const res = await backend.get(`/product/${id}/details`);
        // console.log(res.data.data[0]);
        setProd(res.data.data[0]);
    }
    const fetchImages = async()=>{
        const res = await backend.get(`/product/${id}/images`);
        setImgs(res.data.data);
        // console.log(res.data.data); 
    }
    useEffect(()=>{
        fetchProduct();
        fetchImages();
    },[]);
    return ( 
        <div className="product-details-page">
            <div className="imgs-details">
                <div className="imgs-description">
                    <ImgSwiper prod_imgs={imgs}/>
                    <div className="description">
                        <h3>Description</h3>
                    <p>{prod.description}</p>
                    </div>
                </div>
                <div className="details">
                    <div className="product-details">
                        <Heart/>
                        <p>Price details</p>
                        <h3>₹ {prod.price}</h3>
                        <p className='sec-info'>Product Name</p>
                        <p className='pri-info'>{prod.product_name}</p>
                        <p className='sec-info'>Posted Date</p>
                        <p className='pri-info'>{prod.posted_date}</p>
                    </div>
                    <div className="seller-details">
                        <p>Seller Description</p>
                        <h3>{user.first_name.charAt(0).toUpperCase()+user.first_name.slice(1) + ' '+user.last_name}</h3>
                        <p className='sec-info'>Branch</p>
                        <p className='pri-info'>{user.department}</p>
                        <p className='sec-info'>Phone Number</p>
                        <p className='pri-info'>{user.mobile}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetailsPage;