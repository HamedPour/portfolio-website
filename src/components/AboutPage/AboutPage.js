import React from "react";

// styled components
import AboutPageContainer from "../Global/styledComponents/PageContainer";
import AboutIntroContainer from "./styledComponents/AboutIntroContainer";
import Title from "../Global/styledComponents/Title";
import SubTitle from "../Global/styledComponents/SubTitle";
import AboutContentContainer from "./styledComponents/AboutContentContainer";

function AboutPage({ profileImage, emailAddress, cvURL }) {
  const headingText =
    "I am a creator and a tinkerer. I like dissembling code and seeing how it works. There is always something fun to learn.";
  const subHeadingText =
    'I come from an academic background. I have an MA in English Literature and an MA in International Criminology from the university of Sheffield. Before becoming a programmer I was a teacher for the better part of a decade. I started my coding journey when my friend Mart handed me his copy of "Teach yourself C++ in 21 days". I didn’t understand a word of it but I was forever hooked. I started my development journey in earnest programming in Python while I was in a little hostel in Istanbul. Later that year I wrote my first JavaScript program in Copenhagen. There was no stopping from there ... ';
  const subTitleText =
    "Hello again! Let me introduce you to my face. As you can see I was having a bad hair day in that shot. However, you can see the wonderful fields of Hassocks behind me. I highly recommand a visit whenever you get the chance.";

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
