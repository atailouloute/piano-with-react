import React, { Component } from 'react'
import './App.css'
import Tone from 'tone'
import Piano from './components/piano/Piano'

class App extends Component {
  handleClick = () => {
    var synth = new Tone.AMSynth().toMaster()

    new Tone.Part(function (time, value) {
      // the value is an object which contains both the note and the velocity
      synth.triggerAttackRelease(value.note, '8n', time, value.velocity)
    }, [{ 'time': 0, 'note': 'C3', 'velocity': 0.9 },
      { 'time': '0:2', 'note': 'C4', 'velocity': 0.5 }
    ]).start(0)
  }

  play = (notes) => {

  }

  render () {
    return (
      <div className='App' >
        <Piano />
      </div>
    )
  }
}

export default App
