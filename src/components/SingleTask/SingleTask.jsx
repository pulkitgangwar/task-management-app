import React from "react";
import { Redirect, Link } from "react-router-dom";
import { formatDistance, format } from "date-fns";
import draftToHtml from "draftjs-to-html";
import swal from "@sweetalert/with-react";
import useFetch from "../../hooks/useFetch";
import { deleteTaskById } from "../../api/task";
import Loading from "../Loading/Loading";

/**
 *  Single Task Page Component
 */
const SingleTask = ({ match, history }) => {
  const id = match.params.id;
  const [data, isLoading, isError] = useFetch(`/tasks/${id}`);

  /**
   *  Redirect to 404 page on error
   */
  if (isError) {
    return <Redirect to="/404" />;
  }

  /**
   * Deletes a task after user confirmation
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

  if (isLoading) {
    return <Loading />;
  }

  const {
    title,
    description,
    created_at,
    updated_at,
    due_date,
    label,
    priority,
    status,
  } = data;

  return (
    <div className="singletask">
      <div className="singletask__cta-btns singletask__cta-btns--1">
        <Link className="btn singletask__cta-btns__edit" to={`/edit/${id}`}>
          Edit Task
        </Link>
        <button
          className="btn btn--danger singletask__cta-btns__delete"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>

      <div className="singletask__task">
        <div className="singletask__task__metadata">
          <div className="singletask__task__metadata__status">
            {status.toLowerCase()}
          </div>
          <div className="singletask__task__metadata__label">
            {label.toLowerCase()}
          </div>
          <div
            className={`singletask__task__metadata__priority singletask__task__metadata__priority--${priority}`}
          >
            {priority.toLowerCase()}
          </div>
        </div>
        <div className="singletask__task__title__and__desc">
          <div className="singletask__task__title__and__desc__title">
            <h1 className="singletask__task__title__and__desc__title--title">
              {title}
            </h1>
          </div>
          <div className="singletask__task__title__and__desc__description">
            {!JSON.parse(description).blocks[0].text ? (
              <p className="singletask__task__title__and__desc__description--placeholder">
                Add a description
              </p>
            ) : (
              <p
                className="singletask__task__title__and__desc__description--description"
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(JSON.parse(description)),
                }}
              ></p>
            )}
          </div>
        </div>
        <div className="singletask__task__date">
          <div className="singletask__task__date__due-date">
            <p className="singletask__task__date__due-date__placeholder">
              Due By
            </p>
            <h3 className="singletask__task__date__due-date__value">
              {due_date
                ? `${formatDistance(new Date(due_date), new Date(), {
                    addSuffix: true,
                  })} (${format(new Date(due_date), "dd/MM/yyyy HH:mm:ss a")})`
                : "No Deadline"}
            </h3>
          </div>
          <div className="singletask__task__date__created-at">
            <p className="singletask__task__date__created-at__placeholder">
              Added
            </p>
            <h3 className="singletask__task__date__created-at__value">
              {format(new Date(created_at), "dd/MM/yyyy HH:mm:ss a")}
            </h3>
          </div>
          <div className="singletask__task__date__updated-at">
            <p className="singletask__task__date__updated-at__placeholder">
              Updated
            </p>
            <h3 className="singletask__task__date__updated-at__value">
              {format(new Date(updated_at), "dd/MM/yyyy HH:mm:ss a")}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
