import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

class ArticlesIndex extends React.Component {
  render() {
    const article_data = get(this, 'props.data.allArticlesYaml.edges[0].node.articles');

    const articles = article_data.map((article, i) => (
        <li key={i}>
          <a href={article.link} target="_blank" rel="noopener">
            {article.name}
          </a>
        </li>
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
          }
        } 
      }
    }
  }
`
