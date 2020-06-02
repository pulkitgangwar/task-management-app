import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className="form">
      <h1 className="form__heading heading-primary">Register</h1>

      <div className="form__div form__div--name">
        <label htmlFor="form__input--name" className="form__label">
          Name
        </label>
        <input type="name" className="form__input" id="form__input--name" />
      </div>
      <div className="form__div form__div--email">
        <label htmlFor="form__input--email" className="form__label">
          Email
        </label>
        <input type="email" className="form__input" id="form__input--email" />
      </div>
      <div className="form__div form__div--password">
        <label htmlFor="form__input--password" className="form__label">
          Password
        </label>
        <input
          type="password"
          className="form__input"
          id="form__input--password"
        />
      </div>

      <div className="form__btn--wrapper">
        <button className="form__btn btn">Register</button>
      </div>
      <p className="form__extra">
        Already a member ? <Link to="/">login</Link>
      </p>
    </form>
  );
};

export default Form;
