import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

// Stateless Functional Component
const Like = (props) => {
  let classes = "fa fa-heart";
  // if liked is false, display outline heart.
  if (!props.liked) classes += "-o";

  return (
    <React.Fragment>
      <i
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden={"true"}
      />
      {/*React Font Awesome Heart*/}
      {/*<FontAwesomeIcon icon={faHome} />*/}
    </React.Fragment>
  );
};

export default Like;
