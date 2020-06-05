import React, { useState } from "react";

const FilterNav = ({ applyFilters, resetAllFilters }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const handleClick = () => {
    if (!searchFilter) {
      return;
    }
    applyFilters({ search: searchFilter });
  };

  const handleSelectValueChange = (e) => {
    setSelectValue(e.target.value);
    applyFilters({ sortKey: e.target.value });
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
        <select
          className="filternav__sort__select"
          value={selectValue}
          onChange={handleSelectValueChange}
        >
          <option value="CREATED_AT__ASC">Ascending (Created At)</option>
          <option value="CREATED_AT__DESC">Descending (Created At)</option>
          <option value="UPDATED_AT__ASC">Ascending (Updated At)</option>
          <option value="UPDATED_AT__DESC">Descending (Updated At)</option>
          <option value="TITLE__ASC">Ascending (Title (A-Z))</option>
          <option value="TITLE__DESC">Descending (Title (Z-A))</option>
          <option value="DUE_DATE__ASC">Ascending (Due Date)</option>
          <option value="DUE_DATE__DESC">Descending (Due Date)</option>
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
