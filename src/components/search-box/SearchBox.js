import React from 'react';
import "./SearchBox.css"

const SearchBox = ({handleOnSearch}) => {
    return (
       <input 
       className = 'search-box'
       type = 'search'
       onChange = {handleOnSearch}   
       placeholder = "Search a monster..."
       /> 
    );
}

export default SearchBox;
