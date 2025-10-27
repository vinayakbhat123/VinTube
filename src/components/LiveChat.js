import React, { useEffect ,useState} from 'react';
import Chatmsg from './Chatmsg';
import useLiveChat from '../utils/useLiveChat';
import { useSelector, useDispatch } from 'react-redux';
import { addChat } from '../utils/LiveChatSlice';

const LiveChat = () => {
  const [livemessages,setlivemessage] = useState("");
  const dispatch = useDispatch();
  const jsonData = useLiveChat();
  const messages = useSelector((store) => store.livechat.chatmessage);

  useEffect(() => {
    if (!jsonData) return;
    dispatch(addChat(jsonData));
  }, [jsonData,dispatch]);

  return (
 <>
    <div className="w-full bg-slate-200 h-[600px] p-2 ml-2 border border-black overflow-y-scroll  flex flex-col-reverse">
      <div>
      {messages.map((message, index) => (
        <Chatmsg key={message?.id || message.id} Message={message[index]} />
      ))}
      </div>
    </div>

    </>
  );
};

export default LiveChat;
