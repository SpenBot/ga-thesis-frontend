import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import './BoardBottom.css'

const socket = openSocket('http://localhost:3001')







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
    this.setState({p1HP: newProps.p1HP})

  }


  // handleTurn() {
  //   let newTurn = this.state.turn + 1
  //   socket.emit('new Turn', newTurn)
  // }

  handleSlap() {

    if(this.state.turn % 2 !== 0) {
      let newP2Health = this.props.p2HP - 3
      socket.emit('new P2 HP', newP2Health)
    } else {
      let newP1Health = this.state.p1HP - 3
      socket.emit('new P1 HP', newP1Health)
    }

    let newTurn = this.state.turn + 1
    socket.emit('new Turn', newTurn)
  }






    render() {

      let playerTurn = null

      if(this.state.turn % 2 !== 0) {
        playerTurn = <h3 id="P1Turn">* PLAYER 1 TURN *</h3>
      } else {
        playerTurn = <h3 id="P2Turn">* PLAYER 2 TURN *</h3>
      }

      // let audio = document.getElementById("select")
      // let card = document.getElementById("Slap")
      //
      // card.mouseenter(function() {
      //   audio.play();
      // })


      return(



        <div className="BoardBottomDiv">

          {playerTurn}

          <div className="CardStack">
            <img
              src="./Card-1-clean.png" className="GameCard" id="Slap" alt="slap"
              onClick={this.handleSlap.bind(this)}
            />
            <img
              src="./Card-2-clean.png" className="GameCard" id="Pound" alt="pound"

            />
            <img
              src="./Card-3-clean.png" className="GameCard" id="Overflow" alt="overflow"

            />
            <img
              src="./Card-4-clean.png" className="GameCard" id="Cash" alt="cash"

            />
            <img
              src="./Card-5-clean.png" className="GameCard" id="Mud" alt="mud"

            />
          </div>

        </div>

      )
    }

}

export default BoardBottom
