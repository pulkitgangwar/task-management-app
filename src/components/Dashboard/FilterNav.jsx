import React, { useState } from "react";

const FilterNav = ({ applyFilters, resetAllFilters }) => {
  const [searchFilter, setSearchFilter] = useState("");

  const handleClick = () => {
    if (!searchFilter) {
      return;
    }
    applyFilters({ search: searchFilter });
  };

  return (
    <div className="filternav">
      <div className="filternav__search">
        <input
          className="filternav__search__input"
          type="text"
          placeholder="Search"
          name="searchFilter"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          autoComplete="off"
        />
        <button
          onClick={handleClick}
          className="filternav__search__btn btn btn--secondary"
        >
          Search
        </button>
      </div>
      <div className="filternav__sort">
        <select className="filternav__sort__select">
          <option>Ascending</option>
          <option>Descending</option>
        </select>
        <button
          onClick={resetAllFilters}
          className="btn btn--danger btn--danger--small"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterNav;
