import React, { useEffect, useState } from "react";

// importing TaskClient
import { taskClient } from "../../Utils/TaskClient";

const SingleTask = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [task, setTask] = useState(null);

  useEffect(() => {
    const getTaskById = async () => {
      try {
        const taskObj = await taskClient.getTaskById(match.params.id);

        console.log(taskObj);
        setTask(taskObj);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err);
        setLoading(false);

        console.log(err);
      }
    };
    getTaskById();
  }, [match.params.id]);

  if (loading) {
    return <h1>Loading ....</h1>;
  }

  if (!loading && error) {
    return <h1>Sorry Task Not Found</h1>;
  }

  const {
    title,
    description,
    created_at,
    due_date,
    label,
    priority,
    status,
  } = task;

  return (
    <div className="singletask">
      <div className="singletask__wrapper">
        <div className="singletask__title">
          <p className="singletask__title__placeholder">Title</p>
          <h3 className="heading-tertiary singletask__title__title ">
            {title}
          </h3>
        </div>
        <div className="singletask__description">
          <p className="singletask__description__placeholder">Description</p>
          <p className="paragraph-primary singletask__description__description">
            {description ? description : "Add a Description to your task"}
          </p>
        </div>
        <div className="singletask__task-info">
          <div className="singletask__task-info__div">
            <p className="singletask__task-info__status--title">Status</p>
            <h3 className="singletask__task-info__status--status singletask__value">
              {status}
            </h3>
          </div>
          <div className="singletask__task-info__div">
            <p className="singletask__task-info__label--title">Label</p>
            <h3 className="singletask__task-info__label--label singletask__value">
              {label}
            </h3>
          </div>
          <div className="singletask__task-info__div">
            <p className="singletask__task-info__priority--title">Priority</p>
            <h3 className="singletask__task-info__priority--priority singletask__value">
              {priority}
            </h3>
          </div>
        </div>
        <div className="singletask__time">
          <div className="singletask__time__due_date">
            <p className="singletask__time__due_date__placeholder">
              Due date and time
            </p>
            <h3 className="singletask__time__due_date__due_date singletask__value">
              {due_date ? due_date : "Add due date and time"}
            </h3>
          </div>
          <div className="singletask__time__created-at">
            <p className="singletask__time__created-at__placeholder">
              Created at
            </p>
            <h3 className="singletask__time__created-at__created-at singletask__value">
              {created_at}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
