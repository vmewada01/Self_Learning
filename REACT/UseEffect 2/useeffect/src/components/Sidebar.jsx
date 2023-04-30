import React from 'react'
import styled from 'styled-components';

const SideB= styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: white;
    overflow-x: hidden;
    padding-top: 20px;
    color: black;
    display: flex;
    flex-direction: column;
     gap: 50px;
   border: 1px solid black;
   padding-left: 30px
    
    `
  
const Sidebar = () => {
    
  return (
    <div>
   <SideB>
    <b>Logo</b>
    <div className='hover'> <i class="fa-solid fa-house"></i><a>Home</a></div>
    <div  className='hover'> <i class="fa-solid fa-arrow-trend-up"></i><a>Trending</a></div>
    <div  className='hover'><i class="fa-sharp fa-light fa-circle-stop"></i><a>Explore</a></div>
    <div  className='hover'> <i class="fa-regular fa-star"></i><a>Favourites</a></div>
    <div  className='hover'> <i class="fa-solid fa-gear"></i><a>Settings</a></div>

       </SideB>
    </div>
   
  )
}

export default Sidebar