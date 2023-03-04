import React, { useState }  from 'react'
import Sort from './Sort'
import Search from './Search'
import './style.css'
const Midpage = () => {

  return (<>
  <div style={{marginTop:"-80px"}}>
    <div>
    <h3>Users</h3>
    </div>    
    <div style={{border:"2px",borderBlockStyle:"inset"}}>
        {/* <h1></h1> */}
        <div>
        <Sort />
        {/* <Search/> */}
    
    </div>
    </div>
  </div>
  </>
  )
}

export default Midpage