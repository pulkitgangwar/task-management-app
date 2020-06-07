import React, { useState, useEffect } from "react";
import swal from "@sweetalert/with-react";
import { getTasks } from "../../api/task";
import Loading from "../Loading/Loading";
import FilterNav from "./FilterNav";
import TaskDashboard from "./TaskDashboard";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";
import initialFilterState from "./initialFilterState";

const Dashboard = ({ history }) => {
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(
    Boolean(window.innerWidth > 1000)
  );
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState(initialFilterState);

  const tasks = data?.tasks;
  const count = data?.count;
  const hasPrevPage = filters.offset > 0;
  const hasNextPage =
    Math.ceil(count / filters.limit) >
    Math.ceil(filters.limit * filters.offset) + 1;

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await getTasks(filters);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        swal({
          title: "Unable to fetch Tasks!",
          text: error.response ? error.response.data.message : error.message,
          icon: "error",
        });
      }
    };
    fetchTasks();
  }, [filters]);

  const resetAllFilters = async () => {
    setFilters(initialFilterState);
  };

  const toggleFilterSidebar = () => {
    setIsFilterSidebarOpen(!isFilterSidebarOpen);
  };

  const goToNextPage = () => {
    setFilters({ ...filters, offset: filters.offset + filters.limit });
  };

  const goToPrevPage = () => {
    setFilters({ ...filters, offset: filters.offset - filters.limit });
  };

  return (
    <>
      <FilterNav
        filters={filters}
        toggleFilterSidebar={toggleFilterSidebar}
        setFilters={setFilters}
        resetAllFilters={resetAllFilters}
      />
      <div className="taskdashboard">
        <div
          className={`taskdashboard__sidenavigation ${
            isFilterSidebarOpen
              ? ""
              : "taskdashboard__sidenavigation__navigation-off"
          }`}
        >
          <FilterSidebar
            isOpen={isFilterSidebarOpen}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <div
          className={`taskdashboard__wrapper ${
            isFilterSidebarOpen ? "" : "taskdashboard__wrapper__navigation-off"
          }`}
        >
          <div className="spacer"></div>
          <div className="taskdashboard__header">
            <h3 className="heading-tertiary heading-tertiary--small taskdashboard__task-count">
              Total Tasks : {count}
            </h3>
            <div className="taskdashboard__btn--wrapper">
              <button
                className="btn taskdashboard__btn"
                onClick={() => history.push("/new")}
              >
                Add Task
              </button>
            </div>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <>
              <TaskDashboard
                searchFilterValue={filters.search}
                isFilterSidebarOpen={isFilterSidebarOpen}
                tasks={tasks}
                count={count}
              />
              <Pagination
                hasPrevPage={hasPrevPage}
                hasNextPage={hasNextPage}
                goToPrevPage={goToPrevPage}
                goToNextPage={goToNextPage}
              ></Pagination>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
