import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// importing Auth Consumer
import { Auth } from "../../context/Auth.context";

const Form = () => {
  const { login, loading, error } = useContext(Auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__heading heading-primary">Login</h1>

      <p>{error && error}</p>
      <div className="form__div form__div--email">
        <label htmlFor="form__input--email" className="form__label">
          Email
        </label>
        <input
          type="email"
          className="form__input"
          id="form__input--email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form__div form__div--password">
        <label htmlFor="form__input--password" className="form__label">
          Password
        </label>
        <input
          type="password"
          className="form__input"
          id="form__input--password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form__btn--wrapper">
        <button className="form__btn btn">
          {loading ? "Loading ..." : "Login"}
        </button>
      </div>
      <p className="form__extra">
        Don't have a account ? <Link to="/register">register</Link>
      </p>
    </form>
  );
};

export default Form;
