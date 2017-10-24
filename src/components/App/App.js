import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import LogInPage from '../LogInPage/LogInPage.js'
import GamePage from '../GamePage/GamePage.js'

import './App.css'

const socket = openSocket('http://localhost:4000')








class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player1: null,
      player2: null
    }
  }



  componentDidMount () {
    socket.on('new player1', (player1) => {
      this.setState({player1: player1})
          console.log(`App Player 1 state = ${this.state.player1}`)
    })
    socket.on('new player2', (player2) => {
      this.setState({player2: player2})
          console.log(`App Player 2 state = ${this.state.player2}`)
    })
  }






/////////////// RENDER ///////////////////////////////////////
//////////////////////////////////////////////////////////////

  render () {

    let LogIn = null
    let GameWindow = null

    if (this.state.player1 && this.state.player2) {
      LogIn = null
      GameWindow = <GamePage
        player1={this.state.player1}
        player2={this.state.player2}
      />
    } else {
      LogIn = <LogInPage users={this.state.users}/>
    }


/////////////// RETURN ///////////////////////////////////////
//////////////////////////////////////////////////////////////

    return (
      <div className='App'>

        {LogIn}
        {GameWindow}

      </div>
    )
  }

}





export default App
