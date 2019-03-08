import React, { Component, Fragment } from 'react'
import Key from './Key'

export class Scale extends Component {
  keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
  keysRefs = {}

  constructor (props) {
    super(props)

    this.keys.forEach(item => {
      this.keysRefs[item] = React.createRef()
    })
  }

  play = (key) => {
    this.keysRefs[key].current.go()
  }

  render () {
    return (
      <Fragment>
        {
          this.keys.map(item => (
            <Key
              key={`${item}-${this.props.number}`}
              ref={this.keysRefs[item]}
              color={item.length === 1 ? 'white' : 'black'}
              notation={`${item}${this.props.number}`}
              play={this.props.play} />
          ))
        }
      </Fragment>
    )
  }
}

export default Scale
