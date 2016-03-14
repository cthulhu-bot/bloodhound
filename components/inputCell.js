'use strict'

import React from 'react'

export default class InputCell extends React.Component {

  constructor(props) {
    super(props)
  }

  // function handleClick(event) {
  //   console.log("clicked")
  // }
  // var handleDragStart = function(event) {
  //   console.log("Drag start")
  // }
  // var handleDragOver = function(event) {
  //   console.log("Drag over")
  // }


  render() {
    return (
        <div className="InputCell">
          // <input onClick={this.handleClick} onDragOver={this.handleDragOver} onDragStart={this.handleDragStart} />
        </div>
      )
  }
}
