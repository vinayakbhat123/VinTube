import React from 'react'

const Comment = ({Datas}) => {
  return (
    <div className='flex flex-col px-4 font-bold m-5 bg-gray-50  shadow-2xl'>
        <div className='flex '>
            <img alt='User-icon' src='https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331256_1280.png' width={25}   />
            <h1>{Datas.user.fullName}</h1>
            <div className='px-6'><p className=''>Reply: {Datas.body}</p></div> 
        </div>
            
    </div>
  )
}

export default Comment