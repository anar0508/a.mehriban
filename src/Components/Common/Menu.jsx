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
        Gallery {addExpanded ? "-" : "+"}
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
          <Link
            to={{
              pathname: "/gallery/breakfast",
              gallery: "breakfast",
            }}
          >
            Breakfast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/gallery/dinner",
              gallery: "dinner",
            }}
          >
            Main course
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: "/gallery/desert",
              gallery: "desert",
            }}
          >
            Dessert
          </Link>
        </li>
      </ul>
    )
  );
}
