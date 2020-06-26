import React, { useState, useEffect } from "react";

// components
import PortfolioItem from "../PortfolioItem/PortfolioItem";

// fake database
import projectsDB from "../../temp_server/tempProjectsDB.json";

// styled-components
import LandingPageContainer from "../Global/styledComponents/PageContainer";
import LandingIntroContainer from "../Global/styledComponents/IntroContainer";
import Title from "../Global/styledComponents/Title";
import SubTitle from "../Global/styledComponents/SubTitle";
import PortfolioContainer from "./styledComponents/PortfolioContainer";

function LandingPage({ personalInfo }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsDB.projects);
  }, []);

  return (
    <LandingPageContainer>
      <LandingIntroContainer>
        <Title>
          Hi There!
          <br />
          I'm {personalInfo.firstName}
          <br />
          I'm a {personalInfo.title}
        </Title>
        <br />
        <SubTitle>{personalInfo.about}</SubTitle>
      </LandingIntroContainer>
      <PortfolioContainer>
        {projects.map((project, key) => {
          return (
            <PortfolioItem
              key={key}
              title={project.title}
              repoURL={project.repoURL}
              coverImage={project.coverImage}
              websiteURL={project.websiteURL}
            />
          );
        })}
      </PortfolioContainer>
    </LandingPageContainer>
  );
}

export default LandingPage;
