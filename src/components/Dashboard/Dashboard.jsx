import React, { useState } from "react";

// importing Components
import Navigation from "./Navigation";
import FilterNav from "./FilterNav";
import TaskDashboard from "./TaskDashboard";

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="dashboard">
      <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <FilterNav />
      <TaskDashboard isNavOpen={isNavOpen} />
    </div>
  );
};

export default Dashboard;
