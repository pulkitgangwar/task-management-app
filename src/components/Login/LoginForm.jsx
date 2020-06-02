import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className="form">
      <h1 className="form__heading heading-primary">Login</h1>
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
        <button className="form__btn btn">Submit</button>
      </div>
      <p className="form__extra">
        Don't have a account ? <Link to="/register">register</Link>
      </p>
    </form>
  );
};

export default Form;
