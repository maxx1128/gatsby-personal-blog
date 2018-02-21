import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

class ResumeIndex extends React.Component {
  render() {
    const resume_data = get(this, 'props.data.allResumeYaml.edges[0].node.resume');

    const resume = resume_data.map((resume, i) => (
        <li key={i}>
          {resume.title} at <strong>{resume.company}</strong>
        </li>
      )
    );

    return (
      <div>
        <p>
          Resume Page!
        </p>

        <ul>
          {resume}
        </ul>
      </div>
    )
  }
}

export default ResumeIndex

export const resumeQuery = graphql`
  query ResumeQuery {
    allResumeYaml {
      edges {
        node {
          resume {
            title
            stack
            company
            icon
            start
            end
            description
          }
        } 
      }
    }
  }
`
