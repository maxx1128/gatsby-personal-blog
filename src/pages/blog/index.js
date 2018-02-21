import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import s from './blog_listing.module.scss';

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <div key={post.node.frontmatter.path}>
                <h3>
                  <Link to={post.node.frontmatter.path} >
                    {post.node.frontmatter.title}
                  </Link>
                </h3>
                <small>{post.node.frontmatter.date}</small>
                <div className={s.item} dangerouslySetInnerHTML={{ __html: post.node.excerpt }}></div>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          html
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
