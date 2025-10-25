import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/MenuSlice';
import { useSearchParams } from 'react-router-dom';
const Watch = () => {
  const [searchparam] = useSearchParams();
  console.log(searchparam.get("v"));
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='px-2 '>
      <iframe width="1200" height="600" 
      src={"https://www.youtube.com/embed/" + searchparam.get("v")} 
      title="YouTube video player" frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
    </div>
  )
}

export default Watch