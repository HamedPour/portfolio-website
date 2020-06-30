import styled from "styled-components";
import PageContainer from "../../Global/styledComponents/PageContainer";

// config
import breakpoints from "../../../config/breakpoints";

export default styled(PageContainer)`
  @media only screen and (max-width: ${breakpoints.mediumScreen2}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
