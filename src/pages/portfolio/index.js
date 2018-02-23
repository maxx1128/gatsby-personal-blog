import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

class PortfolioIndex extends React.Component {
  render() {
    const project_data = get(this, 'props.data.allProjectsYaml.edges[0].node.projects');

    const projects = project_data.map((project, i) => (
        <div key={i}>
          <li >
            <a href={project.link} target="_blank" rel="noopener">
              {project.name}
            </a>
          </li>
          <img src={`./${project.image}`} />
        </div>
      )
    );

    return (
      <div>
        <p>
          Portfolio Page!
        </p>

        <ul>
          {projects}
        </ul>
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
