import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth.context";
import { login } from "../../api/auth";

/**
 *  Login Form Component
 */
const LoginForm = () => {
  const { onLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   *  Handles Login Form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const accessToken = await login(email, password);
      onLogin(accessToken);
    } catch (error) {
      setLoading(false);
      if (!error.response) {
        setError(error.message);
      } else if (error.response.status === 401) {
        setError("Incorrect email or password");
      } else {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} data-testid="form">
      <h1 className="form__heading heading-primary">Login</h1>

      {error && (
        <p className="error" data-testid="error">
          {error}
        </p>
      )}
      <div className="form__div form__div--email">
        <label htmlFor="form__input--email" className="form__label">
          Email
        </label>
        <input
          data-testid="form__input--email"
          type="email"
          className="form__input"
          id="form__input--email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form__div form__div--password">
        <label htmlFor="form__input--password" className="form__label">
          Password
        </label>
        <input
          data-testid="form__input--password"
          type="password"
          className="form__input"
          id="form__input--password"
          name="password"
          minLength={8}
          maxLength={20}
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form__btn--wrapper">
        <button
          disabled={loading}
          data-testid="form__btn--submit"
          className="form__btn btn"
        >
          {loading ? "Loading ..." : "Login"}
        </button>
      </div>
      <p className="form__extra">
        Don't have a account ? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
