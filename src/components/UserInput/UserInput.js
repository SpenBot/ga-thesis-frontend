import React, { Component } from 'react'

import './UserInput.css'


class UserInput extends Component {

  handleChange(e) {
    e.preventDefault()
    let user = document.getElementById('UserInputFeild').value
    this.props.setUser(user)

    document.getElementById('UserInputFeild').value = ''
  }

  render () {
    return (
      <div className='UserInputDiv'>

        <form action='' onSubmit={this.handleChange.bind(this)}>
          <input id='UserInputFeild' autocomplete='off' placeholder="enter username"/>
          <button>Enter</button>
        </form>

      </div>
    )
  }


}




export default UserInput
