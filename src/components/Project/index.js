import React from 'react';
import s from './project.module.scss'

const Project = ({ data }) => {
  
  const image = "http://via.placeholder.com/400x400";

  return (
    <a href={data.link} target="_blank" rel="noopener" className={s.container}>
      {<img className={s.image} src={image} />}
      <h4 className={s.header}>
        {data.name}
      </h4>
    </a>
  )
}

export default Project;
