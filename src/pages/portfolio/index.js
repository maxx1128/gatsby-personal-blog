import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import chunk from 'lodash/chunk'

import s from './portfolio.module.scss'

import Project from './../../components/Project'

import ace_attorney_lorem_ipsum from "./images/ace_attorney_lorem_ipsum.png";
import ace_attorney_staff_grid from "./images/ace_attorney_staff_grid.png";
import commute_calculator_vue from "./images/commute_calculator_vue.png";
import eeveelutions from "./images/eeveelutions.png";
import emberdex from "./images/emberdex.png";
import guess_the_number from "./images/guess_the_number.png";
import housing_matters from "./images/housing_matters.png";
import internation from "./images/internation.png";
import longform_parallaz_effect from "./images/longform_parallax_effect.png";
import monty_hall_react from "./images/monty_hall_react.png";
import monty_hall_vue from "./images/monty_hall_vue.png";
import pure_css_hypnotic_effect from "./images/pure_css_hypnotic_spiral.png";
import puzzle_pieces from "./images/puzzle_pieces.png";
import seeclickfix from "./images/seeclickfix.png";

const images = {
  'ace_attorney_lorem_ipsum': ace_attorney_lorem_ipsum,
  'ace_attorney_staff_grid': ace_attorney_staff_grid,
  'commute_calculator_vue': commute_calculator_vue,
  'eeveelutions': eeveelutions,
  'emberdex': emberdex,
  'guess_the_number': guess_the_number,
  'housing_matters': housing_matters,
  'internation': internation,
  'longform_parallax_effect': longform_parallaz_effect,
  'monty_hall_react': monty_hall_react,
  'monty_hall_vue': monty_hall_vue,
  'pure_css_hypnotic_spiral': pure_css_hypnotic_effect,
  'puzzle_pieces': puzzle_pieces,
  'seeclickfix': seeclickfix
};

class PortfolioIndex extends React.Component {
  render() {
    const project_data = get(this, 'props.data.allProjectsYaml.edges[0].node.projects');

    const projects = project_data.map((project, i) => (
      <Project
        key={i}
        data={project}
        image={images[project.image]}
      />
    ));

    const grouped_projects = chunk(projects, 2).map((group, i) => (
      <div key={i} className={s.two_row}>
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
