import React, { Component } from 'react'
import openSocket from 'socket.io-client'
import './App.css'

const socket = openSocket('http://localhost:4000')

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initMessages: [],
      messages: [],
      username: null,
      status: null
    }
    this.submitMessage = this.submitMessage.bind(this)
  }

  componentDidMount () {
    socket.on('initial messages', (msgs) => {
      this.setState({messages: this.state.initMessages.concat(msgs)})
    })

    socket.on('chat message', (msg, usn) => {
      this.setState({messages: this.state.messages.concat(msg)})
      this.setState({username: this.state.username = usn})
    })

  }

  submitMessage (e) {
    e.preventDefault()
    let msg = document.getElementById('message').value
    let usn = document.getElementById('username').value
    socket.emit('chat message', msg, usn)
    document.getElementById('message').value = ''
    document.getElementById('username').value = ''
  }

  render () {
    let initMessages = this.state.initMessages.map((message) => (<li>{message}</li>))
    let messages = this.state.messages.map((message) => (<li>{message}</li>))
    let username = <li>{this.state.username}</li>
    return (
      <div>
        <div id="status"></div>
        <ul id='intiMessages'>{initMessages}</ul>
        <ul id='messages'>{messages}</ul>
        <ul id='username_disp'>{username}</ul>
        <form action='' onSubmit={this.submitMessage}>
          <input id='message' placeholder="enter message"/>
          <input id="username" placeholder="enter username"/>
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default App
