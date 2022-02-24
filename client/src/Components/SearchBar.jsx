import React from 'react';
import { FiSearch } from 'react-icons/fi';
import backend from '../backend';
import '../Styles/search-bar.css'
const SearchBar = ({setProducts}) => {
    const handleChange = async(e)=>{
        const res = await backend.get('/products/search?q='+e.target.value);
        setProducts(res.data.data);
    }
    return ( 
        <div className="search-bar">
                <input onChange={handleChange} type="search" name="search" id="search" placeholder='Search items...'/>
                <FiSearch className='icon'/>
        </div>
     );
}
 
export default SearchBar;