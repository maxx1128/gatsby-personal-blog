import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import chunk from 'lodash/chunk'

import s from './blog_listing.module.scss';
import twoRow from './../../layouts/twoRows.module.scss'

import BlogLink from './../../components/BlogLink'

class BlogIndex extends React.Component {
  render() {
    const post_data = get(this, 'props.data.allMarkdownRemark.edges')

    const posts_list = post_data.map((post, i) => {
      if (post.node.path !== '/404/') {
        const title = get(post, 'node.frontmatter.title') || post.node.path

        return (
          <BlogLink
            key={post.node.frontmatter.path}
            to={post.node.frontmatter.path}
            title={title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
          />
        )
      }
    });

    const group_classes = `${twoRow.wrapper} ${s.twoRow_override}`;

    const grouped_posts = chunk(posts_list, 2).map((group) => (
      <div className={group_classes}>
        {group}
      </div>
    ));

    return (
      <section className={s.container}>
        {grouped_posts}
      </section>
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
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
