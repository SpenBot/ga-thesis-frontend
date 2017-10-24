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






  componentWillReceiveProps () {
      this.setState({player1LogCheck: this.props.player1})
      console.log(`P1 State LoginCheck = ${this.state.player1LogCheck}`)

      this.setState({player2LogCheck: this.props.player2})
      console.log(`P2 State LoginCheck = ${this.state.player2LogCheck}`)

      let player1 = this.state.player1LogCheck
      socket.emit('login player1', player1)
      console.log(`Emitting player1`)


      let player2 = this.state.player2LogCheck
      socket.emit('login player2', player2)
      console.log(`Emitting player2`)
  }




  componentDidMount () {
    socket.on('login player1', (player1) => {
      this.setState({player1LogCheck: player1})
      console.log(`P1 State LoginCheck 2 = ${this.state.player1LogCheck}`)
    })

    socket.on('login player2', (player2) => {
      this.setState({player2LogCheck: player2})
      console.log(`P2 State LoginCheck 2 = ${this.state.player2LogCheck}`)
    })
  }













/////////////// RENDER ///////////////////////////////////////
//////////////////////////////////////////////////////////////

  render () {

    let player1LogBlock = null
    let player1ReadyBlock = null

    let player2LogBlock = null
    let player2ReadyBlock = null


    if(this.state.player1LogCheck) {
      player1LogBlock = null
      player1ReadyBlock =
        <div className='P1Ready'>
          <h3>PLAYER 1 READY</h3>
        </div>
    } else {
      player1ReadyBlock = null
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
      player2ReadyBlock =
        <div className='P2Ready'>
          <h3>PLAYER 2 READY</h3>
        </div>
    } else {
      player2ReadyBlock = null
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
          {player1ReadyBlock}
          {player2LogBlock}
          {player2ReadyBlock}

        </div>



      </div>
    )
  }

}







export default LogInPage
