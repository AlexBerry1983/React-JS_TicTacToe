//contains logiccontainer - squaredetails
import React from 'react'
import BoardContainer from '../components/BoardContainer'

class GameContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

      boardGrid: [ "", "", "", "", "", "", "", "", ""],
      // winningMoves: [ 0,1,2 ] ]
      noOfClicks: 0
    }
  }

  playerTurn() {

  }

  handleOnClick(event) {
    console.log("handleOnClick")
    console.log("index",event.target.value)


  }

  render(){
    return(
      <div>
        <BoardContainer board={this.state.boardGrid} handleOnClick={this.handleOnClick.bind(this)}/>
      </div>
    )
  }
}

export default GameContainer
