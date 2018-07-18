import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import chunk from 'lodash/chunk'

import s from './writing.module.scss'
import s_page from './../../layouts/page.module.scss'

import Head from './../../components/Head'
import Title from './../../components/Title'
import BlogLink from './../../components/BlogLink'

class WritingIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      order: 'desc',
      group: 'all'
    }
  }

  get_blog_posts = () => {
    const post_data = get(this, 'props.data.allMarkdownRemark.edges');

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
        );
      }
    });

    return posts_list;
  }

  get_articles = () => {
    const article_data = get(this, 'props.data.allArticlesYaml.edges[0].node.articles');

    const articles = article_data.map((article, i) => (
        <BlogLink
          key={i}
          icon={'link'}
          to={article.link}
          title={article.name}
          date={article.date}
          excerpt={article.description}
          classes={s.blogItem}
          external={true}
        />
      )
    );

    return articles;
  }

  get_all_writing = () => {

    const blog_posts = this.get_blog_posts(),
          articles = this.get_articles(),
          all_writing = blog_posts.concat(articles),
          order = this.state.order,
          group = this.state.group;

    let filtered_articles;

    all_writing.sort(function(a, b) {
      if (order === 'desc') {
        return new Date(b.props.date) - new Date(a.props.date);
      } else {
        return new Date(a.props.date) - new Date(b.props.date);
      }
    });

    if (group === 'articles') {
      filtered_articles = all_writing.filter(item => item.props.external);
    } else if (group === 'blog') {
      filtered_articles = all_writing.filter(item => !item.props.external);
    }

    return (filtered_articles || all_writing);
  }

  update_order_filter = (order) => {
    this.setState({ order: order });
  }

  update_group_filter = (group) => {
    this.setState({ group: group });
  }

  render() {
    const title = "Thoughts I've Saved",
          tagline = "Musings written down for safekeeping",
          writing = this.get_all_writing();

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
            Writing is a huge part of my life, ranging from newspaper articles, coding posts, or my personal blog. I've grouped my favorites here, added filters for your convenience, and invite you to enrich your mind with them. Armchair and green tea not included.
          </p>

          <div className={s.form_wrapper}>
            <div className={s.form}>
              <label for="all" className={s.radio_label}>
                <input type="radio" value="all"
                  id="all"
                  checked={this.state.group === 'all'}
                  onChange={() => this.update_group_filter('all')}
                />
                Show All
              </label>
              <label for="articles" className={s.radio_label}>
                <input type="radio" value="articles"
                  id="articles"
                  checked={this.state.group === 'articles'}
                  onChange={() => this.update_group_filter('articles')}
                />
                Articles
              </label>
              <label for="blog" className={s.radio_label}>
                <input type="radio" value="blog"
                  id="blog"
                  checked={this.state.group === 'blog'}
                  onChange={() => this.update_group_filter('blog')}
                />
                Blog Posts
              </label>
            </div>

            <div className={s.form}>
              <label for="desc" className={s.radio_label}>
                <input type="radio" value="desc"
                  id="desc"
                  checked={this.state.order === 'desc'}
                  onChange={() => this.update_order_filter('desc')}
                />
                Newest
              </label>
              <label for="asc" className={s.radio_label}>
                <input type="radio" value="asc"
                  id="asc"
                  checked={this.state.order === 'asc'}
                  onChange={() => this.update_order_filter('asc')}
                />
                Oldest
              </label>
            </div>
          </div>
        </div>

        <section className={`${s.container} ${s_page.content_large}`}>
          {writing}
        </section>
      </div>
    )
  }
}

export default WritingIndex

export const pageQuery = graphql`
  query WritingQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {
        frontmatter: { path: { ne: "/null/" } }
      }
    ){
      edges {
        node {
          excerpt
          html
          frontmatter {
            title
            icon
            path
            excerpt
            date
          }
        }
      }
    }
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
