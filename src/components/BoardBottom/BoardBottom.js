import React, { Component } from 'react'
import './BoardBottom.css'



class BoardBottom extends Component {


    render() {
      return(

        <div className="BoardBottomDiv">

          <h3>PLAYER TURN</h3>

          <div className="CardStack">
            <div className="GameCard"></div>
            <div className="GameCard"></div>
            <div className="GameCard"></div>
            <div className="GameCard"></div>
            <div className="GameCard"></div>
          </div>

        </div>

      )
    }

}

export default BoardBottom
