import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import BoardTop from '../BoardTop/BoardTop.js'
import BoardBottom from '../BoardBottom/BoardBottom.js'

import './Board.css'

const socket = openSocket('http://localhost:4000')



class Board extends Component {

  constructor (props) {
    super(props)
    this.state = {
      player1: this.props.player1,
      player2: this.props.player2,
      turn: 1,
      p1HP: 30,
      p1C: 30,
      p1OP: 10,
      p2HP: 30,
      p2C: 30,
      p2OP: 10,
    }
    this.changeTurn = this.changeTurn.bind(this)
  }



  componentDidMount () {
    document.getElementById('battle-music').play()

    socket.on('new Turn', (newTurn) => {
      this.setState( {turn: newTurn})

    })


    socket.on('new P1 HP', (newP1Health) => {
      this.setState( {p1HP: newP1Health})
      document.getElementById('damage').play()
    })

    socket.on('new P2 HP', (newP2Health) => {
      this.setState( {p2HP: newP2Health})
      document.getElementById('damage').play()
    })



  }




  componentWillUnmount() {
    document.getElementById('battle-music').pause()
  }

  changeTurn(turn) {

  //  this.setState( {turn: turn +1 } )
  //  console.log(`APP New Turn State = ${this.state.turn}`)

  }





  // componentDidMount () {
  //
  //   socket.on('attacked health', (hp) => {
  //     this.setState({health: hp})
  //   })
  //
  //   socket.on('healed health', (hp) => {
  //     this.setState({health: hp})
  //   })
  //
  // }





  // attackHealth() {
  //   let hp = this.state.health - this.state.attack
  //   socket.emit('attacked health', hp)
  // }
  //
  // healHealth() {
  //   let hp = this.state.health + this.state.heal
  //   socket.emit('healed health', hp)
  // }






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







        {/* <div className='healthBlock'>
          <h4>{this.state.health}</h4>
        </div>

        <div className='attackBlock' onClick={this.attackHealth}>
          <h4>{this.state.attack}</h4>
        </div>

        <div className='healBlock' onClick={this.healHealth}>
          <h4>{this.state.heal}</h4>
        </div> */}

      </div>

    )
  }

}





export default Board
