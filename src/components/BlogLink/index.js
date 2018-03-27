import React from 'react';
import Link from 'gatsby-link'
import s from './BlogLink.module.scss'
import Icon from './../FeatherIcon'

const BlogLink = ({ to, title, date, excerpt, classes, icon }) => {

  const class_group = `${s.container} ${classes}`;

  return (
    <article className={class_group}>
      <Link to={to} className={s.banner}>
        <h4 className={s.title}>
          {title}
        </h4>
        <small className={s.date}>
          {date}
        </small>

        <span className={s.icon}>
          <Icon
            type={icon}
          />
        </span>
      </Link>
      
      <div className={s.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }}></div>
    </article>
  )
}

export default BlogLink;
