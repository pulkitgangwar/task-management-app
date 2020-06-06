import React, { useState, useEffect, useRef } from "react";
import swal from "@sweetalert/with-react";
import { getTasks } from "../../api/task";
import Loading from "../Loading/Loading";
import Navigation from "./Navigation";
import FilterNav from "./FilterNav";
import TaskDashboard from "./TaskDashboard";
import UserPopup from "./UserPopup";
import FilterSidebar from "./FilterSidebar";
import initialFilterState from "./initialFilterState";

const Dashboard = () => {
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(
    Boolean(window.innerWidth > 1000)
  );
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [filters, setFilters] = useState(initialFilterState);
  const dashboardRef = useRef();

  const count = data?.count;
  const tasks = data?.tasks;

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

  const toggleUserProfile = () => {
    setIsUserProfileOpen(!isUserProfileOpen);
  };

  const toggleFilterSidebar = () => {
    setIsFilterSidebarOpen(!isFilterSidebarOpen);
  };

  const closeUserProfile = () => {
    if (!isUserProfileOpen) {
      return;
    }

    setIsUserProfileOpen(false);
  };

  return (
    <div ref={dashboardRef} onClick={closeUserProfile} className="dashboard">
      <UserPopup isUserProfileOpen={isUserProfileOpen} />
      <Navigation toggleUserProfile={toggleUserProfile} />
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
        {loading ? (
          <Loading />
        ) : (
          <TaskDashboard
            searchFilterValue={filters.search}
            isFilterSidebarOpen={isFilterSidebarOpen}
            tasks={tasks}
            count={count}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
