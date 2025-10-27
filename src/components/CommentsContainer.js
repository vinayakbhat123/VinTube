import React, { useEffect, useState } from 'react'
import CommentsData from './CommentsData'

const CommentsContainer = () => {
    const [Comments,setComments] = useState("");
    useEffect(() =>{
        getComments();
    },[])
    const getComments = async () => {
   try {
     const data = await fetch("https://dummyjson.com/comments?limit=20");
     const json = await data.json();
    //  console.log("json",json.comments)
     setComments(json)
   } catch (error) {
    console.log(error);
   }
    } 
  return (
    <div className='px-2 p-2 m-5 '>
        <h1 className='text-2xl font-bold flex '>Comments </h1>
        {/* {Comments.map((each,index) => <div key={index}> <CommentsData Comments={each} />  </div>)} */}
        <CommentsData Comments={Comments} /> 
        
    </div>
  )
}

export default CommentsContainer;