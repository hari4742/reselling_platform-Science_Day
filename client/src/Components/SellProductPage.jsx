import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import backend from '../backend';
import '../Styles/sell-product-page.css';
const SellProductPage = () => {
    const navigate = useNavigate();
    const {user_id} = useParams();
    const [prod_id,setProdId] = useState(null);
    const [product_name,setProductName] = useState("");
    const [category,setCategory] = useState("Category");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const uploadImages = async()=>{
        const files = document.getElementById("prod_imgs").files;
        // console.log(files);
        // console.log(files.length);
        if(files.length === 0){
            swal("Please Upload Images of your product",'','info');
        }else{
            let formdata = new FormData();
            for(let i=0;i<files.length;i++){
                formdata.append('prod_imgs',files[i]);
            }
            const res = await backend.post(`/user/${user_id}/prod/${prod_id}/upload/product/images`,formdata,{headers:{'Content-Type': 'multipart/form-data'}});
            // console.log(res.data.data);
            swal("Your product is ready to buy",'',"success");
            navigate('/products');
        }
    }
    const handleSubmit = async(e)=>{
        const currentDate = new Date();
        const posted_date = currentDate.getFullYear().toString()+'-'+(currentDate.getMonth()+1).toString()+'-'+currentDate.getDate().toString();
        if(product_name==="" || category==="" ||category==="Category" || price === "" ||description === ""){
            swal("Input fiels can't be empty",'info');
        }else{
            let formdata = new FormData();
            formdata.set('user_id',user_id);
            formdata.set('product_name',product_name);
            formdata.set('category',category);
            formdata.set('price',price);
            formdata.set('posted_date',posted_date);
            formdata.set('description',description);
            formdata.set("display_img",document.getElementById('display_img').files[0]);
            const res = await backend.post('/product/add',formdata,{headers:{'Content-Type': 'multipart/form-data'}});
            if(res.data.status === 'success'){
                setProdId(res.data.data[0].prod_id);
                if(e.target.innerText !== 'Upload More Images'){
                    swal("Your product is ready to buy",'',"success");
                    navigate('/products');
                }
                // console.log(prod_id);
            }else{
                swal(res.data.status);
            }
        }
    }
    return ( 
        <div className="sell-product-page">
            <h1>Sell a Product</h1>
            {prod_id?
            <input type="file" name="prod_imgs" id="prod_imgs" multiple accept='image/png, image/jpg, image/jpeg'/>
            :
            <form onSubmit={(e)=>{e.preventDefault();}}>
                <input onChange={(e)=>{setProductName(e.target.value);}} type="text" name="product_name" id="product_name" placeholder="Product Name" value={product_name} required/>
                <div className="category-price">
                    <input type="number" onChange={(e)=>{setPrice(e.target.value);}} placeholder="Price" name="price" id="price" value={price} required/>
                    <select  onChange={(e)=>{setCategory(e.target.value);}} name="categorty" id="category" value={category} placeholder="Category" required>
                        <option value=""  hidden defaultValue >Category</option>
                        <option value="Phones">Phones</option>
                        <option value="Mugs">Mugs</option>
                        <option value="Bucket">Bucket</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cycles">Cycles</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Beauty product">Beauty product</option>
                        <option value="Games">Games</option>
                    </select>
                </div>
                <input type="file" name='display_img' id='display_img' accept="image/png, image/jpg, image/jpeg" required/>
                <textarea onChange={(e)=>{setDescription(e.target.value);}} name="description" id="description" cols="50" rows="3" placeholder="Description" value={description} required></textarea>

            </form>
            }
            <div className="sell-product-page-btns">
                {!prod_id?
                <p onClick={handleSubmit}>Upload More Images</p>
                :null}
                {prod_id?
                <p onClick={uploadImages}>Sell Product</p>
                :
                <p id='submit-btn' onClick={(e)=>{handleSubmit(e)}}>Submit</p>
                
                }
            </div>
        </div>
     );
}
 
export default SellProductPage;