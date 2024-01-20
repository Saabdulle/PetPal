import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../../context';
import Conversation from '../Conversation';

const MessageIcon = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const { user_id } = useAuth()
    const [conversations, setConversations] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState(null);

  async function getConversationsByUser(userId) {
    const response = await fetch(`http://localhost:5000/conversations?user_id=${userId}`);
    const data = await response.json();
    setConversations(data.conversations);
  }

  function handleCloseConversation() { 
    setSelectedConversation(null);
  }

  useEffect(() => {
    // getConversationsByUser(user.id);
    getConversationsByUser(user_id);
  }, []);


    function openMessages(){
        setIsOpen(!isOpen)
        console.log('open')
    }
    function closeMessages(){
        setIsOpen(!isOpen)
        console.log('close')
    }
    
    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };
  return (

    <div className={isOpen ? "messages" : "closed"}>
    <div className={isOpen ? "close-button-div" : "no-image"}>
      <h2 className="messages-heading">Messages</h2>
      <button onClick={closeMessages} className={isOpen ? "close-button" : "no-image"}>X</button>
    </div>
    <div className={isOpen ? "messages-holder" : "no-image"}>
    {conversations.map((conversation) => (
    <div
      className='conversation-box'
      key={conversation.conversation.id}
      onClick={() => setSelectedConversation(conversation.conversation.id)}
    >
      <p className="conversation-box-username">{conversation.service.username}</p>
      <p className="conversation-box-viewmessages">View messages...</p>
    </div>
  ))}
  {selectedConversation && (
      <Conversation conversationId={selectedConversation} handleCloseConversation={handleCloseConversation} />
  )}
    </div>
        
        <img src="../../../chat.png" alt="chat" onClick={openMessages} className={isOpen ? "no-image" : "yes-image"}/>
  </div> 
  )
}

export default MessageIcon
