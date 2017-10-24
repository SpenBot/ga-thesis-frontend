import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import './GamePage.css'


const socket = openSocket('http://localhost:4000')




class GamePage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      users: this.props.users
    }
  }




  render () {

    return (
      <div className='GamePageDiv'>
      </div>
    )
  }

}







export default GamePage
