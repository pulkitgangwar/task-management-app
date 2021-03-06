import React from "react";
import { useHistory } from "react-router-dom";
import { formatDistance } from "date-fns";

/**
 *  Single Task Row Component
 */
const Task = ({ task }) => {
  const { push } = useHistory();
  const { id, title, status, due_date, label, priority } = task;

  return (
    <div className="task" id={id} onClick={() => push(`/tasks/${id}`)}>
      <div className="task__title-and-priority">
        <h3 className="heading-tertiary task__title-and-priority__title">
          {title}
        </h3>
        <div className="task__title-and-priority__priority">
          <span
            className={`task__title-and-priority__priority__color task__title-and-priority__priority__color--${priority}`}
          />
          <p className="task__title-and-priority__priority__label">
            {priority.toLowerCase()} priority
          </p>
        </div>
      </div>
      <div className="task__status-date-and-label-icon">
        <p className="paragraph-secondary paragraph-secondary--bold task__status-date-and-label-icon__status">
          {status.toLowerCase()}
        </p>
        <p className="paragraph-secondary paragraph-secondary--bold task__status-date-and-label-icon__date">
          {due_date
            ? formatDistance(new Date(due_date), new Date(), {
                addSuffix: true,
              })
            : ""}
        </p>
        <div className="task__status-date-and-label-icon__label-icon">
          {label.toLowerCase()}
        </div>
      </div>
    </div>
  );
};

export default Task;
