import React from 'react'
import Icon from './../components/FeatherIcon'

import './blog-post-global.module.scss'
import s from './blog-post.module.scss'

import Head from './../components/Head'

class BlogPostTemplate extends React.Component {
  render() {

    const post = this.props.data.markdownRemark,
          date = post.frontmatter.date,
          postType = post.frontmatter.postType,
          isNote = (postType === 'note');

    const title = isNote ? `Note from ${date}` : post.frontmatter.title,
          excerpt = isNote ? `Some random musings scribbled down on ${date}` : post.frontmatter.excerpt,
          icon = isNote ? 'clipboard' : post.frontmatter.icon;

    return (
      <div>
        <div className={s.title_wrapper}>
          <div className={s.title}>
            <Icon
              type={icon}
              size={60}
              classes={s.icon}
            />

            <h1 className={s.title_header}>
              {title}
            </h1>

            {!isNote &&
              <small className={s.date}>
                {date}
              </small>
            }
          </div>
        </div>

        <div className={s.wrapper}>
          <Head
            title={title}
            url_path={this.props.location.pathname}
            tagline={excerpt || post.excerpt}
          />

          <div className={s.content} dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
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
      excerpt
      frontmatter {
        title
        excerpt
        icon
        postType
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
