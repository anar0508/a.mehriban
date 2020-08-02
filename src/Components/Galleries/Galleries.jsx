import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { trackWindowScroll } from "react-lazy-load-image-component";
import PhotoContainer from "./PhotoContainer";
import API from "../../utils/API";
import "../../index.css";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(100px,1fr));
  grid-gap: ${({ gridGap }) => gridGap+"px"} ;
  grid-auto-rows: ${({ gridRows }) => gridRows};

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, minmax(100px,1fr));;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px,1fr));;
  }
`;

const Gallery = (props) => {
  const { homepage, scrollPosition  } = props;
  const [images, getPhotos] = useState([]);
  const [gridGap, changeGap] = useState(15);
  const [gridRows, changeRows] = useState(0);
  useEffect(() => {
    const getData = async () => {
      let result = await API.get("/api/images");
      getPhotos(result.data);
    };
    getData();
  }, []);
  let imageList = images.map((image) => (
    <PhotoContainer imageSrc={image} gridGap={gridGap} gridRows={gridRows} scrollPosition={scrollPosition} />
  ));

  return <Content gridRows={gridRows} gridGap={gridGap} isHomepage={homepage}>{imageList}</Content>;
};
export default trackWindowScroll(Gallery);
