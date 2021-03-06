import React from "react";
import { useLocation } from "react-router-dom";
import { trackWindowScroll } from "react-lazy-load-image-component";
import Masonry from "../Common/Masonry";
import "../../index.css";

const Gallery = (props) => {
  const { homepage, scrollPosition } = props;
  let gallery = useLocation().pathname.split("/gallery/")[1];
  return (<Masonry gallery = {gallery} homepage={homepage} scrollPosition={scrollPosition}/>);
};
export default trackWindowScroll(Gallery);
