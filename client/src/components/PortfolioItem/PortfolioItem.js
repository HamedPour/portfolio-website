import React from "react";

// styled components
import ItemContainer from "./styledComponents/ItemContainer";

function PortfolioItem(props) {
  function openModal(props) {
    const payload = {
      title: props.title,
      details: props.details,
    };
    props.toggleModal(payload);
  }

  function closeModal() {
    console.log("close");
    props.toggleModal(null);
  }

  return (
    <ItemContainer
      onMouseEnter={() => openModal(props)}
      onMouseLeave={closeModal}
    >
      <h3>{props.title}</h3>
      <img
        src={process.env.PUBLIC_URL + props.coverImage}
        alt={props.title + " image"}
      />
      <br />
      <div>
        <a target="_blank" rel="noopener noreferrer" href={props.repoURL}>
          Github Repository
        </a>
      </div>
      <div hidden={!props.websiteURL}>
        <a target="_blank" rel="noopener noreferrer" href={props.websiteURL}>
          Live Preview
        </a>
      </div>
    </ItemContainer>
  );
}

export default PortfolioItem;
