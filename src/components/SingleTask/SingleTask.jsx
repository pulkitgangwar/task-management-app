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
      <div className="singletask__wrapper">
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
        <div className="singletask__title">
          <h3 className="heading-tertiary singletask__title__title ">
            {title}
          </h3>
        </div>
        <div className="singletask__description">
          <p
            className="paragraph-primary singletask__description__description"
            dangerouslySetInnerHTML={{
              __html: draftToHtml(JSON.parse(description)),
            }}
          ></p>
        </div>
        <div className="singletask__task-info">
          <div className="singletask__task-info__div">
            <p className="singletask__task-info__status--title">Status</p>
            <h3 className="singletask__task-info__status--status singletask__value">
              {status}
            </h3>
          </div>
          <div className="singletask__task-info__div">
            <p className="singletask__task-info__label--title">Label</p>
            <h3 className="singletask__task-info__label--label singletask__value">
              {label}
            </h3>
          </div>
          <div className="singletask__task-info__div">
            <p className="singletask__task-info__priority--title">Priority</p>
            <h3 className="singletask__task-info__priority--priority singletask__value">
              {priority}
            </h3>
          </div>
        </div>
        <div className="singletask__time">
          <div className="singletask__time__due_date">
            <p className="singletask__time__due_date__placeholder">Due By</p>
            <h3 className="singletask__time__due_date__due_date singletask__value">
              {due_date
                ? `${formatDistance(new Date(due_date), new Date(), {
                    addSuffix: true,
                  })} (${format(new Date(due_date), "dd/MM/yyyy HH:mm:ss a")})`
                : "No Deadline"}
            </h3>
          </div>
          <div className="singletask__time__created-at">
            <p className="singletask__time__created-at__placeholder">Added</p>
            <h3 className="singletask__time__created-at__created-at singletask__value">
              {format(new Date(created_at), "dd/MM/yyyy HH:mm:ss a")}
            </h3>
          </div>
          <div className="singletask__time__created-at">
            <p className="singletask__time__created-at__placeholder">Updated</p>
            <h3 className="singletask__time__created-at__created-at singletask__value">
              {format(new Date(updated_at), "dd/MM/yyyy HH:mm:ss a")}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
