import React, { useEffect, useState } from 'react';
import ItemCard from '../Components/ItemCard';
import backend from '../backend';
import SearchBar from '../Components/SearchBar';
import '../Styles/products.css';

const Category = (props)=>{
    const handleCategory = (e)=>{
        props.setProducts(props.products.filter((prod)=>{
            if(e.target.innerText === 'All')return true;
            return prod.category===e.target.innerText}
            ))
        console.log(e.target.innerText);
    }
    return(
        <p onClick={handleCategory}  className="cat">
            {props.cat}
        </p>
    )
}

const Products = () => {
    const [products,setProducts] = useState([]);
    const [prod,setProd] = useState(products);
    const [categories,setCategories] = useState([]);
    const getCategories = (products)=>{
        let set = new Set();
        set.add('All');
        for(let i=0;i<products.length;i++){
            set.add(products[i].category);
        }
        // console.log(set);
        setCategories(Array.from(set));
    }
    const fecthProducts = async()=>{
        const res = await backend.get('/products');
        setProducts(res.data.data);
        setProd(res.data.data);
        getCategories(res.data.data);
        // console.log(res.data.data);
    }
  
  
    useEffect(()=>{
        fecthProducts();
    },[]);
    return ( 
        <div className="products">
            <div className="categories">
                <p>Categories: </p>
                {categories.map((cat,idx)=>{return <Category products={products} setProducts={setProd} key={idx} cat={cat}/>})}
            </div>
            <div className="search-prods">
                <SearchBar setProducts={setProd}/>
                {prod.map((prod,idx)=>{
                    return <ItemCard key={idx} prod={prod} img={`http://localhost:5000`+prod.display_img} product_name={prod.product_name} price = {prod.price} date_posted = {prod.posted_date}/>
                })}
            </div>
        </div>
     );
}
 
export default Products;