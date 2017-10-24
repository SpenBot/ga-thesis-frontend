import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import LogInPage from '../LogInPage/LogInPage.js'
import GamePage from '../GamePage/GamePage.js'
// import Chat from '../Chat/Chat.js'
// import Board from '../Board/Board.js'
// import PlayersDisplay from '../PlayersDisplay/PlayersDisplay.js'

import './App.css'

const socket = openSocket('http://localhost:4000')








class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player1: null,
      player2: null
    }
    // this.setPlayer1 = this.setPlayer1.bind(this)
    // this.setPlayer2 = this.setPlayer2.bind(this)
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



  // setPlayer1(player1) {
  //     this.setState({player1})
  //     console.log(`Player1 from App = ${this.state.player1}`)
  // }
  //
  // setPlayer2(player2) {
  //     this.setState({player2})
  //     console.log(`Player2 from App = ${this.state.player2}`)
  // }








  render () {

    let LogIn = null
    let GameWindow = null

    if (this.state.user === 2) {
      LogIn = null
      GameWindow = <GamePage users={this.state.user}
        setPlayer1={this.setPlayer1}
        setPlayer2={this.setPlayer2}
      />
    } else {
      LogIn = <LogInPage users={this.state.users}/>
    }



    return (
      <div className='App'>

        {LogIn}
        {GameWindow}


        {/* <div className='UserInfo'>
          <PlayersDisplay users={this.state.users}/>
        </div>
        <Board users={this.state.users}/>
        <Chat users={this.state.users}/> */}



      </div>
    )
  }

}





export default App
