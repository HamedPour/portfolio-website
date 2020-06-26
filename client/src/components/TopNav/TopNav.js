import React from "react";
import { NavLink } from "react-router-dom";

//comfig
import routes from "./../../config/routes";

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
        <NavLink to="/">
          <h1>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
        </NavLink>
        <span>{"< " + personalInfo.title + " />"}</span>
      </NavTitle>
      <Spacer />
      <Nav>
        <ul>
          {routes.map((route, i) => (
            <NavLink
              to={route.path}
              exact={route.exact}
              key={i}
              activeStyle={activeLinkSyle}
            >
              <li>{route.linkName}</li>
            </NavLink>
          ))}
        </ul>
      </Nav>
    </TopNavContainer>
  );
}

export default TopNav;
