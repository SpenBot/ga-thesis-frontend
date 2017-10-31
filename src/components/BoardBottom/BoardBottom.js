
/////////////// CONFIGURATION //////////////////////////////////////
////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import './BoardBottom.css'

const socket = openSocket('https://monkeystack-back.herokuapp.com/')






/////////////// COMPONENT //////////////////////////////////////////
////////////////////////////////////////////////////////////////////

class BoardBottom extends Component {


  constructor (props) {
    super(props)
    this.state = {
      turn: this.props.turn
    }
    this.completeTurn = this.completeTurn.bind(this)
  }



/////////////// UPDATE TURN ////////////////////////////////////////
  componentWillReceiveProps (newProps) {
    this.setState({turn: newProps.turn})
    this.setState({p1HP: newProps.p1HP})
  }


  completeTurn () {
    let newP1Coin = 0
    let newP1OP = 0
    let newP2Coin = 0
    let newP2OP = 0

    if(this.state.turn % 2 !== 0) {
      newP2Coin = 5
      newP2OP = 2
    } else {
      newP1Coin = 5
      newP1OP = 2
    }

    let newTurn = this.state.turn + 1
    socket.emit('new Turn', newTurn, newP1Coin, newP1OP, newP2Coin, newP2OP)
  }





/////////////// HANDLE CARD ACTIONS ////////////////////////////////
////////////////////////////////////////////////////////////////////


/////////////// SLAP ///////////////////////////////////////////////
  handleSlap() {

      //// SET STATS ////
      if ( this.state.turn % 2 !== 0 && (  (this.props.p1C - 3) >= 0 && (this.props.p1OP - 1) >= 0 ) ) {
        this.completeTurn()
        let slapP2Health = this.props.p2HP - 3
        let slapP1Coin = this.props.p1C - 3
        let slapP1OP = this.props.p1OP - 1
        socket.emit('P1 slaps', slapP2Health, slapP1Coin, slapP1OP)
      } else if ( this.state.turn % 2 === 0 && (  (this.props.p2C - 3) >= 0 && (this.props.p2OP - 1) >= 0 ) ) {
        this.completeTurn()
        let slapP1Health = this.state.p1HP - 3
        let slapP2Coin = this.props.p2C - 3
        let slapP2OP = this.props.p2OP - 1
        socket.emit('P2 slaps', slapP1Health, slapP2Coin, slapP2OP)
      } else {
        document.getElementById('errorsound').play()
        return null
      }

  }

/////////////// PUNCH //////////////////////////////////////////////
  handlePunch() {

    //// SET STATS ////
    if ( this.state.turn % 2 !== 0 && (  (this.props.p1C - 8) >= 0 && (this.props.p1OP - 3) >= 0 ) ) {
      this.completeTurn()
      let punchP2Health = this.props.p2HP - 6
      let punchP1Coin = this.props.p1C - 8
      let punchP1OP = this.props.p1OP - 3
      socket.emit('P1 punches', punchP2Health, punchP1Coin, punchP1OP)
    } else if ( this.state.turn % 2 === 0 && (  (this.props.p2C - 8) >= 0 && (this.props.p2OP - 3) >= 0 ) ) {
      this.completeTurn()
      let punchP1Health = this.state.p1HP - 6
      let punchP2Coin = this.props.p2C - 8
      let punchP2OP = this.props.p2OP - 3
      socket.emit('P2 punches', punchP1Health, punchP2Coin, punchP2OP)
    } else {
      document.getElementById('errorsound').play()
      return null
    }

  }


/////////////// MUD TOSS //////////////////////////////////////////
  handleMud() {

    //// SET STATS ////
    if ( this.state.turn % 2 !== 0 && (  (this.props.p1C - 10) >= 0 && (this.props.p1OP - 5) >= 0 ) ) {
      this.completeTurn()
      let mudP2Health = this.props.p2HP - 10
      let mudP1Coin = this.props.p1C - 10
      let mudP1OP = this.props.p1OP - 5
      socket.emit('P1 muds', mudP2Health, mudP1Coin, mudP1OP)
    } else if ( this.state.turn % 2 === 0 && (  (this.props.p2C - 10) >= 0 && (this.props.p2OP - 5) >= 0 ) ) {
      this.completeTurn()
      let mudP1Health = this.state.p1HP - 10
      let mudP2Coin = this.props.p2C - 10
      let mudP2OP = this.props.p2OP - 5
      socket.emit('P2 muds', mudP1Health, mudP2Coin, mudP2OP)
    } else {
      document.getElementById('errorsound').play()
      return null
    }

  }


/////////////// OVERFLOW ///////////////////////////////////////
  handleOverflow() {

    //// SET OVERFLOW ////
    if ( this.state.turn % 2 !== 0  &&  ((this.props.p1C - 5) >= 0) ) {
      this.completeTurn()
      let overflowP1OP = this.props.p1OP + 3
      let overflowP1Coin = this.props.p1C - 5
      socket.emit('P1 overflows', overflowP1Coin, overflowP1OP)
    } else if ( this.state.turn % 2 === 0  &&  ((this.props.p2C - 5) >= 0) ) {
      this.completeTurn()
      let overflowP2OP = this.props.p2OP + 3
      let overflowP2Coin = this.props.p2C - 5
      socket.emit('P2 overflows', overflowP2Coin, overflowP2OP)
    } else {
      document.getElementById('errorsound').play()
      return null
    }

}

  /////////////// COIN RESTORE ///////////////////////////////////////
    handleCoinrestore() {

      //// SET COIN ////
      if(this.state.turn % 2 !== 0  &&  ((this.props.p1OP - 2) >= 0) ) {
        this.completeTurn()
        let coinrestoreP1Coin = this.props.p1C + 6
        let coinrestoreP1OP = this.props.p1OP - 2
        socket.emit('P1 coinrestore', coinrestoreP1Coin, coinrestoreP1OP)
      } else if ( this.state.turn % 2 === 0  &&  ((this.props.p2OP - 2) >= 0) ) {
        this.completeTurn()
        let coinrestoreP2Coin = this.props.p2C + 6
        let coinrestoreP2OP = this.props.p2OP - 2
        socket.emit('P2 coinrestore', coinrestoreP2Coin, coinrestoreP2OP)
      } else {
        document.getElementById('errorsound').play()
        return null
      }

  }











/////////////// RENDER //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

    render() {

/////////////// SET TURN ////////////////////////////////////////////
      let playerTurn = null

      if(this.state.turn % 2 !== 0) {
        playerTurn = <h3 id="P1Turn">* PLAYER 1 TURN *</h3>
      } else {
        playerTurn = <h3 id="P2Turn">* PLAYER 2 TURN *</h3>
      }


/////////////// RETURN ////////////////////////////////////////////
      return(

        <div className="BoardBottomDiv">

          {playerTurn}

          <div className="CardStack">
            <img
              src="./Card-1-v8.png" className="GameCard" id="Slap" alt="slap"
              onClick={this.handleSlap.bind(this)}
            />
            <img
              src="./Card-2-v9.png" className="GameCard" id="Pound" alt="pound"
              onClick={this.handlePunch.bind(this)}
            />
            <img
              src="./Card-4-v8.png" className="GameCard" id="Overflow" alt="overflow"
              onClick={this.handleCoinrestore.bind(this)}
            />
            <img
              src="./Card-3-v9.png" className="GameCard" id="Cash" alt="cash"
              onClick={this.handleOverflow.bind(this)}
            />
            <img
              src="./Card-5-v9.png" className="GameCard" id="Mud" alt="mud"
              onClick={this.handleMud.bind(this)}
            />
          </div>

        </div>

      )
    }

}

export default BoardBottom
