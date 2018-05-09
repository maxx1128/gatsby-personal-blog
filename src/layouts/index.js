import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Menu from './../components/Menu'
import Head from './../components/Head'
import Footer from './../components/Footer'

import './global.module.scss'
import s_header from './header.module.scss'

class Template extends React.Component {
  
  get_site_meta = () => {
    return get(this, 'props.data.site.siteMetadata')
  }

  make_title = () => {

    const { title, tagline } = this.get_site_meta(),
          header_link        = <Link to={'/'}>{title}</Link>;

    return (
      <div className={s_header.title}>
        <h2 className={s_header.titleText}>
          {header_link}
        </h2>
        <small className={s_header.tagline}>
          {tagline}
        </small>
      </div>
    )
  }

  make_menu = () => {
    const menu_data = get(this, 'props.data.allMenuYaml.edges[0].node.menu')

    return (
      <Menu
        data={menu_data}
        current_path = {this.props.location.pathname}
      />
    )
  }

  make_header = () => {
    const title       = this.make_title(),
          menu        = this.make_menu();

    return (
      <header className={s_header.container}>
        {title}
        <div className={s_header.menu}>
          {menu}
        </div>
      </header>
    );
  }

  make_footer = () => {
    const social_data = get(this, 'props.data.allSocialYaml.edges[0].node.social');

    return (
      <Footer
        social_links={social_data}
      />
    );
  }

  render() {

    const { children } = this.props,
          header       = this.make_header(),
          footer       = this.make_footer();

    return (
      <div>
        {header}
        
        {children()}

        {footer}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template

export const templateQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
        tagline
        author
        twitter
      }
    }
    allMenuYaml {
      edges {
        node {
          menu {
            name
            link
          }
        } 
      }
    }
    allSocialYaml {
      edges {
        node {
          social {
            name
            url
            icon
            text
          }
        } 
      }
    }
  }
`
