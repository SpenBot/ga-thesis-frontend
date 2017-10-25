import React, { Component } from 'react'
import './BoardBottom.css'



class BoardBottom extends Component {


    render() {
      return(

        <div className="BoardBottomDiv">

          <h3>PLAYER TURN</h3>

          <div className="CardStack">
            <img src="./Card-1-clean.png" className="GameCard" id="Slap" alt="slap"/>
            <img src="./Card-2-clean.png" className="GameCard" id="Pound" alt="pound"/>
            <img src="./Card-3-clean.png" className="GameCard" id="Overflow" alt="overflow"/>
            <img src="./Card-4-clean.png" className="GameCard" id="Cash" alt="cash"/>
            <img src="./Card-5-clean.png" className="GameCard" id="Mud" alt="mud"/>
          </div>

        </div>

      )
    }

}

export default BoardBottom
