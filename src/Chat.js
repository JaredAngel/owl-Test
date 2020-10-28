import React from 'react';
import ChatMessage from './ChatMessage.js'


function Chat(props) {
  console.log(`Chat's props are ${props}`);
  let messages = props.chatEvents.map(chat => (
    <ChatMessage 
    participantId={chat.participantId} 
    type={chat.type} 
    timestamp={chat.timestamp} />)
  );

  let chat = (
    <div className='chat'>
      {messages}
      <form className="chat-form">
        <textarea className="chat-form-input" placeholder="Chat"></textarea>
        <input type="submit" className="chat-form-submit" />
      </form>
    </div>
  )

  return chat;
}

export default Chat;