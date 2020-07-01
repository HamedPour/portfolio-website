import React, { useState, useEffect } from "react";

// components
import PortfolioItem from "../PortfolioItem/PortfolioItem";

// fake database
import projectsDB from "../../temp_server/tempProjectsDB.json";

// components
import Modal from "../Modal/Modal";

// styled-components
import LandingPageContainer from "../Global/styledComponents/PageContainer";
import LandingIntroContainer from "../Global/styledComponents/IntroContainer";
import Title from "../Global/styledComponents/Title";
import SubTitle from "../Global/styledComponents/SubTitle";
import PortfolioContainer from "./styledComponents/PortfolioContainer";

function LandingPage({ personalInfo }) {
  const [projects, setProjects] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState();

  useEffect(() => {
    setProjects(projectsDB.projects);
  }, []);

  function activateModel(data) {
    setModalData(data);
    setToggleModal(true);
  }

  function deActivateModel() {
    setToggleModal(false);
  }

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
        <br />
        <SubTitle>
          To see a full list of my <i>Github</i> repos click{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={personalInfo.githubURL}
          >
            here
          </a>
          .
        </SubTitle>
        {toggleModal ? (
          <Modal title={modalData.title} details={modalData.details} />
        ) : null}
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
              details={project.details}
              openModal={activateModel}
              closeModal={deActivateModel}
            />
          );
        })}
      </PortfolioContainer>
    </LandingPageContainer>
  );
}

export default LandingPage;
