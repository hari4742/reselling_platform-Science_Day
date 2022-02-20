import React from 'react';
import ItemCard from '../Components/ItemCard';
import mob from '../Images/mob.jpeg';
import books from '../Images/books.jpeg';
import Header from '../Components/Header';

const Home = () => {
    return ( 
        <div className="home">
            <Header/>
            <ItemCard img = {mob} product_name = "Mobile Phone" price="500-600" date_posted = "13 Feb 2022"/>
            <ItemCard img = {books} product_name = "Books" price="600" date_posted="1 Jan 2022"/>
            <ItemCard img = {mob} product_name = "Mobile Phone" price="500-600" date_posted = "13 Feb 2022"/>
            <ItemCard img = {books} product_name = "Books" price="600" date_posted="1 Jan 2022"/>
            <ItemCard img = {mob} product_name = "Mobile Phone" price="500-600" date_posted = "13 Feb 2022"/>
            <ItemCard img = {books} product_name = "Books" price="600" date_posted="1 Jan 2022"/>
        </div>
     );
}
 
export default Home;