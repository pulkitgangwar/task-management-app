import React, { useEffect, useState } from "react";

// importing TaskClient
import { taskClient } from "../../Utils/TaskClient";

const SingleTask = ({ match }) => {
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

  if (!loading && error) {
    return <h1>Sorry Task Not Found</h1>;
  }

  return <div>{JSON.stringify(task, null, 2)} </div>;
};

export default SingleTask;
