import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import { Link } from "react-router-dom";

// importing stylesheet
import "react-datepicker/dist/react-datepicker.css";

const Form = ({ addTask, error }) => {
  const [selectedDateAndTime, setSelectedDateAndTime] = useState(null);
  const [isoTime, setIsoTime] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("PENDING");
  const [label, setLabel] = useState("PERSONAL");
  const [priority, setPriority] = useState("LOW");

  const handleSubmit = async (e) => {
    e.preventDefault();
    addTask({
      title,
      description,
      status,
      label,
      priority,
      due_date: isoTime,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__heading heading-primary">Add Task</h1>

      <p className="error">{error && error}</p>

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
          value={title}
        />
      </div>
      <div className="form__div form__div--description">
        <label htmlFor="form__input--description" className="form__label">
          Description (optional)
        </label>
        <textarea
          type="text"
          className="form__input form__textarea"
          id="form__input--description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
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
          >
            <option value="LOW">Low</option>
            <option value="NORMAL">Normal</option>
            <option value="HIGH">High</option>
          </select>
        </div>
      </div>

      <div className="form__div form__div--date-picker">
        <label htmlFor="form__input--date-picker" className="form__label">
          Deadline for Task (optional)
        </label>

        <DatePicker
          selected={selectedDateAndTime}
          showTimeSelect
          dateFormat="Pp"
          onChange={(e) => {
            setIsoTime(e.toISOString());
            setSelectedDateAndTime(e);
          }}
          className="form__date-picker"
          minDate={new Date()}
          id="form__input--date-picker"
        />
      </div>

      <div className="form__btn--wrapper">
        <button className="form__btn btn">Add Task</button>
      </div>
    </form>
  );
};

export default Form;
