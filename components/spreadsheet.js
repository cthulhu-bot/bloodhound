'use strict'

import React from 'react'
import InputCell from './inputCell'

export default class SpreadSheel extends React.Component {

  constructor(props) {
     super(props)
     this.onChange = this.onChange.bind(this)
  }

  render() {
    return (
      <div className="spreadsheet">
        <h1>Spreadsheet</h1>
        <InputCell />
        <InputCell />
      </div>
    )
  }
}
