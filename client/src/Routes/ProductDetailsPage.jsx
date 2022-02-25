import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import backend from '../backend';
import Heart from '../Components/Heart';
import ImgSwiper from '../Components/ImgSwiper';
import "../Styles/product-details-page.css";
import { AuthContext } from '../context/AuthContext';
const ProductDetailsPage = () => {
    const navigate = useNavigate();
    const {isLogged} = useContext(AuthContext);
    const {id} = useParams();
    const [user,setUser] = useState(null);
    const [prod,setProd] = useState({});
    const [imgs,setImgs] = useState([]);
    const fetchProduct = async()=>{
        const res = await backend.get(`/product/${id}/details`);
        // console.log(res.data.data[0]);
        setProd(res.data.data[0]);
        let user_id = res.data.data[0].user_id;
        const response = await backend.get(`/user/${user_id}/details`);
        setUser(response.data.data[0]);
        // console.log(response.data.data[0]);

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
                        <Heart  prod_id={id}/>
                        <p>Price details</p>
                        <h3>₹ {prod.price}</h3>
                        <p className='sec-info'>Product Name</p>
                        <p className='pri-info'>{prod.product_name}</p>
                        <p className='sec-info'>Posted Date</p>
                        <p className='pri-info'>{prod.posted_date}</p>
                    </div>
                    <div className="seller-details">
                        <p>Seller Description</p>
                        <h3>{user?user.first_name.charAt(0).toUpperCase()+user.first_name.slice(1) + ' '+user.last_name:null}</h3>
                        <p className='sec-info'>Branch</p>
                        <p className='pri-info'>{user?user.department:null}</p>
                        <p className='sec-info'>Phone Number</p>
                        <p className='pri-info'>{isLogged?user?user.mobile:null:'+91xxxxxxxxxx'}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetailsPage;