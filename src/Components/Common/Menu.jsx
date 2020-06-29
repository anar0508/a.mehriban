import { Link } from "react-router-dom";
import React, { useState } from "react";
import { MenuItems } from "../../Styles/MenuStyle";
import "../../index.css";

const Menu = (props) => {
  const [addExpanded, setExpanded] = useState(false);
  return (
    <MenuItems>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li
        onClick={() => {
          setExpanded(!addExpanded);
        }}
      >
        Galery {addExpanded ? "-" : "+"} 
        {expandedGallery(addExpanded)}
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
      <li>
        <Link to="/contact">Contacts</Link>
      </li>
    </MenuItems>
  );
};

export default Menu;
function expandedGallery(addExpanded) {
  return (
    addExpanded && (
      <ul>
        <li>
          <Link to="/galery/breakfest"> Breakfest </Link>{" "}
        </li>
        <li>
          <Link to="/galery/dinner"> Main course </Link>{" "}
        </li>
        <li>
          <Link to="/galery/dessert"> Dessert </Link>{" "}
        </li>
      </ul>
    )
  );
}
