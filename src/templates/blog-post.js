import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import './blog-post-global.module.scss'
import s from './blog-post.module.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <div className={s.wrapper}>
        <div className={s.title}>
          <h1 className={s.title_header}>
            {post.frontmatter.title}
          </h1>

          <small className={s.date}>
            {post.frontmatter.date}
          </small>
        </div>
 
        <div className={s.content} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
