import React, { useState, useEffect, useRef } from "react";

// importing Components
import Navigation from "./Navigation";
import FilterNav from "./FilterNav";
import TaskDashboard from "./TaskDashboard";
import Loading from "../Loading/Loading";
import UserPopup from "./UserPopup";

// importing Client
import { taskClient } from "../../apiClients/TaskClient";

const Dashboard = () => {
  const initialFilterState = {
    search: "",
    labels: null,
    priority: null,
    status: null,
  };
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState(null);
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);
  const dashboardRef = useRef();

  const [filters, setFilters] = useState(initialFilterState);

  useEffect(() => {
    getAllTasks();
    getUserData();
  }, []);

  const getUserData = () => {
    const userDataObj = JSON.parse(
      atob(JSON.parse(localStorage.getItem("access")).split(".")[1])
    );
    setUserData(userDataObj);
  };

  const applyFilters = async (filterObj) => {
    try {
      setLoading(true);
      setFilters({ ...filters, ...filterObj });
      const response = await taskClient.filterTasks(filterObj);
      setLoading(false);
      setTasks(response.tasks);
      console.log(response);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const resetAllFilters = async () => {
    setLoading(true);
    setFilters(initialFilterState);
    await getAllTasks();
    setLoading(false);
  };

  const getAllTasks = async () => {
    const tasksObj = await taskClient.getTasks();

    setTasks(tasksObj.tasks);
    setCount(tasksObj.count);
    setLoading(false);

    console.log(tasksObj);
  };

  const toggleUserProfile = () => {
    setIsUserProfileOpen(!isUserProfileOpen);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeUserProfile = () => {
    if (!isUserProfileOpen) {
      return;
    }

    setIsUserProfileOpen(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div ref={dashboardRef} onClick={closeUserProfile} className="dashboard">
      <UserPopup userData={userData} isUserProfileOpen={isUserProfileOpen} />
      <Navigation toggleUserProfile={toggleUserProfile} toggleNav={toggleNav} />
      <FilterNav
        resetAllFilters={resetAllFilters}
        applyFilters={applyFilters}
      />
      <TaskDashboard
        searchFilterValue={filters.search}
        isNavOpen={isNavOpen}
        tasks={tasks}
        count={count}
      />
    </div>
  );
};

export default Dashboard;
