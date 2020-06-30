import React from "react";

// styled components
import AboutPageContainer from "../Global/styledComponents/PageContainer";
import AboutIntroContainer from "./styledComponents/AboutIntroContainer";
import Title from "../Global/styledComponents/Title";
import SubTitle from "../Global/styledComponents/SubTitle";
import AboutContentContainer from "./styledComponents/AboutContentContainer";

function AboutPage({ profileImage, emailAddress, cvURL }) {
  const headingText =
    "I’m a big picture thinker. I like to connect the dots and find solutions to solve problems.";
  const subHeadingText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus purus scelerisque, dapibus felis vel, eleifend sapien. Vivamus venenatis nisl ut sapien maximus lobortis. Pellentesque elementum lorem a sem sagittis, vel sollicitudin nibh sodales. Aliquam efficitur, lacus in eleifend tincidunt, nisi magna volutpat lacus, id aliquet neque tellus nec mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras dignissim odio a est pulvinar dapibus. Praesent lobortis mi in eleifend tincidunt.";

  return (
    <AboutPageContainer>
      <AboutIntroContainer>
        <Title>About Me</Title>
        <br />
        <SubTitle>
          In this section I talk about myself without saying anything too stupid
          and keeping the convo about prgoramming
        </SubTitle>
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
