import React, { Component } from 'react'
import s from './Reactrix.module.scss'

import Stream from './Stream'

class Reactrix extends Component {

  render() {
    return (
      <div className={s.reactrix}>
        <Stream string ="Listen and read, never watch" />
        <Stream string ="Work with your Thought, not against it" />
        <Stream string ="Reimagine, don't recreate" />
        <Stream string ="Always remember the bigger picture" />
        <Stream string ="Question every claim" />
        <Stream string ="Make excellent mistakes" />
        <Stream string ="Live simply, cynically, and not too seriously" />
        <Stream string ="Keep your crazy spark alive" />
        <Stream string ="Live by values, not desires" />
        <Stream string ="You only control yourself" />
        <Stream string ="Avoid others' toxic, pointless games" />
      </div>
    );
  }
}

export default Reactrix;
