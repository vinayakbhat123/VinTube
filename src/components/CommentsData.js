import React from 'react'
import Comment from './Comment';
const CommentsData = ({ Comments}) => {
  const commentList = Comments?.comments ?? [];
  return (
    <div className='flex p-3 flex-col'>
       {  commentList.map((each,index) =><div key={index}><Comment Datas={each}/></div>) }
    </div>
  )
}

export default CommentsData