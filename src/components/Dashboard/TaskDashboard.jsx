import React from "react";

// importing Components
import SideNavigation from "./SideNavigation";
import Task from "./Task";

const TaskDashboard = ({ isNavOpen }) => {
  return (
    <div className="taskdashboard">
      <div className="taskdashboard__sidenavigation">
        <SideNavigation isNavOpen={isNavOpen} />
      </div>
      <div className="taskdashboard__header">
        <h3 className="heading-tertiary heading-tertiary--small taskdashboard__task-count">
          Total Tasks : 2
        </h3>
        <div className="taskdashboard__btn--wrapper">
          <button className="btn taskdashboard__btn">Add Task</button>
        </div>
      </div>

      <div className="taskdashboard__task">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default TaskDashboard;
