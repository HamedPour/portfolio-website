import React from "react";

// styled components
import CommunityPageContainer from "./styledComponents/CommunityPageContainer";
import CommunityIntroContainer from "../Global/styledComponents/IntroContainer";
import Title from "../Global/styledComponents/Title";
import SubTitle from "../Global/styledComponents/SubTitle";
import CommunityContentContainer from "./styledComponents/CommunityContentContainer";

// components
import Card from "../Card/Card";

const subTitleText =
  "I have always been a firm believer of giving back to my community. Throughout my life I have tried to become involved with different charity organisations. Here you can see a short list of some of the most recent organisations.";

function CommunityPage({ volunteeringInfo }) {
  return (
    <CommunityPageContainer>
      <CommunityIntroContainer>
        <Title>Community</Title>
        <br />
        <SubTitle>{subTitleText}</SubTitle>
      </CommunityIntroContainer>
      <CommunityContentContainer>
        {volunteeringInfo.map((item, index) => {
          return (
            <Card
              title={item.organisationName}
              cardImage={item.coverImage}
              aboutOrganisation={item.aboutOrganisation}
              myRole={item.myRole}
              duration={item.serviceDuration}
              organisationURL={item.organisationURL}
              key={index}
            />
          );
        })}
      </CommunityContentContainer>
    </CommunityPageContainer>
  );
}

export default CommunityPage;
