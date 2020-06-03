import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// importing Auth Context Consumer
import { Auth } from "../../context/Auth.context";

const Form = () => {
  const auth = useContext(Auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    auth.register(name, email, password);

    // console.log(name, email, password);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__heading heading-primary">Register</h1>

      <div className="form__div form__div--name">
        <label htmlFor="form__input--name" className="form__label">
          Name
        </label>
        <input
          type="text"
          className="form__input"
          id="form__input--name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
      </div>
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
          autoComplete="off"
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
          autoComplete="off"
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
