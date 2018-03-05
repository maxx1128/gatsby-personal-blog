import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import s from './resume.module.scss'

import ResumeItem from './../../components/ResumeItem'

class ResumeIndex extends React.Component {
  render() {
    const resume_data = get(this, 'props.data.allResumeYaml.edges[0].node.resume');
    const skills_data = get(this, 'props.data.allSkillsYaml.edges[0].node.skills');
    const activities_awards_data = get(this, 'props.data.allActivitiesAwardsYaml.edges[0].node.activities_awards');

    const resume = resume_data.map((resume, i) => (
        <ResumeItem
          key={i}
          data={resume}
        />
      )
    );

    return (
      <div className={s.wrapper}>
        <h1 className={s.title}>
          Resume Page!
        </h1>

        <div className={s.section}>
          <h4 className={s.section_title}>
            Experience
          </h4>
          <section className={s.section_content}>
            {resume}
          </section>
        </div>

        <div className={s.section}>
          <h4 className={s.section_title}>
            Skills
          </h4>
          <section className={s.section_content}>
            <p>
              {skills_data}
            </p>
          </section>
        </div>

        <div className={s.section}>
          <h4 className={s.section_title}>
            Education
          </h4>
          <section className={s.section_content}>
            <h6 className={s.edu_school}>
              Syracuse University, S.I. Newhouse School of Public Communications
            </h6>
            <p>
              B.S. - Newspaper and Online Journalism (May 2015) <br />
              Minor - Information and Technology (May 2015)
            </p>
          </section>
        </div>

        <div className={s.section}>
          <h4 className={s.section_title}>
            Activities <br />
            & Awards
          </h4>
          <section className={s.section_content}>
            <p>
              {activities_awards_data}
            </p>
          </section>
        </div>
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
    allSkillsYaml {
      edges {
        node {
          skills
        } 
      }
    }
    allActivitiesAwardsYaml {
      edges {
        node {
          activities_awards
        } 
      }
    }
  }
`
