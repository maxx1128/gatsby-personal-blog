import React, { Component } from 'react';
import s from './Stream.module.scss'

class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {}
    }
  }

  componentWillMount = () => { this.set_random_left_position(); }

  set_random_left_position = () => {
    const position = `${Math.floor(Math.random() * 90) + 5}%`;

    const styles = { left: position };

    console.log(styles);

    this.setState({
      styles: styles
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
      this.set_random_left_position();
    }.bind(this), 10000);

    const string = this.create_stream_array();

    return (
      <span className={s.container} style={this.state.styles}>
        {string}
      </span>
    );
  }
}

export default Stream;
