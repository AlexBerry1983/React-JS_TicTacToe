import React from 'react'

class BoardSquare extends React.Component {

  onSquareClick(event) {
    console.log("boardsquare, index", event.target.position)
    this.props.handleOnClick(event.target.position)
  }

    render() {
      return(
      <div className="square" onClick={this.onSquareClick.bind(this)}>
        i am a square
      </div>
      )
    }


}
export default BoardSquare
