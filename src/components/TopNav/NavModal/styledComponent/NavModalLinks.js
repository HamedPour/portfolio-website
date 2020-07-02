import styled from "styled-components";

export default styled.nav`
  width: fit-content;
  margin: 0 auto;

  & ul {
    list-style: none;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  & a li {
    text-align: center;
    font-size: 1.5rem;
    padding: 7px 0;
  }
`;
