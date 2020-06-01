import React from "react";

const FilterNav = () => {
  return (
    <div className="filternav">
      <div className="filternav__search">
        <input
          className="filternav__search__input"
          type="text"
          placeholder="Search"
        />
        <button className="filternav__search__btn btn btn--secondary">
          Search
        </button>
      </div>
      <div className="filternav__sort">
        <select className="filternav__sort__select">
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
    </div>
  );
};

export default FilterNav;
