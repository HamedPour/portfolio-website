import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// components
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavModal from "./NavModal/NavModal";

//comfig
import routes from "./../../config/routes";

//styled-components
import TopNavContainer from "./styledComponents/TopNavContainer";
import Nav from "./styledComponents/Nav";
import NavTitle from "./styledComponents/NavTitle";
import Spacer from "./styledComponents/Spacer";

function TopNav({ personalInfo }) {
  const [isVisible, setIsVisible] = useState(false);
  const activeLinkSyle = {
    fontWeight: "bold",
  };

  function toggleNavModal() {
    setIsVisible(!isVisible);
  }

  function toggleModalOff() {
    toggleNavModal();
  }

  return (
    <TopNavContainer>
      {isVisible ? (
        <NavModal toggleModalOff={toggleModalOff} routes={routes} />
      ) : null}
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
      <div onClick={toggleNavModal}>
        <BurgerMenu />
      </div>
    </TopNavContainer>
  );
}

export default TopNav;
