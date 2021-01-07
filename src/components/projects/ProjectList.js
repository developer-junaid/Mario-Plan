import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {/* If Projects are there, get projects */}
      {projects &&
        projects.map((project) => (
          <Link key={project.id} to={"/project/" + project.id}>
            <ProjectSummary project={project} />
          </Link>
        ))}
    </div>
  );
};

export default ProjectList;
