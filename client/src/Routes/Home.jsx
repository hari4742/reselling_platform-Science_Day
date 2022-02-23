import React, { useEffect, useState } from 'react';
import ItemCard from '../Components/ItemCard';
import mob from '../Images/mob.jpeg';
import books from '../Images/books.jpeg';
import Header from '../Components/Header';
import backend from '../backend';
import Footer from '../Components/Footer';

const Home = () => {
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
        <div className="home">
            <Header/>
            {products.map((prod,idx)=>{
                return <ItemCard key={idx} img={mob} product_name={prod.product_name} price = {prod.price} date_posted = {prod.posted_date}/>
            })}
            <ItemCard img = {mob} product_name = "Mobile Phone" price="500-600" date_posted = "13 Feb 2022"/>
            <ItemCard img = {books} product_name = "Books" price="600" date_posted="1 Jan 2022"/>
            <ItemCard img = {mob} product_name = "Mobile Phone" price="500-600" date_posted = "13 Feb 2022"/>
            <ItemCard img = {books} product_name = "Books" price="600" date_posted="1 Jan 2022"/>
            <ItemCard img = {mob} product_name = "Mobile Phone" price="500-600" date_posted = "13 Feb 2022"/>
            <ItemCard img = {books} product_name = "Books" price="600" date_posted="1 Jan 2022"/>
            <Footer/>
        </div>
     );
}
 
export default Home;