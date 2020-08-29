import React, { useState, useEffect, useContext } from "react";
import { store } from '../../Store/store';
import styled from "styled-components";
import API from "../../utils/API";
import "../../index.css";

const Slider = styled.section`
display: flex;
width: 100%;
height: 100vh;
background-image: ${({ id }) => `url(http://localhost:8000/api/image/${id}?photoVersion=watermark)` }; 
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
background-size: contain

`;

const FullPhoto = (props) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const {gallery, id} = globalState.state.previousPage;
    

  return (
    <Slider id = {id}>
      hi
    </Slider>
  );
};
export default FullPhoto;
