import React, { Component } from 'react'

import Chat from '../Chat/Chat.js'
import Board from '../Board/Board.js'

import './GamePage.css'







class GamePage extends Component {



  render () {

    return (
      <div className="GamePageDiv">
        <Board player1={this.props.player1} player2={this.props.player2} />
        <Chat player1={this.props.player1} player2={this.props.player2} />
      </div>
    )
  }

}







export default GamePage
