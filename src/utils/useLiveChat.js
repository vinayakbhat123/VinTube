import { useEffect, useState } from 'react';
import { live_chat_api } from './constants';

const useLiveChat = () => {
  const [jsonData, setJsonData] = useState(null);

    const fetchLiveChat = async () => {
      try {
        const data = await fetch(live_chat_api);
        const json = await data.json();
        setJsonData(json);
      } catch (err) {
        console.log("Live stream ingestion error:", err);
      }
    };
   
  useEffect(() => {
    fetchLiveChat();
  }, []);
  useEffect(() => {
       const interval = setInterval(fetchLiveChat, 2000);
       return () => clearInterval(interval);
  },[])
   


  return jsonData;
};

export default useLiveChat;
