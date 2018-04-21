import React, { Component } from 'react';
import s from './Stream.module.scss'

// Single source of truth for the animation length

class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {},
      anim_length: null,
      callback: null
    }
  }

  get_range = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  get_random_left_position = () => `${this.get_range(5, 95)}%`
  get_random_font_size = () => `${this.get_range(0.5, 1.5)}rem`

  componentWillMount = () => {
    const anim_length = this.get_range(20000, 40000),
          position = this.get_random_left_position(),
          font_size = this.get_random_font_size(),
          delay = Math.floor(Math.random() * 8) + 1,
          callback = (delay * 1000) + anim_length;

    const styles = {
      left: position,
      'animationDuration': `${anim_length / 1000}s`,
      'animationDelay': `${delay}s`,
      'fontSize': font_size
    };

    this.setState({
      styles: styles,
      anim_length: anim_length,
      callback: callback
    });
  }

  update_styles = () => {
    const position = this.get_random_left_position(),
          font_size = this.get_random_font_size(),
          anim_length = this.state.anim_length;

    let styles = this.state.styles;

    styles['left'] = position;
    styles['fontSize'] = font_size;

    this.setState({
      styles: styles,
      callback: anim_length
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
      <div>
        <span className={s.container} style={this.state.styles}>
          {string}
        </span>
        <span className={s.blurred} style={this.state.styles}>
          {string}
        </span>
      </div>
    );
  }
}

export default Stream;
