import React from "react";

/**
 *  Pagination Component
 */
const Pagination = ({
  hasPrevPage,
  hasNextPage,
  goToPrevPage,
  goToNextPage,
}) => {
  return (
    <div>
      <button disabled={!hasPrevPage} onClick={() => goToPrevPage()}>
        Previous
      </button>
      <button disabled={!hasNextPage} onClick={() => goToNextPage()}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
