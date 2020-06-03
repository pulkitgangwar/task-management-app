import React from "react";

const Task = ({task}) => {
  const {id,title,status,due_date,label} = task;

  return (
    <div className="task" id={id}>
      <div className="task__title-and-priority">
        <h3 className="heading-tertiary task__title-and-priority__title">
          {title}
        </h3>
        <div className="task__title-and-priority__priority">
          Priority for stars
        </div>
      </div>
      <div className="task__status-date-and-label-icon">
        <p className="paragraph-secondary paragraph-secondary--bold task__status-date-and-label-icon__status">
          {status.toLowerCase()}
        </p>
        <p className="paragraph-secondary paragraph-secondary--bold task__status-date-and-label-icon__date">
          {due_date && due_date}
        </p>
        <div className="task__status-date-and-label-icon__label-icon">
          {label}
        </div>
      </div>
    </div>
  );
};

export default Task;
