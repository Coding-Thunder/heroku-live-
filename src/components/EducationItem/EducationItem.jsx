import React from "react";
import "./EducationItem.css";

const EducationItem = ({ item }) => {
  return (
    <div className="educationItem">
      <h1>{item.title}</h1>
      <p>{item.educationDescription}</p>
    </div>
  );
};

export default EducationItem;
