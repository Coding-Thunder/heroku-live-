import React from "react";
import BannerAboutMe from "../BannerAboutMe/BannerAboutMe";
import "./Banner.css";

const Banner = ({ url, displayText }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url}})`,
        }}
        className="banner"
      >
        {displayText ? (
          <div className="banner__heading">
            <p className="fontdiff">
              <span className="banner__heading1 fontdiff">{displayText}</span>
            </p>
          </div>
        ) : (
          <BannerAboutMe />
        )}
      </div>
    </div>
  );
};

export default Banner;
