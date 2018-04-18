import React from 'react';
import s from './Title.module.scss'

const BlogLink = ({ title, tagline }) => {

  return (
    <div className={s.title_wrapper}>
      <div className={s.title}>
        <h1 className={s.header}>
          {title}
        </h1>

        <h5 className={s.subheader}>
          {tagline}
        </h5>
      </div>
    </div>
  )
}

export default BlogLink;
