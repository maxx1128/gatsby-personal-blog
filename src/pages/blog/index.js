import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import chunk from 'lodash/chunk'

import s from './blog_listing.module.scss'

import BlogLink from './../../components/BlogLink'

class BlogIndex extends React.Component {
  render() {
    const post_data = get(this, 'props.data.allMarkdownRemark.edges')

    const posts_list = post_data.map((post, i) => {
      if (post.node.path !== '/404/') {
        const title = get(post, 'node.frontmatter.title') || post.node.path,
              icon = get(post, 'node.frontmatter.icon') || 'camera'

        return (
          <BlogLink
            key={post.node.frontmatter.path}
            icon={icon}
            to={post.node.frontmatter.path}
            title={title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            classes={s.blogItem}
          />
        )
      }
    });

    return (
      <section className={s.container}>
        {posts_list}
      </section>
    )
  }
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
            title
            icon
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
