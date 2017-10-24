import React, { Component } from 'react'

import Chat from '../Chat/Chat.js'
import Board from '../Board/Board.js'

import './GamePage.css'







class GamePage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      player1: this.props.player1,
      player2: this.props.player2
    }
  }




  render () {

    return (
      <div className="GamePageDiv">
        <Chat player1={this.state.player1} player2={this.state.player2} />
        <Board player1={this.state.player1} player2={this.state.player2} />
      </div>
    )
  }

}







export default GamePage
