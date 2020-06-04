import React, { useState, useEffect } from "react";

// importing task Client
import { taskClient } from "../../apiClients/TaskClient";

// importing Components
import EditTaskForm from "./EditTaskForm";

const EditTask = ({ match, history }) => {
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

  const updateTaskById = async (id, taskObj) => {
    try {
      setLoading(true);
      await taskClient.updateTask(id, { ...taskObj });
      setLoading(false);
      setError(null);
      history.push(`/tasks/${task.id}`);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  };

  return (
    <div className="edittask">
      <EditTaskForm task={task} updateTaskById={updateTaskById} error={error} />
    </div>
  );
};

export default EditTask;
