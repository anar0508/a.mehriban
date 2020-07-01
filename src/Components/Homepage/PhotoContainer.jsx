import React from "react";
import styled from "styled-components";
import "../../index.css";

const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
`;

const PhotoContainer = (props) => {
  const { imageId } = props;
  return (
    <Container>
      <img
        src={`/api/image?name=${imageId}`}
        alt="Description"
      />
    </Container>
  );
};
export default PhotoContainer;
