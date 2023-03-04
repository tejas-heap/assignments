import React, { useState } from 'react'
import './style.css'


const Addusers = () => {

  const [isHover,setIsHover]= useState(false);

  const mouseEnter=()=>{
    setIsHover(true);
  }
  const mouseLeave=()=>{
    setIsHover(false);
  }
  return (
    <div style={{display:"flex"}} className="addusr">
        <button style={{marginRight: "30px",backgroundColor: isHover ? "red" :"indigo",height:"35px",borderRadius:"10px",color:"white"}} id="btn" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><b>+ Add User</b></button>
    </div>
  )
}

export default Addusers
