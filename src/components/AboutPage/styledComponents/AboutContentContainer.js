import styled from "styled-components";

export default styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 30px;

  & h4 {
    margin-top: 90px;
    font-size: 1.8rem;
    font-weight: 400;
    width: 70%;
  }

  & p {
    width: 60%;
    font-weight: 300;
    font-size: 1.2rem;
    text-align: justify;
  }

  & hr {
    width: 50%;
    margin: 40px 0px;
    border: 1px solid rgba(247, 223, 30, 0.4);
  }

  & a {
    color: #0b55a8;
    font-style: italic;
    text-decoration: none;
    border-bottom: 1px solid #0b55a8;
  }

  & a:hover {
    color: coral;
    border-bottom: 1px solid coral;
  }
`;
