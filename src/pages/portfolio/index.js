import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import chunk from 'lodash/chunk'

import s from './portfolio.module.scss'
import twoRow from './../../layouts/twoRows.module.scss'

import Project from './../../components/Project'

class PortfolioIndex extends React.Component {
  render() {
    const project_data = get(this, 'props.data.allProjectsYaml.edges[0].node.projects');

    const projects = project_data.map((project, i) => (
      <Project
        key={i}
        data={project}
      />
    ));

    const grouped_projects = chunk(projects, 2).map((group) => (
      <div className={twoRow.wrapper}>
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
