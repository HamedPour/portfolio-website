import React from "react";

// components
import LandingPage from "../components/LandingPage/LandingPage";

function Home({ personalInfo }) {
  return <LandingPage personalInfo={personalInfo} />;
}

export default Home;
