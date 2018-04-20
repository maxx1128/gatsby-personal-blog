import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Menu from './../components/Menu'
import Head from './../components/Head'
import Bio from './../components/Bio'
import Footer from './../components/Footer'
import Reactrix from './../components/Reactrix'
import profile_pic from './../components/Bio/profile-pic.jpg'

import './global.module.scss'
import s_header from './header.module.scss'
import s_home from './homepage.module.scss'

class Template extends React.Component {
  
  get_site_meta = () => {
    return get(this, 'props.data.site.siteMetadata')
  }

  is_homepage = () => {
    return (this.props.location.pathname === '/');
  }

  make_title = () => {

    const { location }       = this.props,
          { title, tagline } = this.get_site_meta(),
          is_home            = this.is_homepage(),
          header_link        = <Link to={'/'}>{title}</Link>;

    return (is_home) ? (
      <div>
        <h1 className={s_home.header}>
          {header_link}
        </h1>
        <small className={s_home.tagline}>
          {tagline}
        </small>
      </div>
    ) : (
      <div className={s_header.title}>
        <h2 className={s_header.titleText}>
          {header_link}
        </h2>
        <small className={s_home.tagline}>
          {tagline}
        </small>
      </div>
    )
  }

  make_menu = () => {
    const menu_data = get(this, 'props.data.allMenuYaml.edges[0].node.menu'),
          is_vertical = this.is_homepage();

    return (
      <Menu
        data={menu_data}
        vertical={is_vertical}
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
          { tagline }  = this.get_site_meta(),
          is_homepage  = this.is_homepage(),
          title        = this.make_title(),
          menu         = this.make_menu(),
          header       = this.make_header(),
          footer       = this.make_footer();

    if (is_homepage) {
      return ( 
        <div className={s_home.wrapper}>
          <Head
            title={"My homepage!"}
            url_path={this.props.location.pathname}
            tagline={tagline}
          />
          
          <div className={s_home.title}>
            {title}
          </div>

          <div className={s_home.menu}>
            {menu}
          </div>

          <div className={s_home.description}>
            <p>
              I’m Max Antonucci, a front-end developer living and working in New Haven, CT. I code, read, make, philosophize, box, and sometimes breathe. Most of all, I write.
            </p>
          </div>

          <div className={s_home.reactrix}>
            <Reactrix />
          </div>

          <div className={s_home.photo_wrapper}>
            <img className={s_home.photo}
              src={profile_pic}
              alt="Cartoon version of myself for my avatar"
            />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          {header}
          
          {children()}

          {footer}
        </div>
      )
    }
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
