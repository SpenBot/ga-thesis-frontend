import React, { Component } from 'react'
import './BoardTop.css'




class BoardTop extends Component {

  constructor (props) {
    super(props)
    this.state = {
      p1HP: this.props.p1HP,
      p2HP: this.props.p2HP
    }
  }







  componentWillReceiveProps (newProps) {
    this.setState({turn: newProps.turn})
    this.setState({p1HP: newProps.p1HP})
    this.setState({p2HP: newProps.p2HP})
  }




  render() {
    return(

      <div className="BoardTopDiv">

        <div className="Player1InfoDiv">
          <h3>P1</h3>
          <p id='usr1'>{this.props.player1}</p>
          <div className="stats">
            <img id="heart" src="./heart-100.png" height="20px" width="20px" alt="coin"/>
            <p>{this.props.p1HP}</p>
            <img id="coin" src="./coin-100.png" height="20px" width="20px" alt="coin"/>
            <img id="gem" src="./gem-100.png" height="20px" width="20px" alt="gem"/>
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
            <img id="heart" src="./heart-100.png" height="20px" width="20px" alt="coin"/>
            <p>{this.props.p2HP}</p>
            <img id="coin" src="./coin-100.png" height="20px" width="20px" alt="coin"/>
            <img id="gem" src="./gem-100.png" height="20px" width="20px" alt="gem"/>
          </div>
        </div>


      </div>

    )
  }

}

export default BoardTop
