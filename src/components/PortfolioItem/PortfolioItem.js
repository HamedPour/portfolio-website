import React from "react";

// styled components
import ItemContainer from "./styledComponents/ItemContainer";

function PortfolioItem(props) {
  function openModal(props) {
    const payload = {
      title: props.title,
      details: props.details,
    };
    props.openModal(payload);
  }

  function closeModal() {
    props.closeModal();
  }

  function openGitbubPage(url) {
    const win = window.open(url, '_blank');
    win.focus();

  }

  return (
    <ItemContainer
      onMouseEnter={() => openModal(props)}
      onMouseLeave={closeModal}
    >
    <div onClick={()=>openGitbubPage(props.repoURL)}>

      <h3>{props.title}</h3>
      <img
        src={process.env.PUBLIC_URL + props.coverImage}
        alt={props.title + " image"}
      />
      <br />
      <div>
        Github Repository
      </div>
    </div>
    
      <div hidden={!props.websiteURL}>
          <a className="livelinkButton" target="_blank" rel="noopener noreferrer" href={props.websiteURL}>
            Live Preview
          </a>
      </div>
    </ItemContainer>
  );
}

export default PortfolioItem;
