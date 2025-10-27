import React from 'react'

const Chatmsg = ({Message}) => {
  return (
  
    <div className='flex  '>
         <img  className='h-5 rounded-md shadow-lg'
         alt="user_icon" src='https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_1280.png' /> 
        <span className='ml-2 font-bold'>{Message.username}</span>
        <span className='ml-2'>:{Message.message}</span>
    </div>
   
  )
}

export default Chatmsg