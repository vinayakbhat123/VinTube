import React, { useEffect, useState } from 'react'
import { Youtube_api_key } from '../utils/constants';
import Videocard, { Advideocard}  from './Videocard';
import {Link} from "react-router-dom"
const Videocontainer = () => {
  const [Videos,setVideos] = useState([])
  useEffect(() =>{
    getVideos();
  },[])

  const getVideos = async () =>{
    try {
      const data = await fetch(Youtube_api_key);
      if(!data)throw new Error("Response not successful");
       const json = await data.json();
      setVideos(json.items)
    } catch (error) { 
      console.log(error)
    }
    
  }

  return (
    <div className='flex flex-wrap'>
      {Videos[4] &&<Advideocard info={Videos[4]}/>}
      { Videos.map((video) => <Link to={"/Watch?v=" + video.id}><Videocard key={video.id} info={video}/></Link>   )}</div>
  )
}

export default Videocontainer