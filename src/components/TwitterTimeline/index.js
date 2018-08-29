import React from 'react';
import { Timeline } from 'react-twitter-widgets'

import s from './../../pages/homepage.module.scss'

class TwitterTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false
    };
  }

  render() {
    const grid_classes = this.state.rendered ? `${s.row_2} ${s.column_2} ${s.timeline_rendered}` : `${s.row_1} ${s.column_1}`;

    return (
      <div className={`${grid_classes} ${s.timeline}`}>

        { !this.state.rendered && (
          <div className={(this.state.rendered ? '' : s.no_timeline_container)}>
            <h4 className={s.no_timeline_header}>
              No Tweets here...
            </h4>

            <a href="https://twitter.com/Maxwell_Dev" target="_blank" rel="noopener">
              Visit my actual Twitter profile instead.
            </a>
          </div>
        )}

        <div className={(this.state.rendered ? '' : s.hidden_timeline)}>
          <Timeline
            className={"FFFFF"}
            dataSource={{
              sourceType: 'profile',
              screenName: 'Maxwell_Dev'
            }}
            options={{
              username: 'Maxwell_Dev',
              width: '100%',
              height: '525px'
            }}
            onLoad={() => this.setState({rendered: true})}
          />
        </div>

      </div>
    )
  }
};

export default TwitterTimeline
