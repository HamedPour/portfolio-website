import React from "react";

// components
import AboutPage from "../components/AboutPage/AboutPage";

function About({ personalInfo }) {
  return (
    <AboutPage
      profileImage={personalInfo.profileImage}
      emailAddress={personalInfo.emailAddress}
      cvURL={personalInfo.cvURL}
    />
  );
}

export default About;
