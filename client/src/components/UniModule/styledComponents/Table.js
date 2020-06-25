import styled from "styled-components";

export default styled.table`
  border-collapse: collapse;

  & tr {
  }

  & thead th {
    text-align: left;
    font-size: 1.4rem;
    padding-bottom: 10px;
  }

  & thead th:nth-child(3) {
    position: relative;
    left: 15px;
  }

  & thead th:nth-child(2) {
    position: relative;
    right: 20px;
  }

  & tbody td {
    border-bottom: 1px solid rgba(247, 223, 30, 0.8);
    font-weight: lighter;
    font-size: 1.6rem;
    padding: 20px 0px;
    width: 90%;
  }
`;
