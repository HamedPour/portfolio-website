import styled from "styled-components";

export default styled.div`
  border: 1px solid #f7df1e;
  border-radius: 3%;
  position: relative;
  margin: 40px;
  padding: 0px 20px;
  text-align: center;
  cursor: pointer;

  & h3 {
    font-size: 1.4rem;
    font-weight: lighter;
    padding: 10px 0;
  }

  & img {
    max-width: 170px;
    width: 100%;
    height: auto;
  }

  & img:hover {
    transform: scale(1.1);
  }
`;
