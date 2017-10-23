import React, { Component } from 'react'

import './PlayersDisplay.css'



class PlayersDisplay extends Component {


  render () {
    return (
      <div className='PlayersDisplayBlock'>
          <p>{this.props.users}</p>
      </div>
    )
  }

}



export default PlayersDisplay
