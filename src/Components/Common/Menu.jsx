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
        <Link to="/about">Contact & About me </Link>
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
          <Link to={ "/gallery/breakfast"} >
            Breakfast
          </Link>
        </li>
        <li>
          <Link to={"/gallery/dinner"}>
            Main course
          </Link>
        </li>
        <li>
          <Link to={"/gallery/desert"}>
            Desert
          </Link>
        </li>
      </ul>
    )
  );
}
