import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import ResumeItem from './../../components/ResumeItem'

class ResumeIndex extends React.Component {
  render() {
    const resume_data = get(this, 'props.data.allResumeYaml.edges[0].node.resume');

    const resume = resume_data.map((resume, i) => (
        <ResumeItem
          key={i}
          data={resume}
        />
      )
    );

    return (
      <div>
        <h1>
          Resume Page!
        </h1>

        <section>
          {resume}
        </section>
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
