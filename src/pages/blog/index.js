import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import chunk from 'lodash/chunk'

import s from './blog_listing.module.scss'
import s_page from './../../layouts/page.module.scss'

import Head from './../../components/Head'
import Title from './../../components/Title'
import BlogLink from './../../components/BlogLink'

class BlogIndex extends React.Component {
  render() {
    const post_data = get(this, 'props.data.allMarkdownRemark.edges'),
          title = "Thoughts I've Saved",
          tagline = "We all have thoughts. I wrote some here for safekeeping.";

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
            excerpt={post.node.frontmatter.excerpt || post.node.excerpt}
            classes={s.blogItem}
          />
        )
      }
    });

    return (
      <div>
        <Head
          title={title}
          url_path={this.props.location.pathname}
          tagline={tagline}
        />

        <Title
          title={title}
          tagline={tagline}
        />

        <div className={s_page.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptate repellendus saepe. Dignissimos fugiat hic, quasi quas, illo pariatur libero facere odit cumque saepe, porro quisquam obcaecati temporibus consequuntur voluptatum.
          </p>
        </div>

        <section className={s.container}>
          {posts_list}
        </section>
      </div>
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
            excerpt
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
