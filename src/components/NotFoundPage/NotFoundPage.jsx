import React from "react";
import { Link } from "react-router-dom";

/**
 *  Not Found Page Component
 */
const NotFoundPage = () => {
  return (
    <div className="notfound">
      <h1 className="notfound__title heading-secondary">
        404: Not Found
        <p className="notfound__description">
          The requested resource could not be found
        </p>
      </h1>

      <div className="notfound__link btn btn--danger">
        <Link to="/" className="notfound__link__link">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
