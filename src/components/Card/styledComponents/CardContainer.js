import styled from "styled-components";
import breakpoints from "../../../config/breakpoints";

export default styled.div`
  display: flex;
  margin: 50px 50px 60px 40px;

  @media only screen and (max-width: ${breakpoints.mediumScreen2}) {
    display: block;
  }

  & div {
    margin-left: 20px;
  }

  & h5 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  & p {
    font-weight: 300;
  }

  & span {
    font-weight: 300;
  }

  & a {
    text-decoration: none;
    color: rgb(110, 184, 246);
  }
`;
