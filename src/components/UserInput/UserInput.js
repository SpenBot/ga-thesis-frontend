import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import './UserInput.css'

const socket = openSocket('http://localhost:4000')



class UserInput extends Component {


  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }



  handleChange(e) {
    e.preventDefault()

    let user = document.getElementById('UserInputFeild').value
    // this.props.setUsers(user)

    socket.emit('new user', user)

    document.getElementById('UserInputFeild').value = ''
  }


  render () {
    return (
      <div className='UserInputDiv'>

        {/* <form action='' onSubmit={this.handleChange.bind(this)}> */}
        <form onSubmit={(e) => this.handleChange(e)}>
          <input id='UserInputFeild' autoComplete='off' placeholder="enter username"/>
          <button type="submit">Enter</button>
        </form>

      </div>
    )
  }


}



export default UserInput
