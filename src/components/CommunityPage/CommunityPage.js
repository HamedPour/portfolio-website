import React from "react";

// styled components
import CommunityPageContainer from "./styledComponents/CommunityPageContainer";
import CommunityIntroContainer from "../Global/styledComponents/IntroContainer";
import Title from "../Global/styledComponents/Title";
import SubTitle from "../Global/styledComponents/SubTitle";
import CommunityContentContainer from "./styledComponents/CommunityContentContainer";

// components
import Card from "../Card/Card";

function CommunityPage({ volunteeringInfo }) {
  return (
    <CommunityPageContainer>
      <CommunityIntroContainer>
        <Title>Community</Title>
        <br />
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          auctor venenatis, feugiat in neque. Sed sed lacus venenatis,
          consectetur est condimentum, malesuada
        </SubTitle>
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
