import React, { Component } from 'react'
import './BoardTop.css'




class BoardTop extends Component {

  render() {
    return(

      <div className="BoardTopDiv">


        <div className="Player1InfoDiv">
          <h3>P1</h3>
          <p id='usr1'>{this.props.player1}</p>
          <p>HP</p>
          <p>$$</p>
          <p>OP</p>
        </div>


        <div className="ArenaDiv">
          <img id="monkey1" src='./monkey-fixed.png' height="60" width="60" alt="monkey pic"/>
          <img id="monkey2" src='./monkey-fixed.png' height="60" width="60" alt="monkey pic"/>
        </div>


        <div className="Player2InfoDiv">
          <h3>P2</h3>
          <p id='usr2'>{this.props.player2}</p>
          <p>HP</p>
          <p>$$</p>
          <p>OP</p>
        </div>


      </div>

    )
  }

}

export default BoardTop
