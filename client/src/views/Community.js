import React from "react";

// components
import CommunityPage from "../components/CommunityPage/CommunityPage";

function Community(props) {
  return <CommunityPage volunteeringInfo={props.volunteeringInfo} />;
}

export default Community;
