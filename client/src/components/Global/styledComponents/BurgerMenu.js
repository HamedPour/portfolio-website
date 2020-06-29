import React from "react";

function BurgerMenu() {
  const burgerStyle = {
    width: "20px",
    height: "5px",
    backgroundColor: "black",
    margin: "6px 0",
  };
  return (
    <>
      <div style={burgerStyle} />
      <div style={burgerStyle} />
      <div style={burgerStyle} />
    </>
  );
}

export default BurgerMenu;
