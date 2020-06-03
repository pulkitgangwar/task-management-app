import React from "react";

// importing Components
import SideNavigation from "./SideNavigation";
import Task from "./Task";

const TaskDashboard = ({ isNavOpen, tasks, count }) => {
  return (
    <div className="taskdashboard">
      <div
        className={`taskdashboard__sidenavigation ${
          isNavOpen ? "" : "taskdashboard__sidenavigation__navigation-off"
        }`}
      >
        <SideNavigation isNavOpen={isNavOpen} />
      </div>

      <div
        className={`taskdashboard__wrapper ${
          isNavOpen ? "" : "taskdashboard__wrapper__navigation-off"
        }`}
      >
        <div className="spacer"></div>
        <div className="taskdashboard__header">
          <h3 className="heading-tertiary heading-tertiary--small taskdashboard__task-count">
            Total Tasks : {count}
          </h3>
          <div className="taskdashboard__btn--wrapper">
            <button className="btn taskdashboard__btn">Add Task</button>
          </div>
        </div>

        <div className="taskdashboard__task">
          {tasks.length ? (
            tasks.map((task) => <Task task={task} key={task.id} />)
          ) : (
            <h1 className="taskdashboard__placeholder heading-secondary">
              Add a task to start
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;
