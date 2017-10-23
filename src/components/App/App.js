import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import Chat from '../Chat/Chat.js'
import Board from '../Board/Board.js'
import UserInput from '../UserInput/UserInput.js'
import PlayersDisplay from '../PlayersDisplay/PlayersDisplay.js'

import './App.css'

const socket = openSocket('http://localhost:4000')








class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.setUsers = this.setUsers.bind(this)
  }



  componentDidMount () {
    socket.on('new user', (user) => {
      this.setState({users: [...this.state.users, user]})
    })
  }



  setUsers(user) {
    if(this.state.users.length === 0) {
      this.setState({users: this.state.users.push(user)})
    } else {
      this.setState({users: [...this.state.users, user]})
    }
      console.log(`Users from App = ${this.state.users}`)
  }





  render () {

    // let signInBlock = null
    //
    // if(this.state.users) {
    //   signInBlock = null
    // } else {
    //   signInBlock = <UserInput setUsers={this.setUsers}/>
    // }

    return (
      <div className='App'>

        {/* {signInBlock} */}
        <div className='UserInfo'>
          <UserInput setUsers={this.setUsers}/>
          <PlayersDisplay users={this.state.users}/>
        </div>
        <Board users={this.state.users}/>
        <Chat users={this.state.users}/>
      </div>
    )
  }

}




export default App
