import styled from "styled-components";

export default styled.div`
  border: 1px solid rgba(247, 223, 30, 0.7);
  border-radius: 3%;
  width: 230px;
  margin: 10px;
  padding: 0px 20px 0px 20px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  transition: box-shadow 0.5s linear;

  &:hover {
    box-shadow: 2px 2px 4px #f7df1e;
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
  
  & .livelinkButton {
    z-index: 1000;
    border: 1px solid rgba(17, 191, 222, 0.1);
    background-color: rgba(17, 191, 222, 0.08);
    border-radius: 3px;
    padding: 0px 10px 2px 10px;
  }
  & .livelinkButton:hover {
    border: 1px solid lightblue;
    background-color: #1183ca;
    color: #fff;
  }

`;
