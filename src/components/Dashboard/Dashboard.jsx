import React, { useState, useEffect } from "react";

// importing Components
import Navigation from "./Navigation";
import FilterNav from "./FilterNav";
import TaskDashboard from "./TaskDashboard";

// importing Client
import { taskClient } from "../../apiClients/TaskClient";

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAllTasks();
  }, []);

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
      <FilterNav />
      <TaskDashboard isNavOpen={isNavOpen} tasks={tasks} count={count} />
    </div>
  );
};

export default Dashboard;
