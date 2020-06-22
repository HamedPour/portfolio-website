import React from "react";
import { NavLink } from "react-router-dom";

//styled-components
import TopNavContainer from "./styledComponents/TopNavContainer";
import Nav from "./styledComponents/Nav";
import NavTitle from "./styledComponents/NavTitle";
import Spacer from "./styledComponents/Spacer";

function TopNav({ personalInfo }) {
  const activeLinkSyle = {
    fontWeight: "bold",
  };

  return (
    <TopNavContainer>
      <NavTitle>
        <h1>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <span>{personalInfo.title}</span>
      </NavTitle>
      <Spacer />
      <Nav>
        <ul>
          <NavLink exact activeStyle={activeLinkSyle} to="/">
            <li>Works</li>
          </NavLink>
          <NavLink activeStyle={activeLinkSyle} to="/education">
            <li>Education</li>
          </NavLink>
          <NavLink activeStyle={activeLinkSyle} to="/about">
            <li>About</li>
          </NavLink>
          <NavLink activeStyle={activeLinkSyle} to="/community">
            <li>Community</li>
          </NavLink>
        </ul>
      </Nav>
    </TopNavContainer>
  );
}

export default TopNav;
