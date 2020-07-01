import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import PhotoContainer from './PhotoContainer';
import "../../index.css";

const Content = styled.div`
  column-gap: 15px;
  column-count: 1;
  width: 100%;

@media only screen and (min-width: 768px) and (max-width: 1023px)  {
    column-count: 3;
  
}
@media only screen and (min-width: 1024px) {
  column-count: 3;
}

`;

const HomePage= (props) =>{
const [images, getPhotos] = useState([]);
  useEffect( () => {
  fetch('/api/images').then(res => res.json()).then(res => getPhotos(res))
  }, []);
  let imageContainers = images.map(image=> <PhotoContainer imageId={image}/>) 
  return (
    <Content>
      {imageContainers}
    </Content>
  );
}
export default HomePage;
