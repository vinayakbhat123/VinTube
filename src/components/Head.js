import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/MenuSlice';
import { Link } from 'react-router-dom';
const Head = () => {
const dispatch = useDispatch();
const handletogglemenu = () =>{
  dispatch(toggleMenu());
}

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex p-3 col-span-1'>
        <img onClick={() =>handletogglemenu()} className='h-7'
        alt='menu' src='https://cdn.pixabay.com/photo/2021/10/09/12/45/hamburger-icon-6694072_1280.png' />

       <Link to={"/"}><img className='h-8 px-5 '
         alt='logo' src='https://cdn.pixabay.com/photo/2021/05/22/11/38/yt-6273367_1280.png'  /></Link> 
      </div>
      <div className='col-span-10 justify-between'>
        <input className='border border-black h-8 rounded-s-2xl  w-1/2 px-10' 
        type="text" placeholder='Search '/>
        <button className=' h-8  bg-gray-200 border border-black rounded-e-lg shadow-lg'>Search</button>
      </div>
      <div className='col-span-1 pl-3'> 
        <img  className='h-7 rounded-md shadow-lg'
         alt="user_icon" src='https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_1280.png' /> 
       </div>
    </div>
  )
}

export default Head