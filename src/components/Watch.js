import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/MenuSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
const Watch = () => {
  const [searchparam] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='flex flex-col w-full'>
    <div className='px-2 flex'>
      <div className=''>
      <iframe width="1200" height="600" 
      src={"https://www.youtube.com/embed/" + searchparam.get("v")} 
      title="YouTube video player" frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
      </div>
      <div className='w-full flex flex-col-reverse '>
        <LiveChat />
      </div>
    </div>
        <CommentsContainer />
    </div>
  )
}

export default Watch;