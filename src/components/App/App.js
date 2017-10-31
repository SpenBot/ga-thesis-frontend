import React, { Component } from 'react'
import openSocket from 'socket.io-client'

import LogInPage from '../LogInPage/LogInPage.js'
import GamePage from '../GamePage/GamePage.js'

import './App.css'

const socket = openSocket('https://monkeystack-back.herokuapp.com/')



/////////////// COMPONENT ////////////////////////////////////
//////////////////////////////////////////////////////////////

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player1: null,
      player2: null
    }
  }


/////////////// SOCKET LISTEN ///////////////////////////////////////
  componentDidMount () {

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
    {
      alert("This game runs best on Chrome and Firefox!\n\nFor music and sounds on Safari, please select: \n\n\tSafari  >  Settings for this Website \n\tAuto-Play:  Allow all Auto-Play\n\nEnjoy!")
    }




    socket.on('new player1', (player1) => {
      this.setState({player1: player1})
          console.log(`APP P1 State = ${this.state.player1}`)
    })
    socket.on('new player2', (player2) => {
      this.setState({player2: player2})
          console.log(`APP P2 State = ${this.state.player2}`)
    })
  }



/////////////// RENDER ///////////////////////////////////////

  render () {

    let LogInPageComp = null
    let GamePageComp = null

    if (this.state.player1 && this.state.player2) {
      LogInPageComp = null
      GamePageComp = <GamePage
        player1={this.state.player1}
        player2={this.state.player2}
      />
    } else {
      LogInPageComp = <LogInPage
      />
    }



/////////////// RETURN ////////////////////////////////////////

    return (
      <div className='App'>

        <div className='wrapperTop'>
          <div className="sliding-background"></div>
        </div>

        {LogInPageComp}
        {GamePageComp}

        <div className='wrapperBottom'>
          <div className="sliding-background"></div>
        </div>

      </div>
    )

  //render
  }
// component
}




export default App
