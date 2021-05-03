import React from "react";
import "./ProjectAnchor.css";

const ProjectAnchor = ({ item }) => {
  return (
    <a
      alt={item.alt}
      key={item.key}
      target="_blank"
      className="project__card"
      href={item.projectLink}
    >
      <img src={item.projectLogoLink} alt={item.alt} />
      <div>
        <p className="project__name">
          <strong>{item.projectName}</strong>
        </p>
        <p className="project__desc">{item.projectDescription}</p>
      </div>
    </a>
  );
};

export default ProjectAnchor;
