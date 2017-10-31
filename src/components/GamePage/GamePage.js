import React, { Component } from 'react'

import Chat from '../Chat/Chat.js'
import Board from '../Board/Board.js'

import './GamePage.css'







class GamePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cardShow: false
    }
  }


  showHowTo() {
    document.getElementById('howtosound').play()
    if (this.state.cardShow === false) {
      this.setState({cardShow: true})
    } else if (this.state.cardShow === true) {
      this.setState({cardShow: false})
    }
}


  render () {


    let HowToCard = null

    if (this.state.cardShow === false) {
      HowToCard = null
    } else if (this.state.cardShow === true) {
      HowToCard = <div id="HowToCard"></div>
    }



    return (
      <div className="GamePageAll">

        <div className="GamePageMain" >
        <Board player1={this.props.player1} player2={this.props.player2} />
        <Chat player1={this.props.player1} player2={this.props.player2} />
        </div>

        {HowToCard}

        <div className="GamePageHowTo" >
          <button onClick={this.showHowTo.bind(this)}>How To Play</button>
        </div>




      </div>
    )
  }

}




export default GamePage
