import React from "react";

import './search-box.style.css';

export const SearchBox = ({ placeholder, handleSearch }) => (
    <input
        type='search'
        className='search'
        placeholder={placeholder}
        onChange={handleSearch}
    />
);