import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import './LogInPage.css'

const socket = openSocket('http://localhost:4000')




/////////////// COMPONENT ////////////////////////////////////
//////////////////////////////////////////////////////////////

class LogInPage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      player1LogCheck: this.props.player1,
      player2LogCheck: this.props.player2
    }
    this.handleLogInP1 = this.handleLogInP1.bind(this)
    this.handleLogInP2 = this.handleLogInP2.bind(this)
  }



//sets user input to player 1 state, then emits to socket //
  handleLogInP1(e) {
    e.preventDefault()
    let player1 = document.getElementById('Player1SignIn').value
    this.setState({player1LogCheck: player1})
        console.log(`Player 1 Log Check Post = ${this.state.player1LogCheck}`)
    socket.emit('new player1', player1)
  }

//sets user input to  player 2 state, then emits to socket //
  handleLogInP2(e) {
    e.preventDefault()
    let player2 = document.getElementById('Player2SignIn').value
    this.setState({player2LogCheck: player2})
        console.log(`Player 2 Log Check Post = ${this.state.player2LogCheck}`)
    socket.emit('new player2', player2)
  }





/////////////// RENDER ///////////////////////////////////////
//////////////////////////////////////////////////////////////

  render () {

    let player1LogBlock = null
    let player2LogBlock = null

    if(this.state.player1LogCheck) {
      player1LogBlock = null
    } else {
      player1LogBlock =
      <div className='P1Log-In'>
        <h3>PLAYER 1 SIGN IN</h3>

        <form onSubmit={(e) => this.handleLogInP1(e)}>
          <input id='Player1SignIn' autoComplete='off' placeholder="enter username"/>
          <button type="submit">Enter</button>
        </form>
      </div>
    }

    if(this.state.player2LogCheck) {
      player2LogBlock = null
    } else {
      player2LogBlock =
      <div className='P2Log-In'>
        <h3>PLAYER 2 SIGN IN</h3>

        <form onSubmit={(e) => this.handleLogInP2(e)}>
          <input id='Player2SignIn' autoComplete='off' placeholder="enter username"/>
          <button type="submit">Enter</button>
        </form>
      </div>
    }



/////////////// RETURN ///////////////////////////////////////
//////////////////////////////////////////////////////////////

    return (
      <div className='LogInPageDiv'>


        <div className='LogInLogo'>
          <img src='./monkey-fixed.png' height="200" width="200" alt="monkey pic"/>
          <h1>MONKEY STACK</h1>
          <h2>a 2 player online monkey game</h2>
        </div>



        <div className='LogInBlocks'>

          {player1LogBlock}
          {player2LogBlock}

        </div>

      </div>
    )
  }

}







export default LogInPage
