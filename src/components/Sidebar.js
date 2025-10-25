import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='p-5 shadow-lg col-span-1'>
        <ul className='font-bold-'>
           <li><Link to={"/"}>Home</Link> </li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>

        <h1 className='font-bold'>Subsription</h1>
        <ul className=''>
            <li>Music</li>
            <li>Games</li>
            <li>Sports</li>
            <li>Movies</li>
        </ul>
         <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul className=''>
            <li>Music</li>
            <li>Games</li>
            <li>Sports</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar