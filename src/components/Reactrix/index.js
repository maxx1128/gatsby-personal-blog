import React, { Component } from 'react'
import s from './Reactrix.module.scss'

import Stream from './Stream'

class Reactrix extends Component {

  render() {
    return (
      <div className={s.reactrix}>
        <Stream
          string="Hello my name is Max!"
        />
      </div>
    );
  }
}

export default Reactrix;
