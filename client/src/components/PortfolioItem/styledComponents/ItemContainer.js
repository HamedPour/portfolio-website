import styled from "styled-components";

export default styled.div`
  background-image: url("${(props) => props.btImage}");
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  border-image: 30 round;
  border: 2px solid rgba(0,0,0,0.1);
  border-radius: 3%;
  padding: 70px;
  cursor: pointer;
  margin: 40px 40px;
  max-height: 220px;

`;
