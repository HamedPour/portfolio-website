import styled from "styled-components";

export default styled.table`
  border-collapse: collapse;

  & thead th {
    padding: 0px 10px;
    text-align: left;
    font-weight: lighter;
    font-size: 1.4rem;
  }

  & tbody td {
    font-size: 1.6rem;
    padding: 10px;
    width: 80%;
  }
`;
