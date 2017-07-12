import React from 'react'
import BoardSquare from './BoardSquare'

class BoardContainer extends React.Component{



  render(){
    // const boardToRender = this.props.board.map((square, index) => {
    //   return <BoardSquare key={index} />
    // })

    const boardToRender = this.props.board.map( ( square, index ) => {
      console.log("boardcontainter index", index)
      value = index

      return <BoardSquare value={ index } key={ index } handleOnClick={this.props.handleOnClick}/>

    })

    return (
    <div>
      {boardToRender}
    </div>
    )
  }
}

export default BoardContainer
