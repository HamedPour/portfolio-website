import React from "react";
import { NavLink } from "react-router-dom";

//styled components
import NavModalContainer from "./styledComponent/NavModalContainer";
import NavModalLinks from "./styledComponent/NavModalLinks";

function NavModal({ routes, toggleModalOff }) {
  const activeLinkSyle = {
    fontWeight: "bold",
  };

  function toggleModal() {
    toggleModalOff();
  }

  return (
    <NavModalContainer onClick={toggleModal}>
      <NavModalLinks>
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
      </NavModalLinks>
    </NavModalContainer>
  );
}

export default NavModal;
