import React from 'react';
import s from './ResumeItem.module.scss'

const ResumeItem = ({ data }) => {
  const stack_list = data.stack.map(item =>{
    return (
      <li>
        {item}
      </li>
    );
  });

  return (
    <article className={s.container}>
      <div className={s.name}>
        <h3 className={s.title}>
          {data.company}
        </h3>

        <h6 className={s.role}>
          <strong>{data.title}</strong>
        </h6>
      </div>
      
      <div className={s.description}>
        <p>
          {data.description}
        </p>
      </div>

      <div className={s.meta}>
        <ul className={s.stack}>
          {stack_list}
        </ul>

        <div className={s.time}>
          <small>
            {data.start} - {data.end}
          </small>
        </div>
      </div>
    </article>
  )
}

export default ResumeItem;
