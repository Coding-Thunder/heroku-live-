import React from "react";
import { connect } from "react-redux";
import ProjectAnchor from "../ProjectAnchor/ProjectAnchor";
import "./Projects.css";

const Projects = ({ projects }) => {
  return (
    <div id="Projects" className="projects">
      <p className="main__heading">
        P <span>R</span>O <span>J</span>E <span>C</span>T <span>S</span>
        <br></br>
      </p>
      <div className="project">
        {projects.map((item) => (
          <ProjectAnchor item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  projects: state.Projects.projects,
});

export default connect(mapStateToProps)(Projects);
