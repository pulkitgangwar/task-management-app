import React from "react";

import AddTaskForm from "./AddTaskForm";
import FloatingAnchor from "../FloatingCTA/FloatingAnchor";

/**
 *  Add Task Page Component
 */
const AddTask = () => {
  return (
    <div className="addtask">
      <FloatingAnchor title="Go Back" path="/" />
      <AddTaskForm />
    </div>
  );
};

export default AddTask;
