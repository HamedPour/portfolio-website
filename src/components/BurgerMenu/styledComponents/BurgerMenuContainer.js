import styled from "styled-components";
import breakpoints from "../../../config/breakpoints";

export default styled.div`
  @media only screen and (min-width: ${breakpoints.smallScreen}) {
    display: none;
  }

  margin-right: 25px;
  cursor: pointer;

  & div {
    width: 26px;
    height: 4px;
    background-color: black;
    margin: 4px 0;
  }
`;
