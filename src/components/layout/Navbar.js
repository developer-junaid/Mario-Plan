import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

// Navbar
const Navbar = (props) => {
  // Get Auth
  const { auth } = props;
  // Check for signed In or signed Out
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  // Check
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};

// Map state to props
const mapStateToProps = (state) => {
  return {
    // Things you want to attach to props
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
