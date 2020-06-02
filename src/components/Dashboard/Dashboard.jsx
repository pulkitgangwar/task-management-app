import React, { useState } from "react";

// importing Components
import Navigation from "./Navigation";
import FilterNav from "./FilterNav";
import TaskDashboard from "./TaskDashboard";
import UserNavigation from "./UserNavigation";

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserNavOpen, setIsUserNavOpen] = useState(false);

  const toggleNavigation = (navType) => {
    if (navType === "usernav") {
      if (isNavOpen) {
        setIsNavOpen(false);
        setIsUserNavOpen(!isUserNavOpen);
        return;
      }
      setIsUserNavOpen(!isUserNavOpen);
      return;
    }
    if (navType === "sidenav") {
      if (isUserNavOpen) {
        setIsUserNavOpen(false);
        setIsNavOpen(!isNavOpen);
        return;
      }
      setIsNavOpen(!isNavOpen);
      return;
    }
  };

  return (
    <div className="dashboard">
      <Navigation toggleNavigation={toggleNavigation} />
      <FilterNav />
      <TaskDashboard isNavOpen={isNavOpen} />
      <UserNavigation
        setIsUserNavOpen={setIsUserNavOpen}
        isUserNavOpen={isUserNavOpen}
      />
    </div>
  );
};

export default Dashboard;
