import React, { useState, useEffect } from "react";

// importing Components
import Navigation from "./Navigation";
import FilterNav from "./FilterNav";
import TaskDashboard from "./TaskDashboard";

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
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState(null);
  const [count, setCount] = useState(0);

  const [filters, setFilters] = useState(initialFilterState);

  useEffect(() => {
    getAllTasks();
  }, []);

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

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="dashboard">
      <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
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
