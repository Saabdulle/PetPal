import React, { useState, useEffect } from "react";
import { useAuth } from "../../context";
import './styles.css'

function Conversation(props) {
  const { user_id } = useAuth()
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  async function getMessages(conversationId) {
    const response = await fetch(`http://localhost:5000/conversations/${conversationId}/messages`);
    const data = await response.json();
    setMessages(data.messages);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      getMessages(props.conversationId);
    }, 10000); // 10 seconds in milliseconds
  
    // cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/conversations/${props.conversationId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sender_id: user_id,
        content: newMessage
      })
    });
    setNewMessage("");
    getMessages(props.conversationId);
  }

  return (
    <div className="messages-box-navbar">
      <div className="close-conversation-button" onClick={props.handleCloseConversation}>x</div>
      {messages.map((message) => (
        <div className={`message-box ${message.id == user_id && 'message-box-right'}`}
        key={message.id}>
          <div className={`message-blue ${message.id == user_id && 'message-grey'}`}>
          <p className="message-content-sender">{message.sender}</p>
          <p className="message-content-text">{message.content}</p>
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit} className='send-message-form'>
        <input type="text" className="message-input-here" value={newMessage} onChange={(event) => setNewMessage(event.target.value)} placeholder='Message here'/>
        <button type="submit" className="send-message-form-button">Send</button>
      </form>
    </div>
  );
}

export default Conversation;