import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import { statusValues, labelValues, priorityValues } from "./filterValues";

const FilterSidebar = ({ isOpen, filters, setFilters }) => {
  const [statusOpen, setStatusOpen] = useState(true);
  const [priorityOpen, setPriorityOpen] = useState(true);
  const [labelOpen, setLabelOpen] = useState(false);
  const [dueDateOpen, setDueDateOpen] = useState(false);
  const [createdAtOpen, setCreatedAtOpen] = useState(false);

  const toggleStatus = (status) => {
    if (filters.status === status) {
      setFilters({
        ...filters,
        status: null,
      });
    } else {
      setFilters({ ...filters, status });
    }
  };

  const togglePriority = (priority) => {
    if (filters.priority === priority) {
      setFilters({
        ...filters,
        priority: null,
      });
    } else {
      setFilters({ ...filters, priority });
    }
  };

  const toggleLabel = (label) => {
    const currentLabels = filters.labels;
    if (currentLabels.includes(label)) {
      setFilters({
        ...filters,
        labels: currentLabels.filter((l) => l !== label),
      });
    } else {
      setFilters({ ...filters, labels: [...currentLabels, label] });
    }
  };

  return (
    <div
      className={`filterSidebar ${
        isOpen ? "" : "filterSidebar__navigation-off"
      }`}
    >
      <div
        className={`filterSidebar__content ${
          isOpen ? "" : "filterSidebar__content__navigation-off"
        }`}
      >
        <ul className="filterSidebar__ul">
          <li className="filterSidebar__li filterSidebar__drop">
            <div
              className="filterSidebar__drop__title"
              onClick={() => setStatusOpen(!statusOpen)}
            >
              <p className="paragraph-primary">Status Toggle</p>
              <IoIosArrowDown />
            </div>
            <ul
              className={`filterSidebar__drop__ul ${
                statusOpen ? "filterSidebar__drop__ul--active" : ""
              }`}
            >
              {statusValues.map((statusValue) => {
                return (
                  <li
                    key={statusValue}
                    className={`filterSidebar__drop__li ${
                      filters.status === statusValue
                        ? "filterSidebar__drop__li--active"
                        : ""
                    }`}
                    onClick={() => toggleStatus(statusValue)}
                  >
                    <p className="paragraph-secondary">{statusValue}</p>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="filterSidebar__li filterSidebar__drop">
            <div
              className="filterSidebar__drop__title"
              onClick={() => setPriorityOpen(!priorityOpen)}
            >
              <p className="paragraph-primary">Priority Toggle</p>
              <IoIosArrowDown />
            </div>
            <ul
              className={`filterSidebar__drop__ul ${
                priorityOpen ? "filterSidebar__drop__ul--active" : ""
              }`}
            >
              {priorityValues.map((priorityValue) => {
                return (
                  <li
                    key={priorityValue}
                    className={`filterSidebar__drop__li ${
                      filters.priority === priorityValue
                        ? "filterSidebar__drop__li--active"
                        : ""
                    }`}
                    onClick={() => togglePriority(priorityValue)}
                  >
                    <p className="paragraph-secondary">{priorityValue}</p>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="filterSidebar__li filterSidebar__drop">
            <div
              className="filterSidebar__drop__title"
              onClick={() => setLabelOpen(!labelOpen)}
            >
              <p className="paragraph-primary">Label Toggle</p>
              <IoIosArrowDown />
            </div>
            <ul
              className={`filterSidebar__drop__ul ${
                labelOpen ? "filterSidebar__drop__ul--active" : ""
              }`}
            >
              {labelValues.map((labelValue) => {
                return (
                  <li
                    key={labelValue}
                    className={`filterSidebar__drop__li ${
                      filters.labels.includes(labelValue)
                        ? "filterSidebar__drop__li--active"
                        : ""
                    }`}
                    onClick={() => toggleLabel(labelValue)}
                  >
                    <p className="paragraph-secondary">{labelValue}</p>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="filterSidebar__li filterSidebar__drop">
            <div
              className="filterSidebar__drop__title"
              onClick={() => setDueDateOpen(!dueDateOpen)}
            >
              <p className="paragraph-primary">Due Date Filter</p>
              <IoIosArrowDown />
            </div>
            <ul
              className={`filterSidebar__drop__ul ${
                dueDateOpen ? "filterSidebar__drop__ul--active" : ""
              }`}
            >
              <div className="">
                <label htmlFor="after-due-date">
                  Due Date After{" "}
                  <button
                    className="btn btn--danger btn--danger--small"
                    type="button"
                    onClick={(e) =>
                      setFilters({ ...filters, after_due_date: null })
                    }
                  >
                    Clear
                  </button>
                </label>
                <DatePicker
                  id="after-due-date"
                  selected={filters.after_due_date}
                  showTimeSelect
                  dateFormat="Pp"
                  onChange={(date) => {
                    setFilters({
                      ...filters,
                      after_due_date: date,
                    });
                  }}
                  className=""
                />
              </div>
              <div className="">
                <label htmlFor="before-due-date">
                  Due Date Before{" "}
                  <button
                    className="btn btn--danger btn--danger--small"
                    type="button"
                    onClick={(e) =>
                      setFilters({ ...filters, before_due_date: null })
                    }
                  >
                    Clear
                  </button>
                </label>
                <DatePicker
                  id="before-due-date"
                  selected={filters.before_due_date}
                  showTimeSelect
                  dateFormat="Pp"
                  onChange={(date) => {
                    setFilters({
                      ...filters,
                      before_due_date: date,
                    });
                  }}
                  className=""
                />
              </div>
            </ul>
          </li>
          <li className="filterSidebar__li filterSidebar__drop">
            <div
              className="filterSidebar__drop__title"
              onClick={() => setCreatedAtOpen(!createdAtOpen)}
            >
              <p className="paragraph-primary">Date Filter</p>
              <IoIosArrowDown />
            </div>
            <ul
              className={`filterSidebar__drop__ul ${
                createdAtOpen ? "filterSidebar__drop__ul--active" : ""
              }`}
            >
              <div className="">
                <label htmlFor="after_created_at">
                  Created After{" "}
                  <button
                    className="btn btn--danger btn--danger--small"
                    type="button"
                    onClick={(e) =>
                      setFilters({ ...filters, after_created_at: null })
                    }
                  >
                    Clear
                  </button>
                </label>
                <DatePicker
                  id="after_created_at"
                  selected={filters.after_created_at}
                  showTimeSelect
                  dateFormat="Pp"
                  onChange={(date) => {
                    setFilters({
                      ...filters,
                      after_created_at: date,
                    });
                  }}
                  className=""
                />
              </div>
              <div className="">
                <label htmlFor="before_created_at">
                  Created Before{" "}
                  <button
                    className="btn btn--danger btn--danger--small"
                    type="button"
                    onClick={(e) =>
                      setFilters({ ...filters, before_created_at: null })
                    }
                  >
                    Clear
                  </button>
                </label>
                <DatePicker
                  id="before_created_at"
                  selected={filters.before_created_at}
                  showTimeSelect
                  dateFormat="Pp"
                  onChange={(date) => {
                    setFilters({
                      ...filters,
                      before_created_at: date,
                    });
                  }}
                  className=""
                />
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterSidebar;
