import React,{ useState } from 'react'
import './style.css'
const Sort = () => {



    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);

    const mouseEnter1 = () => {
        setIsHover1(true);
    }
    const mouseLeave1 = () => {
        setIsHover1(false);
    }
    const mouseEnter2 = () => {
        setIsHover2(true);
    }
    const mouseLeave2 = () => {
        setIsHover2(false);
    }


    return (
        <>
            <div className=''>
                <button style={{backgroundColor: isHover1 ? "red" :"indigo",color:"white"}} onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1}><i class="ri-sort-asc"></i>Sort By</button>
                <button style={{backgroundColor: isHover2 ? "red" :"indigo",color:"white",margin:"5px"}} onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2}><i class="ri-filter-2-line"></i>Filter By</button>
            </div>
     
        </>
    )
}

export default Sort