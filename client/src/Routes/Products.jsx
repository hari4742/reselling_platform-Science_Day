import React, { useEffect, useState } from 'react';
import ItemCard from '../Components/ItemCard';
import backend from '../backend';
import SearchBar from '../Components/SearchBar';


const Products = () => {
    const [products,setProducts] = useState([]);
    const fecthProducts = async()=>{
        const res = await backend.get('/products');
        setProducts(res.data.data);
        // console.log(res.data.data);
    }
    useEffect(()=>{
        fecthProducts();
    },[]);
    return ( 
        <div className="products">
            <SearchBar/>
              {products.map((prod,idx)=>{
                return <ItemCard key={idx} prod={prod} img={`http://localhost:5000`+prod.display_img} product_name={prod.product_name} price = {prod.price} date_posted = {prod.posted_date}/>
            })}
        </div>
     );
}
 
export default Products;