import React from "react";

// styled components
import CardContainer from "./styledComponents/CardContainer";
import ImageHolder from "./styledComponents/ImageHolder";

function Card({
  title,
  cardImage,
  aboutOrganisation,
  myRole,
  duration,
  organisationURL,
}) {
  return (
    <CardContainer>
      <ImageHolder>
        <img src={process.env.PUBLIC_URL + cardImage} alt={title} />
      </ImageHolder>
      <div>
        <h5>{title}</h5>
        <br />
        <p>{aboutOrganisation}</p>
        <br />
        <p>{myRole + duration}</p>
        <br />
        <span>
          learn more about<a href={organisationURL}> {title}</a>.
        </span>
      </div>
    </CardContainer>
  );
}

export default Card;
