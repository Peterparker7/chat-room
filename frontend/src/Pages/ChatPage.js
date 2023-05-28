import { useState, useEffect } from 'react';
import axios from 'axios';

const ChatPage = () => {
  const [ chats, setChats ] = useState();

  console.log(chats)

  const fetchChat = async () => {
    const {data} = await axios.get('/api/chat');
    setChats(data);

    console.log(data)
  }

  useEffect(() => {
    fetchChat();
  }, [])

  return (
    <div>{chats?.map(chat => <div key={chat._id}>{chat.chatName}</div>)}</div>
  )
}

export default ChatPage;