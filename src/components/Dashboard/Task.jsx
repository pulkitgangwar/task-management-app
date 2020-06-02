import React from "react";

const Task = () => {
  return (
    <div className="task">
      <div className="task__title-and-priority">
        <h3 className="heading-tertiary task__title-and-priority__title">
          Lorem ipsum
        </h3>
        <div className="task__title-and-priority__priority">
          Priority for stars
        </div>
      </div>
      <div className="task__status-date-and-label-icon">
        <p className="paragraph-secondary paragraph-secondary--bold task__status-date-and-label-icon__status">
          Status
        </p>
        <p className="paragraph-secondary paragraph-secondary--bold task__status-date-and-label-icon__date">
          Due Date
        </p>
        <div className="task__status-date-and-label-icon__label-icon">icon</div>
      </div>
    </div>
  );
};

export default Task;
