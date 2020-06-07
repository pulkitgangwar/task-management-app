import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

/**
 *  Search and Sort Filters Component
 */
const FilterNav = ({
  filters,
  setFilters,
  resetAllFilters,
  toggleFilterSidebar,
}) => {
  const [searchFilter, setSearchFilter] = useState("");

  const handleClick = () => {
    if (!searchFilter) {
      return;
    }
    setFilters({ ...filters, offset: 0, search: searchFilter });
  };

  const handleSelectValueChange = (e) => {
    setFilters({ ...filters, offset: 0, sortKey: e.target.value });
  };

  return (
    <div className="filternav">
      <div className="filternav__ham-and-search">
        <div
          className="filternav__hamburger-toggle"
          onClick={toggleFilterSidebar}
        >
          <GiHamburgerMenu size="4rem" className="filternav__hamburger-toggle__ham" />
        </div>
        <div className="filternav__search">
          <input
            className="filternav__search__input"
            type="text"
            placeholder="Search"
            name="searchFilter"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          <button
            onClick={handleClick}
            className="filternav__search__btn btn btn--secondary"
          >
            Search
          </button>
        </div>
      </div>
      <div className="filternav__sort">
        <select
          className="select filternav__sort__select"
          value={filters.sortKey}
          onChange={handleSelectValueChange}
        >
          <option value="CREATED_AT__ASC">Created Ascending</option>
          <option value="CREATED_AT__DESC">Created Descending</option>
          <option value="UPDATED_AT__ASC">Updated Ascending</option>
          <option value="UPDATED_AT__DESC">Updated Descending</option>
          <option value="TITLE__ASC">Title Ascending (A-Z)</option>
          <option value="TITLE__DESC">Title Descending (Z-A)</option>
          <option value="DUE_DATE__ASC">Due Date Ascending</option>
          <option value="DUE_DATE__DESC">Due Date Descending</option>
        </select>
        <div className="filternav__sort__btn--wrapper">
          <button
            onClick={resetAllFilters}
            className="btn btn--danger btn--danger--small filternav__sort__btn"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterNav;
