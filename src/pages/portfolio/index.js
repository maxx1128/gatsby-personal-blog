import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import chunk from 'lodash/chunk'

import s from './portfolio.module.scss'

class PortfolioIndex extends React.Component {
  render() {
    const project_data = get(this, 'props.data.allProjectsYaml.edges[0].node.projects');

    const projects = project_data.map((project, i) => (
      <a href={project.link} target="_blank" rel="noopener" className={s.project} key={i}>
        {<img className={s.projectImage} src="http://via.placeholder.com/400x400" />}
        <h4 className={s.projectHeader}>
          {project.name}
        </h4>
      </a>
    ));

    const grouped_projects = chunk(projects, 2).map((group) => (
      <div className={s.projectGroup}>
        {group}
      </div>
    ));

    return (
      <div className={s.wrapper}>
        <h1 className={s.title}>
          Portfolio Page!
        </h1>

        <div className={s.projectContainer}>
          {grouped_projects}
        </div>
      </div>
    )
  }
}

export default PortfolioIndex

export const portfolioQuery = graphql`
  query PortfolioQuery {
    allProjectsYaml {
      edges {
        node {
          projects {
            name
            date
            image
            description
            link
          }
        } 
      }
    }
  }
`
