import React from "react";
import { Redirect } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import EditTaskForm from "./EditTaskForm";
import FloatingAnchor from "../FloatingCTA/FloatingAnchor";
import Loading from "../Loading/Loading";

const EditTask = ({ match }) => {
  const id = match.params.id;
  const [task, isLoading, isError] = useFetch(`/tasks/${id}`);

  if (isError) {
    return <Redirect to="/404" />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="edittask">
      <FloatingAnchor path={`/tasks/${id}`} title="Go back" />
      <EditTaskForm task={task} />
    </div>
  );
};

export default EditTask;
