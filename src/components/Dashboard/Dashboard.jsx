import React from "react";

// importing Components
import Navigation from "./Navigation";
import FilterNav from "./FilterNav";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <FilterNav />
    </div>
  );
};

export default Dashboard;
