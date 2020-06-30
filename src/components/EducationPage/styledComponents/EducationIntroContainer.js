import styled from "styled-components";
import IntroContainer from "../../Global/styledComponents/IntroContainer";

export default styled(IntroContainer)`
  margin-right: 50px;

  & div:nth-child(1) {
    max-width: 300px;
  }

  & a {
    text-decoration: none;
    color: #0b55a8;
  }

  & a:hover {
    color: coral;
  }
`;
