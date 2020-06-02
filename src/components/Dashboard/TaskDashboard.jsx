import React from "react";

// importing Components
import SideNavigation from "./SideNavigation";

const TaskDashboard = ({ isNavOpen }) => {
  return (
    <div className="taskdashboard">
      <div className="taskdashboard__sidenavigation">
        <SideNavigation isNavOpen={isNavOpen} />
      </div>
    </div>
  );
};

export default TaskDashboard;
