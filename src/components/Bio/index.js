import React from 'react'

import profilePic from './profile-pic.jpg'
import s from './Bio.module.scss'

class Bio extends React.Component {

  render() {

    const { author, twitter } = this.props

    return (
      <p>
        <img className={s.photo}
          src={profilePic}
          alt={author}
        />
        Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.{' '}
        <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener">
          You should follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
