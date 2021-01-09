import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "./../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

// Dashboard
class Dashboard extends Component {
  render() {
    // Get projects from props
    const { projects, auth, notifications } = this.props;

    // If not logged in go to sign in
    if (!auth.uid) return <Redirect to="/signin" />;

    // Return Dashboard
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

// Map State To Props - Get Data From Reducer store in props
const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

// Firestore Connect - get data and connect to firestore collection
// Connect - get data from redux store via connect
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] }, // Connect to projects collection
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }, // Connect to notifications collection
  ])
)(Dashboard);
