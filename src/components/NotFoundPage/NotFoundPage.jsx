import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="notfound">
      <h1 className="notfound__title heading-secondary">404: Page Not Found</h1>
      <div className="notfound__link btn btn--danger">
        <Link to="/" className="notfound__link__link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
