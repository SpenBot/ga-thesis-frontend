import React, { Component } from 'react'
import openSocket from 'socket.io-client'
import './Board.css'

const socket = openSocket('http://localhost:4000')



class Board extends Component {

  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user,
      health: 10,
      attack: 3,
      heal: 2
    }
    this.attackHealth = this.attackHealth.bind(this)
    this.healHealth = this.healHealth.bind(this)
  }




  componentDidMount () {

    socket.on('attacked health', (hp) => {
      this.setState({health: hp})
    })

    socket.on('healed health', (hp) => {
      this.setState({health: hp})
    })

  }





  attackHealth() {
    let hp = this.state.health - this.state.attack
    socket.emit('attacked health', hp)
  }

  healHealth() {
    let hp = this.state.health + this.state.heal
    socket.emit('healed health', hp)
  }






  render () {
    return (

      <div className='BoardDiv'>

        <p>{this.props.user}</p>

        <div className='healthBlock'>
          <h4>{this.state.health}</h4>
        </div>

        <div className='attackBlock' onClick={this.attackHealth}>
          <h4>{this.state.attack}</h4>
        </div>

        <div className='healBlock' onClick={this.healHealth}>
          <h4>{this.state.heal}</h4>
        </div>

      </div>

    )
  }

}





export default Board
