import React, { useState, useEffect } from "react";

// components
import PortfolioItem from "../PortfolioItem/PortfolioItem";

// fake database
import projectsDB from "../../temp_server/tempProjectsDB.json";

// styled-components
import LandingPageContainer from "./styledComponents/LandingPageContainer";
import IntroContainer from "./styledComponents/IntroContainer";
import Title from "./styledComponents/Title";
import SubTitle from "./styledComponents/SubTitle";
import PortfolioContainer from "./styledComponents/PortfolioContainer";

function LandingPage({ personalInfo }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsDB.projects);
  }, []);

  return (
    <LandingPageContainer>
      <IntroContainer>
        <Title>
          Hello!
          <br />
          I'm {personalInfo.firstName}
          <br />
          I'm a {personalInfo.title}
        </Title>
        <br />
        <SubTitle>{personalInfo.about}</SubTitle>
      </IntroContainer>
      <PortfolioContainer>
        {projects.map((project, key) => {
          return (
            <PortfolioItem
              key={key}
              title={project.title}
              repoURL={project.repoURL}
              coverImageURL={project.coverURL}
              websiteURL={project.websiteURL}
            />
          );
        })}
      </PortfolioContainer>
    </LandingPageContainer>
  );
}

export default LandingPage;
