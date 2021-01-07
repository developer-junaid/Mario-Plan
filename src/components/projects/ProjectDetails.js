import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

//Project Details
const ProjectDetails = (props) => {
  const { project } = props; // Get project

  // Check if we have project
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">{project.title} </div>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project</p>
      </div>
    );
  }
};

// Map State to props
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id; // Get id
  const projects = state.firestore.data.projects; // Get all projects
  const project = projects ? projects[id] : null; // Get single project

  // Return project
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
