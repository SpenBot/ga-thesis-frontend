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
      player1LogCheck: null,
      player2LogCheck: null
    }
    this.handleLogInP1 = this.handleLogInP1.bind(this)
    this.handleLogInP2 = this.handleLogInP2.bind(this)
  }





  handleLogInP1(e) {
    e.preventDefault()
    let player1 = document.getElementById('Player1SignIn').value
    socket.emit('new player1', player1)
  }

  handleLogInP2(e) {
    e.preventDefault()
    let player2 = document.getElementById('Player2SignIn').value
    socket.emit('new player2', player2)
  }





  componentDidMount () {
    // document.getElementById('intro-music').play()

    socket.on('new player1', (player1) => {
      this.setState({player1LogCheck: player1})
      document.getElementById('bing').play()
      console.log(`LOGIN P1 State = ${this.state.player1LogCheck}`)
    })
    socket.on('new player2', (player2) => {
      this.setState({player2LogCheck: player2})
      document.getElementById('bing').play()
      console.log(`LOGIN P2 State = ${this.state.player2LogCheck}`)
    })
  }


componentWillUnmount() {
      // document.getElementById('intro-music').pause()
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
        <h3>PLAYER 1</h3>

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
        <h3>PLAYER 2</h3>

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
          <h4>[send this URL to a buddy and start playing!]</h4>
          <p>music/sounds only works on Chrome and Firefox</p>
        </div>



        <div className='LogInBlocks'>
          <h2>ENTER PLAYERS</h2>
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
