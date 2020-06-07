import React from "react";
import { Link } from "react-router-dom";

/**
 *  Floating Anchor Component
 */
const FloatingAnchor = ({ path, title }) => {
  return (
    <div className="floatinganchor">
      <Link to={path}>{title}</Link>
    </div>
  );
};

export default FloatingAnchor;
