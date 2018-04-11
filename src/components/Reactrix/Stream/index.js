import React, { Component } from 'react';
import s from './Stream.module.scss'

// Single source of truth for the animation length

class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {},
      callback: this.anim_length
    }
  }

  anim_length = 20000

  get_random_left_position = () => `${Math.floor(Math.random() * 90) + 5}%`
  get_random_font_size = () => `${Math.floor(Math.random() * 2) + 0.5}rem`

  componentWillMount = () => {
    const position = this.get_random_left_position(),
          font_size = this.get_random_font_size(),
          delay = Math.floor(Math.random() * 10) + 1,
          callback = (delay * 1000) + this.anim_length;

    const styles = {
      left: position,
      'animationDuration': `${this.anim_length / 1000}s`,
      'animationDelay': `${delay}s`,
      'fontSize': font_size
    };

    this.setState({
      styles: styles,
      callback: callback
    });
  }

  update_styles = () => {
    const position = this.get_random_left_position(),
          font_size = this.get_random_font_size();

    let styles = this.state.styles;

    styles['left'] = position;
    styles['fontSize'] = font_size;

    this.setState({
      styles: styles,
      callback: this.anim_length
    });
  }

  create_stream_array = () => {
    const string_array = (this.props.string).replace(/\s/g, '♣').split("").reverse();
          
    const vertical_string = string_array.map((char, index) => {
      const classes = (char === '♣') ? s.hiddenChar : s.VisibleChar;

      return (
        <span key={index} className={classes}>
          {char}
        </span>
      );
    });

    return vertical_string;
  }

  render() {
    setTimeout(function() {
      this.update_styles();
    }.bind(this), this.state.callback);

    const string = this.create_stream_array();

    return (
      <span className={s.container} style={this.state.styles}>
        {string}
      </span>
    );
  }
}

export default Stream;
