import React, { Component, Fragment } from 'react'
import './Piano.css'
import Tone from 'tone'
import Scale from './Scale'
import { Button } from 'antd'

export class Piano extends Component {
  scaleRefs = {}
  state = {
    note: 'E4 Eb4 E4 Eb4 E4 B3 D4 C4 A3;A1 E2 A2 C3 E3 A3 B3;A1 E2 A2 E3 Ab3 B3 C4;A1 E2 A2 E3 # E4 Eb4 E4 Eb4 E4 B3 D4 C4 A3;A1 E2 A2 C3 E3 A3 B3;A1 E2 A2 E3 C4 B3 A3 # B3 C4 D4 E4;C2 G2 C3 G3 F4 E4 D4;G1 G2 B2 F3 E4 D4 C4;A1 E2 A2 E3 D4 C4 B3;E1 E2 E3 E4'
    // E3 Ab3 B3 C4;A1 E2 A2 E3 C4 B3 A3
  }

  notes = []

  constructor (props) {
    super(props)

    for (let i = 1; i <= 5; i++) {
      this.scaleRefs[i] = React.createRef()
    }
  }

  play = (key) => {
    var synth = new Tone.FMSynth().toMaster()

    synth.triggerAttackRelease(key, '6n')
  }

  handleClick = () => {
    // this.scale1Ref.current.play('D')
    this.notes = this.state.note.split(' ')

    var timer = setInterval(() => {
      if (this.notes.length > 0) {
        if (this.notes[0] !== '#') {
          this.notes[0].split(';').forEach(note => {
            // console.log(note)
            const number = parseInt(note[note.length - 1])
            this.scaleRefs[number + 1].current.play(note.substring(0, note.length - 1))
          })
        }
        this.notes.shift()
      } else {
        clearInterval(timer)
      }
    }, 300)
  }

  handleChange = (event) => {
    const note = event.target.value

    this.setState({ note })
  }

  render () {
    return (
      <Fragment>
        <textarea onChange={this.handleChange} cols='20' rows='2' value={this.state.note} />
        <Button type='primary' onClick={this.handleClick}>Click</Button>
        <div className='piano'>
          {
            [...Array(5)].map((el, index) => (
              <Scale
                key={`scale-${index + 1}`}
                ref={this.scaleRefs[index + 1]}
                number={index + 1}
                play={this.play} />
            ))
          }
        </div>
      </Fragment>
    )
  }
}

export default Piano
