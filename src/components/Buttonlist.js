import React from 'react'
import Button from './Button'
const Buttonlist = () => {
  const List =["All","Music","Games","New","Sports","Live","Movies"]
  return (
    <div className='flex px-7'>
     {List.map((each,index) => <Button key={index}name={each}/> )}
     </div>
  )
}

export default Buttonlist