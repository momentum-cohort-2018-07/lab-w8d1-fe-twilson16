import React, { Component } from 'react'
// import textOptions from './textOptions'
// import ShrinkText from './ShrinkText'
// import App from './App'

class TextInput extends Component {
  render () {
    let { text, updateText } = this.props
    return (
      <div className='col'>
        <textarea
          className='TextEntry-textbox'
          placeholder='What do you want to shrink?'
          onChange={updateText}
          value={text} />
        <div>
          {text && `${text.length} characters`}
        </div>
      </div>
    )
  }
}

export default TextInput
