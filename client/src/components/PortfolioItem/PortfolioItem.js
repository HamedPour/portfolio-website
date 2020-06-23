import React from "react";

// styled components
import ItemContainer from "./styledComponents/ItemContainer";

function PortfolioItem(props) {
  return (
    <ItemContainer btImage={props.coverImageURL}>
      <h4>{props.title}</h4>
    </ItemContainer>
  );
}

export default PortfolioItem;
