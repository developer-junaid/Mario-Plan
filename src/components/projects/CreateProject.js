import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "./../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  // State
  state = {
    title: "",
    content: "",
  };

  // Functions
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Log the State
    // console.log(this.state);
    this.props.createProject(this.state);
  };

  // Render
  render() {
    // Get Auth
    const { auth } = this.props;

    // Redirect if not logged in
    if (!auth.uid) return <Redirect />;

    // Return
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

// Map State to Props
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

// Map Dispatch To Props
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

// Connect - get dispatch
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
