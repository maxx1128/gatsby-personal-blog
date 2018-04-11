import React, { Component } from 'react'
import s from './Reactrix.module.scss'

import Stream from './Stream'

class Reactrix extends Component {

  render() {
    return (
      <div className={s.reactrix}>
        <Stream string="Hello my name is Max!" />
        <Stream string="Hello my name is Max Lorem Ipsum Dolor Sin Emet!" />
        <Stream string="Short string!" />
        <Stream string="Work with your thoughts, not against them" />
        <Stream string="All we have is our right to feel lost" />
        <Stream string="When humans are made into commodities, what can conversations be but trivial?" />
      </div>
    );
  }
}

export default Reactrix;
