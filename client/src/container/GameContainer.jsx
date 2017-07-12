//contains logiccontainer - squaredetails
import React from 'react'
import BoardContainer from '../components/BoardContainer'

class GameContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      boardGrid: [ null, null, null, null, null, null, null, null, null],
      // winningMoves: [ 0,1,2 ] ]
      noOfClicks: 0,
      winner: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    }
  }

  checkWinner() {
    for (let i=0; i < this.state.winner.length; i++) {
      let squareToCheck = this.state.winner[i]
      let box1 = this.state.boardGrid[squareToCheck[0]]
      console.log("box1", box1);
      let box2 = this.state.boardGrid[squareToCheck[1]]
      console.log("box2", box2);
      let box3 = this.state.boardGrid[squareToCheck[2]]
      console.log("box3", box3);
      if (box1 === box2 && box1 === box3 && box1 !== null && box2 !== null && box3 !== null) {
        console.log("we have a winner")
      }
  }
        // if (lineToCheck[0] === lineToCheck[1] && lineToCheck[1] === lineToCheck[2]) {
          // console.log("We have a winner")
        // }

    }


  handleOnClick(index) {
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
    this.checkWinner()
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
