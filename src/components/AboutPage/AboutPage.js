import React from "react";

// styled components
import AboutPageContainer from "../Global/styledComponents/PageContainer";
import AboutIntroContainer from "./styledComponents/AboutIntroContainer";
import Title from "../Global/styledComponents/Title";
import SubTitle from "../Global/styledComponents/SubTitle";
import AboutContentContainer from "./styledComponents/AboutContentContainer";

function AboutPage({ profileImage, emailAddress, cvURL }) {
  const headingText =
    "I am a creator and an avid learner. I like dissembling code and seeing how it works. There is always something new and exciting to learn.";
  const subHeadingText =
    'I have an academic background in criminology, achieving my MA fom the University of Sheffield. During this time I was already interested in technology and wrote my MA dissertation on cyber security. Before programming I was also a teacher for the better part of a decade. I started my coding journey when one of my friends handed me his copy of "Teach yourself C++ in 21 days". I didn’t understand a word of it but from then on I have been completely hooked. I started my development journey in earnest programming in Python while I was in a little hostel in Istanbul. Later that year I wrote my first JavaScript program in Copenhagen. There was no stopping from there ... ';
  const subTitleText =
    "Hi again! Here is a picture of my face. When I've spent too many hours behind the screen, I like to escape to the local fields of Sussex to relax and remind myself that the sun still exists.";

  return (
    <AboutPageContainer>
      <AboutIntroContainer>
        <Title>About Me</Title>
        <br />
        <SubTitle>{subTitleText}</SubTitle>
        <br />
        <img src={profileImage} alt="my profile" />
      </AboutIntroContainer>
      <AboutContentContainer>
        <h4>{headingText}</h4>
        <br />
        <p>{subHeadingText}</p>
        <hr />
        <span>
          You can take a look at my{" "}
          <a rel="noopener noreferrer" href={cvURL}>
            resume
          </a>{" "}
          or send an{" "}
          <a
            href={"mailto:" + emailAddress}
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>{" "}
          my way to say hi.
        </span>
      </AboutContentContainer>
    </AboutPageContainer>
  );
}

export default AboutPage;
