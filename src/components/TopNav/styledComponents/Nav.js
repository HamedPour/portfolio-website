import styled from "styled-components";
import breakpoints from "../../../config/breakpoints";

export default styled.nav`
  @media only screen and (max-width: ${breakpoints.smallScreen}) {
    display: none;
  }

  display: flex;
  margin-right: 20px;
  & ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  & a {
    text-decoration: none;
    color: #000;
    list-style: none;
    margin-left: 20px;
  }
`;
