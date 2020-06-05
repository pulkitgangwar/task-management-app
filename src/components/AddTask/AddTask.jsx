import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// importing Components
import AddTaskForm from "./AddTaskForm";
import FloatingAnchor from "../FloatingCTA/FloatingAnchor";
import Loading from "../Loading/Loading";

// importing Task Client
import { taskClient } from "../../apiClients/TaskClient";

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
    return <Loading />;
  }

  return (
    <div className="addtask">
      <FloatingAnchor title="Go Back" path="/" />
      <AddTaskForm addTask={addTask} error={error} />
    </div>
  );
};

export default AddTask;
