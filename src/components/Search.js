import React,{ useState } from 'react'
import './style.css'
const Search = () => {

  return (
    <div className='search'>
        <i class="ri-search-line" style={{padding:"5px"}}></i>
        <input type="text" placeholder='Search'/>
    </div>
  )
}

export default Search