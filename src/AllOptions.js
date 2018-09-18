import React, { Component } from 'react'
// import textOptions from './textOptions.js'
import TextOption from './TextOption'

class AllOptions extends Component {
  render () {
    const { textOptions, setOption } = this.props
    return (
      <div className='row options'>
        <div className='col-12'>
          <h4>Options</h4>
        </div>
        {textOptions.map((option, idx) => (
          <TextOption key={idx} option={option} setOption={setOption} />
        ))}
      </div>
    )
  }
}

export default AllOptions
