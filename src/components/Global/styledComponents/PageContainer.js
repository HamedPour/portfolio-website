import styled from "styled-components";
import breakpoints from "../../../config/breakpoints";

export default styled.div`
  min-height: 80vh;
  display: flex;

  @media only screen and (max-width: ${breakpoints.smallScreen}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;
