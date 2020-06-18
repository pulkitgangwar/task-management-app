import React from "react";
import { Redirect, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import swal from "@sweetalert/with-react";
import { deleteTaskById } from "../../api/task";
import EditTaskForm from "./EditTaskForm";
import Loading from "../Loading/Loading";

/**
 *  Edit Task Page Component
 */
const EditTask = ({ history, match }) => {
  const id = match.params.id;
  const [task, isLoading, isError] = useFetch(`/tasks/${id}`);

  /**
   *  Deletes Task after user confirmation
   */
  const handleDelete = async () => {
    const userOption = await swal({
      title: "Delete Task",
      text: "Are you sure, you want to delete this task ?",
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          closeModal: true,
        },
        confirm: {
          text: "Yes",
          value: true,
          closeModal: true,
        },
      },
    });
    if (!userOption) return;
    try {
      const response = await deleteTaskById(id);
      await swal({
        title: "Task deleted successfully!",
        text: response?.message,
        icon: "success",
      });
      history.push("/");
    } catch (e) {
      swal({
        title: "Task could not be deleted!",
        text: e?.response?.message,
        icon: "error",
      });
    }
  };

  /**
   *  Redirect to 404 page on error
   */
  if (isError) {
    return <Redirect to="/404" />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="edittask">
      
      <div className="singletask__cta-btns">
        <Link className="btn singletask__cta-btns__edit" to={`/tasks/${id}`}>
          View Task
        </Link>
        <button
          className="btn btn--danger singletask__cta-btns__delete"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
      <EditTaskForm task={task} />
    </div>
  );
};

export default EditTask;
