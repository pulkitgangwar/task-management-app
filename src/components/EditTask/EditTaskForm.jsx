import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { Link } from "react-router-dom";
import { updateTaskById } from "../../api/task";

const EditTaskForm = ({ task }) => {
  const [selectedDateAndTime, setSelectedDateAndTime] = useState(
    task.due_date ? new Date(task.due_date) : null
  );
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(
    EditorState.createWithContent(convertFromRaw(JSON.parse(task.description)))
  );
  const [status, setStatus] = useState(task.status);
  const [label, setLabel] = useState(task.label);
  const [priority, setPriority] = useState(task.priority);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateTaskById(task.id, {
        title,
        description: JSON.stringify(
          convertToRaw(description.getCurrentContent())
        ),
        status,
        label,
        priority,
        due_date: selectedDateAndTime
          ? new Date(selectedDateAndTime).toISOString()
          : null,
      });
      setLoading(false);
      setError(null);
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__heading heading-primary">Update Task</h1>
      {success && (
        <p className="success">
          Task Updated Successfully ! <Link to="/">Go to All Tasks</Link>
        </p>
      )}
      {error && <p className="error">{error}</p>}

      <div className="form__div form__div--title">
        <label htmlFor="form__input--title" className="form__label">
          Title
        </label>
        <input
          type="name"
          className="form__input"
          id="form__input--title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          maxLength={32}
          required
          value={title}
        />
      </div>
      <div className="form__container">
        <div className="form__div form__div--status">
          <label htmlFor="form__input--status" className="form__label">
            Status
          </label>
          <select
            id="form__input--status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="PENDING">Pending</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>
        <div className="form__div form__div--label">
          <label htmlFor="form__input--label" className="form__label">
            Label
          </label>
          <select
            id="form__input--label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            required
          >
            <option value="PERSONAL">Personal</option>
            <option value="WORK">Work</option>
            <option value="SHOPPING">Shopping</option>
            <option value="TRAVEL">Travel</option>
            <option value="HOME">Home</option>
            <option value="OFFICE">Office</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
        <div className="form__div form__div--priority">
          <label htmlFor="form__input--priority" className="form__label">
            Priority
          </label>
          <select
            id="form__input--priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="LOW">Low</option>
            <option value="NORMAL">Normal</option>
            <option value="HIGH">High</option>
          </select>
        </div>
      </div>
      <div className="form__div form__div--description">
        <label htmlFor="form__input--description" className="form__label">
          Description
        </label>
        <Editor
          id="form__input--description"
          name="description"
          editorState={description}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "list",
              "textAlign",
              "link",
              "embedded",
              "emoji",
              "history",
            ],
          }}
          wrapperClassName="form__input form__textarea"
          toolbarClassName="form__input form__toolbar"
          editorClassName="form__input form__editor"
          onEditorStateChange={(editorState) => setDescription(editorState)}
        />
      </div>
      <div className="form__div form__div--date-picker">
        <label htmlFor="form__input--date-picker" className="form__label">
          Deadline{" "}
          <button
            className="btn btn--danger btn--danger--small"
            type="button"
            onClick={(e) => setSelectedDateAndTime(null)}
          >
            Clear
          </button>
        </label>
        <DatePicker
          id="form__input--date-picker"
          selected={selectedDateAndTime}
          showTimeSelect
          dateFormat="Pp"
          onChange={(e) => {
            setSelectedDateAndTime(e);
          }}
          className="form__date-picker"
          minDate={new Date()}
        />
      </div>
      <div className="form__btn--wrapper">
        <button disabled={loading} className="form__btn btn">
          {loading ? "Processing..." : "Update Task"}
        </button>
      </div>
    </form>
  );
};

export default EditTaskForm;
