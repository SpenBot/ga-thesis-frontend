import React, { Component } from 'react'

import Chat from '../Chat/Chat.js'
import Board from '../Board/Board.js'
import UserInput from '../UserInput/UserInput.js'
import PlayersDisplay from '../PlayersDisplay/PlayersDisplay.js'





import './App.css'






class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: null
    }
    this.setUser = this.setUser.bind(this)
  }




  setUser(user) {
   this.setState({user: user})
   console.log(`User from App = ${this.state.user}`)
  }



  render () {

    let signInBlock = null

    if(this.state.user) {
      signInBlock = null
    } else {
      signInBlock = <UserInput setUser={this.setUser}/>
    }

    return (
      <div className='App'>

        {signInBlock}
        <Board user={this.state.user}/>
        <Chat user={this.state.user}/>
      </div>
    )
  }

}




export default App
