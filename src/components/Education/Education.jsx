import React from "react";
import { connect } from "react-redux";
import EducationItem from "../EducationItem/EducationItem";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div className="education">
      <p className="main__heading">
        E <span>D</span>U <span>C</span>A <span>T</span>I <span>O</span>N
      </p>
      <div className="edu-item">
        {education.map((item) => (
          <EducationItem key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  education: state.Education.education,
});
export default connect(mapStateToProps)(Education);
