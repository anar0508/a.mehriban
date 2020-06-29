import {Hamburger} from "../../Styles/HamburgerStyle";
import React from "react";
import "../../index.css";

const HamburgerButton = (props) => {
  const { isExpanded, toggleExpanded } = props;
  return (
    <Hamburger
      isExpanded={isExpanded}
      onClick={() => {
        toggleExpanded(!isExpanded);
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </Hamburger>
  );
};

export default HamburgerButton;
