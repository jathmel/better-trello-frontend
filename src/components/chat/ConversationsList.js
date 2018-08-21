import React, { Component } from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../../constants';
import NewConversationForm  from './NewConversationForm';
import MessagesArea  from './MessagesArea';
import Cable from './Cable'

class ConversationsList extends Component {
  state = {
    conversations:[],
    activeConversation: null
  }

  componentDidMount() {
    fetch(API_ROOT + 'conversations')
    .then(response => response.json())
    .then(conversations => this.setState({ conversations }));
  };

  handleClick = id => {
    console.log(id);
    this.setState({ activeConversation: id })
  }

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.setState({
      conversations: [...this.state.conversations, conversation]
    });
  };

  handleReceivedMessage= response => {
    console.log(response);
    // debugger
    const { message } = response;
    const conversations = [...this.state.conversations]
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    )
    conversation.messages = [...conversation.messages, message]
    this.setState({ conversations })
  };

  render = () => {
    const {conversations, activeConversation } = this.state
    return(
      <div className="converationsList">
      <ActionCable channel={{channel: 'ConversationChannel'}} onReceived={this.handleReceivedConversation}/>
      {this.state.conversations.length ? (
        <Cable conversations={conversations} handleReceivedMessage={this.handleReceivedMessage}/>
      ) : null}
      <h2>Conversations</h2>
      <ul>{mapConversations(conversations, this.handleClick)}</ul>
      <NewConversationForm/>
      {activeConversation ? (
        <MessagesArea conversation={findActiveConversation(conversations, activeConversation)}/>
      ): null}
      </div>
    )
  }
}

export default (ConversationsList)

const findActiveConversation = (conversations, activeConversation) => {
  console.log('infind active conversation',conversations, activeConversation );
  return conversations.find(
    conversation => conversation.id === activeConversation
  );
};

const mapConversations = (conversations, handleClick) => {
  return conversations.map(conversation =>{
    return (
      <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
        {conversation.title}
      </li>
    )
  })
}