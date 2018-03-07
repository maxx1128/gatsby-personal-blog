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

    const { location }       = this.props,
          { title, tagline } = this.get_site_meta(),
          is_home            = (location.pathname === '/'),
          header_link        = <Link to={'/'}>{title}</Link>;

    return (is_home) ? <span><h1 className={s_home.header}>{header_link}</h1><small className={s_home.tagline}>{tagline}</small></span> : <h2>{header_link}</h2>
  }

  make_menu = () => {
    const menu_data = get(this, 'props.data.allMenuYaml.edges[0].node.menu'),
          is_vertical = ((location.pathname === '/') ? true : false);

    return (
      <Menu
        data={menu_data}
        vertical={is_vertical}
      />
    )
  }

  render() {

    const { children } = this.props,
          is_homepage  = (location.pathname === '/'),
          header       = this.make_header(),
          menu         = this.make_menu();

    if (is_homepage) {
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
              I’m Max Antonucci, a front-end developer living and working in New Haven, CT. I studied journalism in school for a love of writing. I switched to front-end development halfway through for a similar love of coding. I keep breathing because of my love of oxygen. I’m a curious freethinker and passionate puzzle-solver. However I have a serious daydreaming habit and don’t have telekinetic powers. No one is perfect, after all.
            </p>
          </div>

          <div className={s_home.reactrix}>
          </div>

          <div className={s_home.photo_wrapper}>
            <img className={s_home.photo}
              src={profile_pic}
            />
          </div>
        </div>
      )
    }

    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
        </Helmet>

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
