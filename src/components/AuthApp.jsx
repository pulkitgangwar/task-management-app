import React, { useRef, useState, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Dashboard/Navigation";
import UserPopup from "./Dashboard/UserPopup";
import Loading from "./Loading/Loading";

/**
 *  Styles for react-datepicker and react-draft-wysiwyg
 */
import "react-datepicker/dist/react-datepicker.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

/**
 *  Lazy Loading components for Code-Splitting
 */
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));
const AddTask = lazy(() => import("./AddTask/AddTask"));
const EditTask = lazy(() => import("./EditTask/EditTask"));
const SingleTask = lazy(() => import("./SingleTask/SingleTask"));
const NotFoundPage = lazy(() => import("./NotFoundPage/NotFoundPage"));

/**
 *  Routes for logged-in users
 */
const AuthApp = () => {
  const dashboardRef = useRef();
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);

  const toggleUserProfile = () => {
    setIsUserProfileOpen(!isUserProfileOpen);
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
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/new" component={AddTask} />
          <Route exact path="/edit/:id" component={EditTask} />
          <Route exact path="/tasks/:id" component={SingleTask} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default AuthApp;
