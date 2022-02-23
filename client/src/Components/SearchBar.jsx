import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return ( 
        <div className="search-bar">
                <input type="search" name="search" id="search" placeholder='Search items...'/>
                <FiSearch className='icon'/>
        </div>
     );
}
 
export default SearchBar;