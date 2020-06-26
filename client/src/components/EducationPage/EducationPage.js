import React, { useState, useEffect } from "react";

// component
import UniModule from "../UniModule/UniModule";

// styled components
import EducationPageContainer from "../Global/styledComponents/PageContainer";
import EducationIntroContainer from "./styledComponents/EducationIntroContainer";
import ModulesContainer from "./styledComponents/ModulesContainer";
import Title from "../Global/styledComponents/Title";
import SubTitle from "../Global/styledComponents/SubTitle";

function EducationPage({ educationInfo }) {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    if (educationInfo.modules !== undefined) {
      // reverse the order of modules to have higher leverl
      // show before lower level modules
      const clone = educationInfo.modules.slice(0).reverse();
      setModules(clone);
    }
  }, [educationInfo.modules]);

  return (
    <EducationPageContainer>
      <EducationIntroContainer>
        <Title>{educationInfo.degreeTitle}</Title>
        <br />
        <SubTitle>
          I am currently studying towards my {educationInfo.degreeTitle} at{" "}
          {educationInfo.universityName}. You can see the list of my modules and
          and their results here.
        </SubTitle>
        <br />
        <SubTitle>
          Please feel free to see my Open University{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={educationInfo.publicProfileURL}
          >
            public profile
          </a>
          .
        </SubTitle>
      </EducationIntroContainer>
      <ModulesContainer>
        <UniModule modules={modules} />
      </ModulesContainer>
    </EducationPageContainer>
  );
}

export default EducationPage;
