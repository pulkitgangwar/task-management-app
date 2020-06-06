import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "@sweetalert/with-react";
import { register } from "../../api/auth";

const RegisterForm = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await register(name, email, password);
      setLoading(false);
      setError(null);
      swal({
        title: "Account Created!",
        text: "Your account has been created successfully. You can login now",
        icon: "success",
        button: "Go to Login",
      }).then(() => history.push("/login"));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (!error.response) {
        setError(error.message);
      }
      Array.isArray(error.response.data.message)
        ? setError(error.response.data.message.join("\n"))
        : setError(error.response.data.message);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__heading heading-primary">Register</h1>

      {error && <p className="error">{error}</p>}

      <div className="form__div form__div--name">
        <label htmlFor="form__input--name" className="form__label">
          Name
        </label>
        <input
          type="text"
          className="form__input"
          id="form__input--name"
          name="name"
          maxLength={32}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          required
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
          minLength={8}
          maxLength={20}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form__btn--wrapper">
        <button disabled={loading} className="form__btn btn">
          {loading ? "Loading ..." : "Register"}
        </button>
      </div>
      <p className="form__extra">
        Already a user ? <Link to="/">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
