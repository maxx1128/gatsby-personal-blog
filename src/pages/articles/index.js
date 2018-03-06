import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import s from './articles.module.scss';

class ArticlesIndex extends React.Component {

  render() {
    const article_data = get(this, 'props.data.allArticlesYaml.edges[0].node.articles');

    const articles = article_data.map((article, i) => (
        <div className={s.container}>
          <a className={s.link} href={article.link} target="_blank" rel="noopener">
            <h4 className={s.header}>
              {article.name}
            </h4>
          </a>

          <tiny className={s.date}>
            Posted on {article.date}
          </tiny>

          <p className={s.description}>
            {article.description}
          </p>
        </div>
      )
    );

    return (
      <div>
        <p>
          Articles Page!
        </p>

        <ul>
          {articles}
        </ul>
      </div>
    )
  }
}

export default ArticlesIndex

export const articleQuery = graphql`
  query ArticlesQuery {
    allArticlesYaml {
      edges {
        node {
          articles {
            name
            date
            link
            description
          }
        } 
      }
    }
  }
`
