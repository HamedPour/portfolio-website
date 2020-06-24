import React from "react";

// styled components
import ItemContainer from "./styledComponents/ItemContainer";

function PortfolioItem(props) {
  return (
    <ItemContainer>
      <h3>{props.title}</h3>
      <img
        src={process.env.PUBLIC_URL + props.coverImage}
        alt={props.title + " image"}
      />
    </ItemContainer>
  );
}

export default PortfolioItem;
