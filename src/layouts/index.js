import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Menu from './../components/Menu'
import Helmet from 'react-helmet'

import Bio from './../components/Bio'

import './global.module.scss'
import s from './layout.module.scss'

class Template extends React.Component {
  
  get_site_meta =() => {
    return get(this, 'props.data.site.siteMetadata')
  }

  make_header = () => {
    const { location } = this.props,
          { title }    = this.get_site_meta(),
          is_home      = (location.pathname === '/'),
          header_link  = <Link to={'/'}>{title}</Link>

    return (is_home) ? <h1>{header_link}</h1> : <h2>{header_link}</h2>
  }

  make_menu = () => {
    const menu_data = get(this, 'props.data.allMenuYaml.edges[0].node.menu');

    return (
      <Menu
        data={menu_data}
      />
    )
  }

  make_bottom_meta = () => {
    const { title, author, twitter } = this.get_site_meta();

    return (
      <div>
        <Helmet title={title} />
        <Bio
          author={author}
          twitter={twitter}
        />
      </div>
    )
  }

  render() {

    const { children } = this.props,
          is_header    = (location.pathname === '/'),
          header       = this.make_header(),
          menu         = this.make_menu(),
          bottom_meta  = this.make_bottom_meta();

    if (is_header) {
      return ( 
        <div>
          {header}

          <h1>
            Custom homepage layout
          </h1>

          <p>
            Ah that's right. I was in the middle of recreating a chess game. W-Wright! Have you lost your mind?! Focus! The defendant is the person on trial! You're his lawyer! Thank... thank you, Your Honor. No. (I know what he's gonna say, but I'll let him look smart.) Wh-What a completely foolish line of foolish thought from a thoroughly foolish fool! We were great together! We were Romeo and Juliet, Cleopatra and Mark Anthony! 
          </p>

          {menu}
        </div>
      )
    }

    return (
      <div>
        {header}
        {menu}

        <h1>
          Outside the content container!
        </h1>
        
        <div className={s.content_container}>
          {children()}
        </div>

        {bottom_meta}
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
