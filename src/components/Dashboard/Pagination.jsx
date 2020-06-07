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
    <div className="pagination">
      <button
        className="btn pagination__prev"
        disabled={!hasPrevPage}
        onClick={() => goToPrevPage()}
      >
        Previous
      </button>
      <button
        className="btn pagination__next"
        disabled={!hasNextPage}
        onClick={() => goToNextPage()}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
