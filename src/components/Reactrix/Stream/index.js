import React, { Component } from 'react';
import s from './Stream.module.scss'

class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string_frag: '',
      index:  0
    }
  }

  decorate_string_frag = (string) => {
    let char_array = [...string];

    char_array.map((char) => {
      return (
        <span className={s.character}>
          {char}
        </span>
      );
    });

    return char_array;
  }

  update_string_frag = () => {
    const { index }        = this.state,
          { string }       = this.props,
          limit            = 7,
          filler           = '♣'.repeat(limit);

    const ready_string = (string + filler).replace(/\s/g, '♣'),
          string_array = ready_string.split("").reverse(),
          string_frag  = string_array.splice(index, limit),
          new_index    = ((((index * -1) + limit) + 1) === ready_string.length) ? limit : index - 1;

    let final_frag = string_frag.map((char, index) => {

      const classes = (char === '♣') ? s.hiddenChar : '';

      return (
        <span key={index} className={classes}>
          {char}
        </span>
      );
    });

    this.setState({
      string_frag: final_frag,
      index: new_index
    })
  }

  componentWillMount = () => { this.update_string_frag() }

  render() {
    setTimeout(function() {
      this.update_string_frag();
    }.bind(this), 175);

    return (
      <span className={s.container}>
        {this.state.string_frag}
      </span>
    );
  }
}

export default Stream;
