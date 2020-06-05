import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = ({ description, path, linkTitle }) => {
  if (path) {
    return (
      <div className="notfound">
        <h1 className="notfound__title heading-secondary">{description}</h1>
        <div className="notfound__link btn btn--danger">
          <Link to={path} className="notfound__link__link">{linkTitle}</Link>
        </div>
      </div>
    );
  }
  return <div>This is the Not Found Component</div>;
};

export default NotFoundPage;
