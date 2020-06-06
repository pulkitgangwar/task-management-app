import React from "react";

import AddTaskForm from "./AddTaskForm";
import FloatingAnchor from "../FloatingCTA/FloatingAnchor";

const AddTask = () => {
  return (
    <div className="addtask">
      <FloatingAnchor title="Go Back" path="/" />
      <AddTaskForm />
    </div>
  );
};

export default AddTask;
