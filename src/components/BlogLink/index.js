import React from 'react';
import Link from 'gatsby-link'
import s from './BlogLink.module.scss'
import Icon from './../FeatherIcon'

const BlogLink = ({ to, title, date, excerpt, classes, icon, external }) => {

  const class_group = `${s.container} ${classes}`,
        date_obj = new Date(date),
        months = ["January","Februrary","March","April","May","June","July","August","September","October","November","December"],
        month = months[(date_obj.getMonth() + 0)],
        formatted_date = `${month} ${date_obj.getDay()}, ${date_obj.getFullYear()}`;

  const component_content = (
    <div>
      <h4 className={s.title}>
        {title}
      </h4>
      <small className={s.date}>
        {formatted_date}
      </small>

      <span className={s.icon}>
        <Icon
          type={icon}
        />
      </span>
    </div>
  );

  const link_content = function() {
    if (external) {
      return (
        <a href={to} target="_blank" className={s.banner}>
          {component_content}
        </a>
      );
    } else {
      return (
        <Link to={to} className={s.banner}>
          {component_content}
        </Link>
      )
    }
  };

  return (
    <article className={class_group}>
      
      {link_content()}

      <div className={s.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }}></div>
    </article>
  )
}

export default BlogLink;
