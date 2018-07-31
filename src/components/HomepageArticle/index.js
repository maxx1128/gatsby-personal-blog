import React from 'react';
import Link from 'gatsby-link'

const HomepageArticle = ({ title, excerpt, classes, key, link, external }) => {

  const article_content = (
    <div>
      <h4>
        {title}
      </h4>

      {excerpt &&
        <p>
          {excerpt}
        </p>
      }
    </div>
  )

  if (external) {
    return (
      <a
        className={classes}
        key={key}
        href={link}
        target='_blank'
        rel='noopener'
      >
        {article_content}
      </a>
    );
  } else {
    return (
      <Link
        className={classes}
        key={key}
        to={link}
      >
        {article_content}
      </Link>
    );
  }
}

export default HomepageArticle;
