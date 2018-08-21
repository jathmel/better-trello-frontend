import React, { Component } from 'react'
import { API_ROOT, HEADERS } from '../../constants'

class NewMessageForm extends Component {
  state = {
    text: '',
    conversation_id: this.props.coversation_id
  }

  componentDidMount() {
    this.setState({
      conversation_id: this.props.conversation_id
    })
  }

  handleChange = event => {
    this.setState({ text: event.target.value})
  }

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault()
    fetch(API_ROOT + 'messages', {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    })
    this.setState({text: ''})
  }

  render = () => {
    console.log("in msg form",this.props.conversation_id);
    return (
      <div className='newMessageForm'>
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br/>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default NewMessageForm;
