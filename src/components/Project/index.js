import React from 'react';
import s from './project.module.scss'

const Project = ({ data, image }) => {

  return (
    <a href={data.link} target="_blank" rel="noopener" className={s.container}>
      <div className={s.image_container}>
        <img src={image} alt={`Image for my '${data.name}' project`} />
      </div>

      <div className={s.text}>
        <h4 className={s.header}>
          {data.name}
        </h4>

        <p className={s.descr}>
          {data.description}
        </p>
      </div>
    </a>
  )
}

export default Project;
