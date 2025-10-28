import React, { useEffect } from 'react';
import { Youtube_api_key } from '../utils/constants';
import Videocard, { Advideocard } from './Videocard';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addvideos, filterVideos } from '../utils/VideosSlice';

const Videocontainer = () => {
  const dispatch = useDispatch();

  // This is your filterVideos state from Redux
  const filteredVideos = useSelector((store) => store.Videos.FilterVideos || []);


  useEffect(() => {
    getVideos();
  }, []);
  
 const getVideos = async () => {
      try {
        const response = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+Youtube_api_key);
        if (!response.ok) throw new Error("Fetch failed with status " + response.status);
        const json = await response.json();

        const items = json?.items || [];
        // Dispatch both full list and filtered list initially
        console.log(items)
        dispatch(addvideos(items));
        dispatch(filterVideos(items));
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };


  return (
    <div className='flex flex-wrap'>
      {filteredVideos[0] && <Advideocard info={filteredVideos[4]} />}
      {filteredVideos.map((video) => {
        const videoId = video.id.videoId || video.id;
        return (
          <Link key={videoId} to={`/watch?v=${videoId}`}>
            <Videocard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default Videocontainer;
