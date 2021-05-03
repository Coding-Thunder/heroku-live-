import React from "react";
import { connect } from "react-redux";
import "./BannerAboutMe.css";

const BannerAboutMe = ({ AboutInfo }) => {
  return (
    <div className="banner-about">
      <div className="small">
        <div className="content">
          <img src={AboutInfo.myimage} alt="my" />
          <div className="description">
            <strong className="fontdiff large">{AboutInfo.name}</strong>
            <p>{AboutInfo.description_small}</p>
            <button className="hire-me">
              <strong>Hire Me</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  AboutInfo: state.AboutMe.aboutme,
});
export default connect(mapStateToProps)(BannerAboutMe);
