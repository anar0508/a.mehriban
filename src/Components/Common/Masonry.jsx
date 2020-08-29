import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { trackWindowScroll } from "react-lazy-load-image-component";
import PhotoContainer from "../Galleries/PhotoContainer";
import API from "../../utils/API";
import "../../index.css";

const Content = styled.div`
  display: grid;
  grid-template-columns: ${({ isHomepage }) => {
    return isHomepage
      ? "repeat(auto-fill, minmax(250px, 1fr))"
      : "repeat(auto-fill, minmax(220px, 1fr))";
  }};
  grid-gap: ${({ gridGap }) => gridGap + "px"};
  grid-auto-rows: ${({ gridRows }) => gridRows};
`;

const Masonry = (props) => {
  const { gallery, homepage, scrollPosition } = props;
  const [images, getPhotos] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [gridGap, changeGap] = useState(10);
  // eslint-disable-next-line no-unused-vars
  const [gridRows, changeRows] = useState(0);
  const [loaded, updatedLoaded] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        let result = await API.get(
          homepage ? `/api/image?homepage=1` : `/api/image?gallery=${gallery}`
        );
        getPhotos(result.data);
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      }
    };
    getData();
  }, [gallery, homepage]);
  if (loaded > images.length) {
    updatedLoaded(0);
  }

  let imageList = images.map((image) => (
    <PhotoContainer
      key={image.idPhotos}
      id={image.idPhotos}
      gridGap={gridGap}
      gridRows={gridRows}
      loaded={loaded}
      gallery={gallery}
      scrollPosition={scrollPosition}
      updatedLoaded={updatedLoaded}
      imageHeight={Number(image.photoHeight)}
    />
  ));

  return (
    <Content gridRows={gridRows} gridGap={gridGap} isHomepage={homepage}>
      {imageList}
    </Content>
  );
};
export default trackWindowScroll(Masonry);
