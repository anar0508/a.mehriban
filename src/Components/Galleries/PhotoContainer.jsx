import React from "react";
import styled from "styled-components";
import { LazyLoadImage} from "react-lazy-load-image-component";
import "../../index.css";

const Container = styled.div`
  img {
    width: 100%;
    z-index : 1;
  }
  div{
    z-index : 3;
    position: absolute;
  }
`;

const PhotoContainer = (props) => {
  const { imageSrc, scrollPosition } = props;
  return (
    <Container>
      <LazyLoadImage
        alt='Description'
        src={`/api/image?name=${imageSrc}`} 
        scrollPosition={scrollPosition}
      />
    </Container>
  );
};
export default PhotoContainer;
