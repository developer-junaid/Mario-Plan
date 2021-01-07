import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "./../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// Dashboard
class Dashboard extends Component {
  render() {
    // Get projects from props
    const { projects } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
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
  };
};

// Firestore Connect - get data and connect to firestore collection
// Connect - get data from redux store via connect
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects" }, // Connect to projects collection
  ])
)(Dashboard);
