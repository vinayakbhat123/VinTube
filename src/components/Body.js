import React from 'react';
import Sidebar from './Sidebar';
import Maincontainer from '../components/Maincontainer';
import { useSelector } from 'react-redux';
const Body = () => {
  const MenuOpen = useSelector((store) =>store.Menu.isOpenMenu)
  return (
    <div className='flex'>
     {MenuOpen && <Sidebar /> }
      <Maincontainer />
    </div>
  )
}

export default Body