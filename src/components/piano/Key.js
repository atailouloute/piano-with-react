import React, { Component } from 'react'

export class Key extends Component {
  state = {
    pressed: false
  }

  go = () => {
    this.press()
    this.handleClick()
  }

  press = () => {
    this.setState({ pressed: true })
    this.props.play(this.props.notation)
  }

  handleClick = () => {
    setTimeout(function () {
      this.setState({ pressed: false })
    }.bind(this), 100)
  }

  render () {
    let className = null
    if (this.state.pressed) {
      className = `key key-${this.props.color} key-${this.props.color}-clicked`
    } else {
      className = `key key-${this.props.color}`
    }

    return (
      <span
        title={this.props.notation}
        onClick={this.handleClick}
        onMouseDown={() => this.press(true)}

        className={className}
      ><span className='note'>{this.props.notation}</span></span>
    )
  }
}

export default Key
