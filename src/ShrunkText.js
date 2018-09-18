import React, { Component } from 'react'

class ShrunkText extends Component {
  render () {
    const { shrunkText } = this.props
    return (
      <div className='col'>
        <div className='TextEntry-shrunk-text'>
          {shrunkText}
        </div>
        <div>
          {shrunkText && `${shrunkText.length} characters`}
        </div>
      </div>
    )
  }
}

export default ShrunkText
