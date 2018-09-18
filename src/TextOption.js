import React, { Component } from 'react'
import textOptions from './textOptions'

class TextOption extends Component {
  render () {
    const { option, setOption } = this.props
    return (
      <div className='col-6'>
        <label htmlFor={option.id}>
          <input type='checkbox'
            id={option.id}
            onChange={setOption(option.id)} /> {' ' + option.label}
        </label>
      </div>
    )
  }
}

export default TextOption
