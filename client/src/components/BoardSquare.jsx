import React from 'react'

class BoardSquare extends React.Component {

  constructor(props){
    super(props)
  }

  onSquareClick(event) {
    this.props.handleOnClick(this.props.index)

  }

  render() {
    return(
      // console.log("in board", this.props.board)
      <div className="square" onClick={this.onSquareClick.bind(this)}>
        <h1>{this.props.board[this.props.index]}</h1>
      </div>
    )
  }

}
export default BoardSquare
