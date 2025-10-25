import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-6'>
        <button className='bg-gray-200 hover:text-white px-2  cursor-pointer hover:bg-black font-bold shadow-lg '>{name}</button>
    </div>
  )
}

export default Button;