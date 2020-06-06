import React from "react";
import { useHistory } from "react-router-dom";
import Task from "./Task";

const TaskDashboard = ({
  isFilterSidebarOpen,
  tasks,
  count,
  searchFilterValue,
}) => {
  const { push } = useHistory();

  return (
    <div
      className={`taskdashboard__wrapper ${
        isFilterSidebarOpen ? "" : "taskdashboard__wrapper__navigation-off"
      }`}
    >
      <div className="spacer"></div>
      <div className="taskdashboard__header">
        <h3 className="heading-tertiary heading-tertiary--small taskdashboard__task-count">
          Total Tasks : {count}
        </h3>
        <div className="taskdashboard__btn--wrapper">
          <button
            className="btn taskdashboard__btn"
            onClick={() => push("/new")}
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="taskdashboard__task">
        {tasks.length ? (
          tasks.map((task) => <Task task={task} key={task.id} />)
        ) : searchFilterValue ? (
          <h1 className="taskdashboard__placeholder heading-secondary">
            No Task Found
          </h1>
        ) : (
          <h1 className="taskdashboard__placeholder heading-secondary">
            Add a task to start
          </h1>
        )}
      </div>
    </div>
  );
};

export default TaskDashboard;
