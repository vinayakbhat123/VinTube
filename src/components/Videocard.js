import React from 'react'

const Videocard = ({info}) => {
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img className='rounded-lg' alt="tumbnail" src={thumbnails.medium.url} />
        <ul className=''>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}views</li>
        </ul>
    </div>
  )
}

export default Videocard