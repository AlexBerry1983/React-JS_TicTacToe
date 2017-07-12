import React from 'react'
import BoardSquare from './BoardSquare'

class BoardContainer extends React.Component{



  render(){
    // const boardToRender = this.props.board.map((square, index) => {
    //   return <BoardSquare key={index} />
    // })

    const boardToRender = this.props.board.map( ( square, index ) => {
      console.log("boardcontainer index", index)
      return <BoardSquare index={index} key={index} board={this.props.board} handleOnClick={this.props.handleOnClick}/>

    })

    return (
    <div id="boardWrapper">
      {boardToRender}
    </div>
    )
  }
}

export default BoardContainer
