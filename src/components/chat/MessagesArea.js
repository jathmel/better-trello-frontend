import React from 'react'
import NewMessageForm from './NewMessageForm'

const MessagesArea = ({conversation: { id, title, messages }}) => {
  console.log('in msg area',{conversation: { id, title, messages }});
  return (
    <div className='messageArea'>
    <h2>{title}</h2>
    <ul>{orderdMessages(messages)}</ul>
    <NewMessageForm conversation_id={id}/>
    </div>
  )
}

export default MessagesArea

const orderdMessages = messages => {
  const sortedMessages = messages.sort(
    (a,b) => new Date(a.created_at) - new Date(b.create_at)
  )
  return sortedMessages.map(message =>{
    return <li key={message.idea}>{message.text}</li>
  })
}
