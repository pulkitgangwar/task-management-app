import React from "react";
import Task from "./Task";

const TaskDashboard = ({ tasks, searchFilterValue }) => {
  return (
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
  );
};

export default TaskDashboard;
