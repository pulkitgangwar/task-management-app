import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// importing Components
import AddTaskForm from "./AddTaskForm";

// importing Task Client
import { taskClient } from "../../Utils/TaskClient";

const AddTask = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { push } = useHistory();
  const addTask = async ({
    title,
    description,
    status,
    label,
    priority,
    due_date,
  }) => {
    try {
      setLoading(true);
      await taskClient.addTask({
        title,
        description,
        status,
        label,
        priority,
        due_date,
      });

      setLoading(false);
      setError(null);
      push("/");
    } catch (err) {
      setLoading(false);
      setError(err);
      console.log(err);
    }
  };

  if (loading) {
    return <h1>Loading ....</h1>;
  }

  return (
    <div className="addtask">
      <AddTaskForm addTask={addTask} error={error} />
    </div>
  );
};

export default AddTask;
