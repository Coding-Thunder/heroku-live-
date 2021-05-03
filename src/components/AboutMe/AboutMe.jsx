import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = ({ AboutInfo }) => {
  return (
    <div className="about">
      <p className="main__heading">
        A <span>B</span>O <span>U</span>T <span>M</span>E<br></br>
      </p>

      <p className="about__description">
        {AboutInfo.bigintro1}
        <br></br>
        <br></br>
        {AboutInfo.bigintro2}
        <br></br>
        <br></br>
        {AboutInfo.bigintro3}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  AboutInfo: state.AboutMe.aboutme,
});

export default connect(mapStateToProps)(AboutMe);
