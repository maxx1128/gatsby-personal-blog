import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'

import s_page from './../../layouts/page.module.scss'

import Head from './../../components/Head'
import Title from './../../components/Title'

class NotesTemplate extends React.Component {
  get_notes = () => {
    const notes_data = get(this, 'props.data.allMarkdownRemark.edges');

    const notes_items = notes_data.map((note, i) => {
      const title = get(note, 'node.frontmatter.date'),
            path = get(note, 'node.frontmatter.path'),
            link_id = title.replace(/ /g, '').replace(/,/g, ''),
            content = get(note, 'node.html');

      return (
        <article key={i}>
          <h3 id={link_id}>
            <Link to={path}>
              {title}
            </Link>
          </h3>

          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </article>
      );
    });

    return notes_items;
  }

  render() {
    const title = "Notes I've Scrawled",
          tagline = "Quips and snippets too short for blog posts",
          notes = this.get_notes();

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
          <section>
            {notes}
          </section>
        </div>
      </div>
    )
  }
}

export default NotesTemplate

export const pageQuery = graphql`
  query NotesQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { postType: { eq: "note" } }
      },
      sort: { fields: [frontmatter___date], order: DESC }
    ){
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
