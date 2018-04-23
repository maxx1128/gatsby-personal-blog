import React from 'react'
import {Helmet} from 'react-helmet'

import profilePic from './../Bio/profile-pic.jpg'

// Needs at least title, url, and tagline. descr and image are optional

class Head extends React.Component {

  render() {
    const title = `${this.props.title} | Maxwell Antonucci` || 'Maxwell Antonucci',
          url = `https://www.maxwellantonucci.com${this.props.url_path}`,
          tagline = this.props.tagline || 'TAGLINE HERE',
          descr = this.props.descr || tagline,
          image =  this.props.image ? `https://www.maxwellantonucci.com${(this.props.image )}` : profilePic;

    return (
      <Helmet>
        <html lang="en" />

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title}</title>
        <meta name="description" content={descr} />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={descr} />
        <meta property="og:summary" content={tagline} />
        <meta property="og:site_name" content="maxwellantonucci.com" />
        <meta property="og:image" content={image}/>
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Maxwell_Dev" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={tagline} />
        <meta name="twitter:summary" content={tagline} />
        <meta property="twitter:image" content={image} />
        <meta name="twitter:creator" content="@Maxwell_Dev" />
      </Helmet>
    );
  }
}

export default Head
