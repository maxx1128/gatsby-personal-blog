import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Menu from './../components/Menu'
import Helmet from 'react-helmet'
import Bio from './../components/Bio'
import profile_pic from './../components/Bio/profile-pic.png'

import './global.module.scss'
import s from './layout.module.scss'
import s_home from './../pages/homepage/layout.module.scss'

class Template extends React.Component {
  
  get_site_meta =() => {
    return get(this, 'props.data.site.siteMetadata')
  }

  make_header = () => {

    const { location } = this.props,
          { title, tagline }    = this.get_site_meta(),
          is_home      = (location.pathname === '/'),
          header_link  = <Link to={'/'}>{title}</Link>

    return (is_home) ? <span><h1 className={s_home.header}>{header_link}</h1><small className={s_home.tagline}>{tagline}</small></span> : <h2>{header_link}</h2>
  }

  make_menu = () => {
    const menu_data = get(this, 'props.data.allMenuYaml.edges[0].node.menu');

    return (
      <Menu
        data={menu_data}
      />
    )
  }

  render() {

    const { children } = this.props,
          is_header    = (location.pathname === '/'),
          header       = this.make_header(),
          menu         = this.make_menu();

    if (is_header) {
      return ( 
        <div className={s_home.wrapper}>
          <div className={s_home.title}>
            {header}
          </div>

          <div className={s_home.menu}>
            {menu}
          </div>

          <div className={s_home.description}>
            <p>
              Ah that's right. I was in the middle of recreating a chess game. W-Wright! Have you lost your mind?! Focus! The defendant is the person on trial! You're his lawyer! Thank... thank you, Your Honor. No. (I know what he's gonna say, but I'll let him look smart.) Wh-What a completely foolish line of foolish thought from a thoroughly foolish fool! We were great together! We were Romeo and Juliet, Cleopatra and Mark Anthony! 
            </p>
          </div>

          <div className={s_home.reactrix}>
          </div>

          <img className={s_home.photo}
            src={profile_pic}
          />
        </div>
      )
    }

    return (
      <div>
        {header}
        {menu}
        
        <div className={s.wrapper}>
          <div className={s.container}>
            {children()}
          </div>
        </div>
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
  }
`
