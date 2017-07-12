import React from 'react'

class BoardSquare extends React.Component {

  constructor(props){
    super(props)
  }

  onSquareClick(event) {
    console.log("boardsquare, index", this.props.index)
    console.log("selection", this.props.board)
    this.props.handleOnClick(this.props.index)
    console.log("for output", this.props.board[this.props.index]);

  }

  render() {
    console.log("render in board square", )
    return(
      // console.log("in board", this.props.board)
      <div className="square" onClick={this.onSquareClick.bind(this)}>
        <h1>{this.props.board[this.props.index]}</h1>
      </div>
    )
  }

}
export default BoardSquare
