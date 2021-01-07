import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class SignUp extends Component {
  // State
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
    console.log(this.state);
  };

  // Render
  render() {
    // Auth
    const { auth } = this.props;

    // Redirect
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

// Map state
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(SignUp);
