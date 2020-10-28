import React from 'react'

function ChatMessage(props) {
  console.log(props);
  let chatMessage = (<div>no message found</div>);
  let date = new Date(props.timestamp);
  if(props.type === 'message') { //right now we're just going to assume everything is type message
    chatMessage = (
    <div className='chat-message'> 
      <div className='message-top'>
        <h4>{props.participantId}</h4>
        <h4>{date.getHours()} {date.getMinutes()}</h4>
      </div>
      <div className='message-body'>
        <p>props.message</p>
      </div>
    </div>
    );
  }
  else {
    console.log('GIVE ME MESSAGES ONLY YOU NOOB');
  }

  return chatMessage;
};

export default ChatMessage;