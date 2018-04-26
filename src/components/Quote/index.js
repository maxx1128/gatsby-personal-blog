import React from 'react';

import s from './quote.module.scss';
import './quote_varients.scss';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "Quote here!",
      author: "Random McLorem",
      style: "none"
    };

    this.get_quote_data = this.get_quote_data.bind(this);
  }

  componentWillMount() {
    this.randomize_quote();
  }

  randomize_quote = () => {
    this.get_quote_data();
    this.get_quote_class();
  }

  get_quote_class = () => {
    const classes = [
      'test'
    ];

    this.setState({
      style: classes[Math.floor(Math.random() * classes.length)]
    });
  }

  get_quote_data = () => {

    const quote_url = "https://favqs.com/api/qotd";

    fetch(quote_url, {
        headers: {
          token: '21b6552cbf7dac06a2cff512cbbbbaee',
        },
        mode: 'cors',
        method: "GET",
        dataType: "jsonp"
    })
    .then(function(res){
      const data = res.json();

      data.then(function(data){
        this.setState({
          body: data.quote.body,
          author: data.quote.author
        });
      }.bind(this))
    }.bind(this))
    .catch(function(res){ console.log(res) })
  }

  render() {
    return (
      <div className={`${s.container} quote--${this.state.style}`}>
        
        <div className="quote__content">
          <span className="quote__body">
            {this.state.body}
          </span>
          <span className="quote__author" dangerouslySetInnerHTML={{ __html: this.state.author }} />
        </div>

        <a href="javascript:void(0)" className="quote__button" onClick={this.randomize_quote}>
          New Quote
        </a>
      </div>
    )
  }
};


export default Quote



