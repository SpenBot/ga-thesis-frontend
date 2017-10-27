
/////////////// CONFIGURATION //////////////////////////////////////
////////////////////////////////////////////////////////////////////


import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import BoardTop from '../BoardTop/BoardTop.js'
import BoardBottom from '../BoardBottom/BoardBottom.js'

import './Board.css'

const socket = openSocket('http://localhost:4000')




/////////////// COMPONENT //////////////////////////////////////////
////////////////////////////////////////////////////////////////////

class Board extends Component {

  constructor (props) {
    super(props)
    this.state = {
      player1: this.props.player1,
      player2: this.props.player2,
      turn: 1,
      p1HP: 30,
      p1C: 25,
      p1OP: 15,
      p2HP: 30,
      p2C: 25,
      p2OP: 15,
    }
  }




/////////////// SOCKET LISTEN ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  componentDidMount () {
    document.getElementById('battle-music').play()

/////////////// TURN ////////////////////////////////////////////////
    socket.on('new Turn', (newTurn) => {
      this.setState( {turn: newTurn})
    })

/////////////// UPDATE FOR SLAP ////////////////////////////////////

    socket.on('P1 slaps', (slapP2Health, slapP1Coin, slapP1OP) => {
      this.setState( {p2HP: slapP2Health} )
      this.setState( {p1C: slapP1Coin} )
      this.setState( {p1OP: slapP1OP} )
      document.getElementById('slapsound').play()
    })

    socket.on('P2 slaps', (slapP1Health, slapP2Coin, slapP2OP) => {
      this.setState( {p1HP: slapP1Health} )
      this.setState( {p2C: slapP2Coin} )
      this.setState( {p2OP: slapP2OP} )
      document.getElementById('slapsound').play()
    })

/////////////// UPDATE FOR PUNCH ////////////////////////////////////

    socket.on('P1 punches', (punchP2Health, punchP1Coin, punchP1OP) => {
      this.setState( {p2HP: punchP2Health} )
      this.setState( {p1C: punchP1Coin} )
      this.setState( {p1OP: punchP1OP} )
      document.getElementById('punchsound').play()
    })

    socket.on('P2 punches', (punchP1Health, punchP2Coin, punchP2OP) => {
      this.setState( {p1HP: punchP1Health} )
      this.setState( {p2C: punchP2Coin} )
      this.setState( {p2OP: punchP2OP} )
      document.getElementById('punchsound').play()
    })

/////////////// UPDATE FOR MUD ////////////////////////////////////

    socket.on('P1 muds', (mudP2Health, mudP1Coin, mudP1OP) => {
      this.setState( {p2HP: mudP2Health} )
      this.setState( {p1C: mudP1Coin} )
      this.setState( {p1OP: mudP1OP} )
      document.getElementById('mudsound').play()
    })

    socket.on('P2 muds', (mudP1Health, mudP2Coin, mudP2OP) => {
      this.setState( {p1HP: mudP1Health} )
      this.setState( {p2C: mudP2Coin} )
      this.setState( {p2OP: mudP2OP} )
      document.getElementById('mudsound').play()
    })

/////////////// UPDATE FOR OVERFLOW ////////////////////////////////////

    socket.on('P1 overflows', (overflowP1Coin, overflowP1OP) => {
      this.setState( {p1C: overflowP1Coin} )
      this.setState( {p1OP: overflowP1OP} )
      document.getElementById('gemrestore').play()
    })

    socket.on('P2 overflows', (overflowP2Coin, overflowP2OP) => {
      this.setState( {p2C: overflowP2Coin} )
      this.setState( {p2OP: overflowP2OP} )
      document.getElementById('gemrestore').play()
    })

/////////////// UPDATE COIN RESTORE ////////////////////////////////////

    socket.on('P1 coinrestore', (coinrestoreP1Coin, coinrestoreP1OP) => {
      this.setState( {p1C: coinrestoreP1Coin} )
      this.setState( {p1OP: coinrestoreP1OP} )
      document.getElementById('coinrestore').play()
    })

    socket.on('P2 coinrestore', (coinrestoreP2Coin, coinrestoreP2OP) => {
      this.setState( {p2C: coinrestoreP2Coin} )
      this.setState( {p2OP: coinrestoreP2OP} )
      document.getElementById('coinrestore').play()
    })





// end of componentDidMount()
  }








/////////////// MUSIC OFF ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  componentWillUnmount() {
    document.getElementById('battle-music').pause()
  }




/////////////// RENDER //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  render () {
    return (

      <div className='BoardDiv'>

        <h2>MONKEY STACK</h2>

        <BoardTop
          player1={this.state.player1}
          player2={this.state.player2}
          p1HP={this.state.p1HP}
          p1C={this.state.p1C}
          p1OP={this.state.p1OP}
          p2HP={this.state.p2HP}
          p2C={this.state.p2C}
          p2OP={this.state.p2OP}
        />

        <BoardBottom
          player1={this.state.player1}
          player2={this.state.player2}
          turn={this.state.turn}
          p1HP={this.state.p1HP}
          p1C={this.state.p1C}
          p1OP={this.state.p1OP}
          p2HP={this.state.p2HP}
          p2C={this.state.p2C}
          p2OP={this.state.p2OP}
        />

      </div>

    )
  }

}





export default Board
