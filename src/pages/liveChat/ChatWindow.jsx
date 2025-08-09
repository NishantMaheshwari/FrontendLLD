import React, { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'
import { chats } from '../../data/liveChat';

const CHAT_MESSAGES_LIMIT = 100;

const ChatWindow = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const chatWindowRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const fetchData = () => {
    return chats;
  };


  const checkIfNearBottom = () => {
    const container = chatWindowRef.current;
    if (!container) return false;
    return container.scrollHeight - container.scrollTop - container.clientHeight < 50;
  }


  const scrollToBottom = () => {
    const container = chatWindowRef.current;
    if (!container) return;
    if (autoScroll) {
      container.scrollTop = container.scrollHeight;
    }
  };


  const handleScroll = () => {
    if (!chatWindowRef.current) return;
    if (checkIfNearBottom()) {
      setAutoScroll(true);
    } else {
      setAutoScroll(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const data = fetchData();
      setChatMessages(prev =>
        [...prev, ...data].slice(-CHAT_MESSAGES_LIMIT)
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(scrollToBottom, 0);
    return () => {
      clearTimeout(timeoutId);
    }
  }, [chatMessages, autoScroll]);

  return (
    <div
      ref={chatWindowRef}
      onScroll={handleScroll}
      className="flex h-full w-[38%] rounded-2xl border-2 border-black p-2 overflow-y-auto flex-col-reverse"
      style={{ scrollBehavior: 'smooth' }}
    >
      {chatMessages.map((chat, index) => (
        <ChatMessage chat={chat} key={index} />
      ))}
    </div>
  );
};

export default ChatWindow;
