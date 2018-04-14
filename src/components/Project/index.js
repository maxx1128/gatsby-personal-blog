import React from 'react';
import s from './project.module.scss'

const Project = ({ data, image }) => {

  return (
    <a href={data.link} target="_blank" rel="noopener" className={s.container}>
      {<img className={s.image} src={image} alt={`Image for my '${data.name}' project`} />}
      <h4 className={s.header}>
        {data.name}
      </h4>
    </a>
  )
}

export default Project;
