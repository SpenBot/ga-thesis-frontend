import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import './PlayersDisplay.css'


const socket = openSocket('http://localhost:4000')




class PlayersDisplay extends Component {

  constructor (props) {
    super(props)
    this.state = {
      users: this.props.users
    }
  }

 componentDidMount () {
   socket.on('new user', (user) => {
     this.setState({users: this.state.users.concat(user)})
   }
 )}







  render () {

    let playersDisplayList = this.state.users.map((user) => ( <li>{user} signed in </li> ))

    return (
      <div className='PlayersDisplayDiv'>
          <div className='PlayersList'>
            {playersDisplayList}
          </div>
      </div>
    )
  }

}



export default PlayersDisplay
