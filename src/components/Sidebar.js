import React,{ useState } from 'react'

const Sidebar = () => {

  const [clickDash,setClickDash]= useState(false);
  const [clickUsers,setClickUsers]= useState(false);

  const clickDas=()=>{
    setClickDash(true);
    setClickUsers(false);
  }
  const clickUser =()=>{
    setClickDash(false);
    setClickUsers(true);  
  }
  return (
    <>
    <h5 style={{fontFamily:"sans-serif"}}>MAIN MENU</h5>
    <div >
        <button style={{backgroundColor: clickDash ? "red" :"indigo",color:"#F0EEED",paddingBottom:"3px"}} onClick={clickDas}> <i class="ri-dashboard-2-line"></i> Dashboard</button>
        </div>
        <div style={{paddingTop:"10px"}}>
        <button style={{backgroundColor: clickUsers ? "red" :"indigo",color:"#F0EEED"}} onClick={clickUser}><i class="ri-user-line"></i> Users</button>
    </div>
      </>
  )
}

export default Sidebar