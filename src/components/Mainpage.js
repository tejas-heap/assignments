import React from 'react'
import Homepage from './Homepage'
import Sidebar from './Sidebar'
import Adduser from './Addusers'
import Topbar from './Topbar'
import Midpage from './Midpage'
import Grid from './Grid'
import Search from './Search'
import './style.css'
import Adduser2 from './Adduser2'
import Search2 from './Search2'


const Mainpage = () => {
  return (
    <>
    <div className="container">

   <div className='homepage'>
        <Homepage/>
    </div>
    <div className='topbar'>
        <Topbar/>
    </div>
  
    <div className='adduser'>
        <Adduser/>
    </div>
    <div className='adduser2'>
        <Adduser2/>
    </div>
    <div className='search'>
        <Search/>
    </div>
    <div className='grid'>
        <Grid/>
    </div>
    <div className='search2'>
    <Search2/>
    </div>
    
    <div className='sidebar'>
        <Sidebar/>
    </div> 
    <div className='midpage'>
        <Midpage/>
    </div>
    
    </div>
    </>
    )
}

export default Mainpage