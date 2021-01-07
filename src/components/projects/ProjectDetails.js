import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus dolorum temporibus quos voluptates sint, ut veniam enim
            incidunt necessitatibus quis commodi nam quaerat repudiandae
            possimus. Quis quaerat vel praesentium doloribus.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
