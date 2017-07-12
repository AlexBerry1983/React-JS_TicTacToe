//contains logiccontainer - squaredetails
import React from 'react'
import BoardContainer from '../components/BoardContainer'

class GameContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      player: "X",
      boardGrid: [ "", "", "", "", "", "", "", "", ""],
      // winningMoves: [ 0,1,2 ] ]
      noOfClicks: 0
    }
  }

  playerTurn() {

  }

  handleOnClick(index) {
    console.log("handleOnClick")
    console.log("index",index)
    this.state.noOfClicks ++
    if(this.state.noOfClicks % 2 === 0){
      const board = this.state.boardGrid
      board[index] = "O"
      this.setState({boardGrid: board})

    } else {
      const board = this.state.boardGrid
      board[index] = "X"      
      this.setState({boardGrid: board})
    }
    console.log(this.state.boardGrid);
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
