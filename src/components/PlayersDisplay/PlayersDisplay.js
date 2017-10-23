import React, { Component } from 'react'

import './PlayersDisplay.css'


class PlayersDisplay extends Component {

  constructor (props) {
    super(props)
    this.state = {
      users: this.props.users
    }
  }



  render () {

      let playersDisplayList = this.state.users.map((user) => (<li>{user}</li>))

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
