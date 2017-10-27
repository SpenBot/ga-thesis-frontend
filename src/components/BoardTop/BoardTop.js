
/////////////// CONFIGURATION //////////////////////////////////////
////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import './BoardTop.css'



/////////////// COMPONENT //////////////////////////////////////////
////////////////////////////////////////////////////////////////////

class BoardTop extends Component {

  constructor (props) {
    super(props)
    this.state = {
      p1HP: this.props.p1HP,
      p1C: this.props.p1C,
      p1OP: this.props.p1OP,
      p2HP: this.props.p2HP,
      p2C: this.props.p2C,
      p2OP: this.props.p2OP
    }
  }





  /////////////// UPDATE PLAYER STATS DISPLAY ////////////////////////
  ////////////////////////////////////////////////////////////////////

  componentWillReceiveProps (newProps) {
    this.setState({turn: newProps.turn})
    this.setState({p1HP: newProps.p1HP})
    this.setState({p1C: newProps.p1C})
    this.setState({p1OP: newProps.p1OP})
    this.setState({p2HP: newProps.p2HP})
    this.setState({p2C: newProps.p2C})
    this.setState({p2OP: newProps.p2OP})
  }






/////////////// RENDER //////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

  render() {
    return(

      <div className="BoardTopDiv">

        <div className="Player1InfoDiv">
          <h3>P1</h3>
          <p id='usr1'>{this.props.player1}</p>
          <div className="stats">

            <div className="iconStatDiv">
              <img id="heart" src="./heart-100.png" height="20px" width="20px" alt="coin"/>
              <p>{this.props.p1HP}</p>
            </div>
            <div className="iconStatDiv">
            <img id="coin" src="./coin-100.png" height="20px" width="20px" alt="coin"/>
            <p>{this.props.p1C}</p>
            </div>
            <div className="iconStatDiv">
            <img id="gem" src="./gem-100.png" height="20px" width="20px" alt="gem"/>
            <p>{this.props.p1OP}</p>
            </div>

          </div>
        </div>


        <div className="ArenaDiv">
          <img id="monkey1" src='./monkey-fixed.png' height="60" width="60" alt="monkey pic"/>
          <img id="monkey2" src='./monkey-fixed.png' height="60" width="60" alt="monkey pic"/>
        </div>


        <div className="Player2InfoDiv">
          <h3>P2</h3>
          <p id='usr2'>{this.props.player2}</p>
          <div className="stats">

            <div className="iconStatDiv">
              <img id="heart" src="./heart-100.png" height="20px" width="20px" alt="coin"/>
              <p>{this.props.p2HP}</p>
            </div>

            <div className="iconStatDiv">
              <img id="coin" src="./coin-100.png" height="20px" width="20px" alt="coin"/>
              <p>{this.props.p2C}</p>
            </div>

            <div className="iconStatDiv">
              <img id="gem" src="./gem-100.png" height="20px" width="20px" alt="gem"/>
              <p>{this.props.p2OP}</p>
            </div>

          </div>
        </div>


      </div>

    )
  }

}

export default BoardTop
