import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import './BoardBottom.css'

const socket = openSocket('http://localhost:4000')







class BoardBottom extends Component {


  constructor (props) {
    super(props)
    this.state = {
      turn: this.props.turn
    }
  }

  componentDidMount () {
  }

  componentWillReceiveProps (newProps) {
    this.setState({turn: newProps.turn})
  }


  handleTurn() {
    this.props.changeTurn(this.state.turn)

    // let newTurn = this.state.turn
    // socket.emit('new Turn', newTurn)
  }







    render() {

      let playerTurn = null

      if(this.state.turn % 2 !== 0) {
        playerTurn = <h3 id="P1Turn">PLAYER 1 TURN</h3>
      } else {
        playerTurn = <h3 id="P2Turn">PLAYER 2 TURN</h3>
      }


      return(

        <div className="BoardBottomDiv">

          {playerTurn}

          <div className="CardStack">
            <img
              src="./Card-1-clean.png" className="GameCard" id="Slap" alt="slap"
              onClick={this.handleTurn.bind(this)}
            />
            <img
              src="./Card-2-clean.png" className="GameCard" id="Pound" alt="pound"
              onClick={this.handleTurn.bind(this)}
            />
            <img
              src="./Card-3-clean.png" className="GameCard" id="Overflow" alt="overflow"
              onClick={this.handleTurn.bind(this)}
            />
            <img
              src="./Card-4-clean.png" className="GameCard" id="Cash" alt="cash"
              onClick={this.handleTurn.bind(this)}
            />
            <img
              src="./Card-5-clean.png" className="GameCard" id="Mud" alt="mud"
              onClick={this.handleTurn.bind(this)}
            />
          </div>

        </div>

      )
    }

}

export default BoardBottom
