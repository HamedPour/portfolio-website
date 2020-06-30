import styled from "styled-components";

export default styled.div`
  border: 1px solid rgba(247, 223, 30, 0.7);
  border-radius: 3%;
  margin: 20px;
  padding: 0px 20px 20px 20px;
  text-align: center;
  user-select: none;
  transition: box-shadow 0.5s linear;

  &:hover {
    box-shadow: 2px 2px 4px #f7df1e;

    & div {
      text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.3);
    }
  }

  & h3 {
    font-size: 1.6rem;
    font-weight: lighter;
    padding: 10px 0;
  }

  & img {
    max-width: 170px;
    width: 100%;
    height: auto;
  }

  & div {
    margin-bottom: 7px;
  }

  & div a {
    font-size: 1rem;
    text-decoration: none;
    color: inherit;
  }

  & div a:hover {
    text-decoration: underline;
  }
`;
