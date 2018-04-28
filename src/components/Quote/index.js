import React from 'react';
import fetch from 'isomorphic-fetch';

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

  componentWillMount() { this.get_quote_data(); }

  get_quote_class = () => {
    const current_class = this.state.style;

    const classes = [
      'anime1',
      'anime2',
      'bright',
      'child',
      'computer',
      'divide',
      'explosion',
      'lastWeekTonight',
      'staircase'
    ];

    const current_class_index = classes.indexOf(current_class);

    classes.splice(current_class_index, 1);

    this.setState({
      style: classes[Math.floor(Math.random() * classes.length)]
    });
  }

  get_quote_data = () => {
    const quote_max_length = 265,
          quote_large_length = 140,
          quote_url = "https://favqs.com/api/qotd";

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
        const body = (data.quote.body).trunc(quote_max_length);

        this.setState({
          body: body,
          author: data.quote.author,
          body_long: (body.length > quote_large_length)
        });

        this.get_quote_class();
      }.bind(this))
    }.bind(this))
    .catch(function(res){ console.log(res) })
  }

  render() {
    const quote_length = this.state.body_long ? 'quote--long' : 'quote--short';

    return (
      <div className={`${s.container} ${quote_length} quote--lastWeekTonight`}> {/*quote--${this.state.style}*/}
        
        <div className="quote__content">
          <div className="quote__body">
            <span>
              "{this.state.body}"
            </span>
          </div>
          <div className="quote__author">
            <span dangerouslySetInnerHTML={{ __html: `~ ${this.state.author}` }} />
          </div>
        </div>

        <a href="javascript:void(0)" className="quote__button" onClick={this.get_quote_data}>
          New Quote
        </a>
      </div>
    )
  }
};

export default Quote

String.prototype.trunc = String.prototype.trunc || function(n){
  return (this.length > n) ? this.substr(0, n-1) + '...' : this;
};

function remove_from_array(array, element) {
    const index = array.indexOf(element);
    
    if (index !== -1) {
      array.splice(index, 1);
    }
}