import React,{ useState } from 'react'
const Grid = () => {

    const [Grid,setGrid]= useState(false);
    const [List,setList]= useState(false);
  
    const clickGrid=()=>{
      setGrid(true);
      setList(false);
  
    }
    const clickList =()=>{
      setGrid(false);
      setList(true);  }

  return (<>
    <div style={{alignSelf:"end"}}>
    <button style={{marginTop:"-40px",backgroundColor: List ? "red" :"white"}} onClick={clickList}><i class="ri-list-check"></i></button>
    <button style={{marginTop:"-40px",backgroundColor: Grid ? "red" :"white"}} onClick={clickGrid}><i class="ri-grid-fill"></i></button>
    </div>
  </>
  )
}

export default Grid