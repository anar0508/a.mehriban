import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../../Store/store";
import styled from "styled-components";
import "../../index.css";

const Container = styled.div`
  grid-row-end: ${(props) => "span " + props.rowSpan};
  position: relative;
  img {
    width: 100%;
    z-index: 1;

  }
  svg {
    display: none;
  }
  &:hover img {
      opacity: 0.6;
      transition-duration: 0.5s;
    }
    &:hover svg{
      transition-duration: 0.5s;
      display: block;
      position: absolute;
      left: 45%;
      top: 46%;
      min-width: 200px;
      color: #000000;
      z-index: 1;
    }
  }
`;

const PhotoContainer = (props) => {
  const {
    id,
    gridGap,
    gridRows,
    loaded,
    updateLoaded,
    imageHeight,
    gallery,
  } = props;
  const [height, setHeight] = useState(Math.ceil(imageHeight / 10));
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const targetRef = useRef();
  let rowSpan;
  const updateSize = () => {
    if (targetRef.current) {
      setHeight(targetRef.current.offsetHeight);
      rowSpan = Math.ceil(
        (targetRef.current.offsetHeight + gridGap) / (gridRows + gridGap)
      );
    }
  };
  const handleClick = () => {
    dispatch({
      type: "TOGGLE_FULL_PHOTO",
      payload: { gallery: gallery, id: id },
    });
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  rowSpan = Math.ceil((height + gridGap) / (gridRows + gridGap));

  return (
    <Container rowSpan={rowSpan} >
      <Link to={`/photo/${id}`} onClick={handleClick}>
        <img
          ref={targetRef}
          alt="Description"
          src={`/api/image/${id}?photoVersion=resized`}
          onLoad={() => {
            updateSize();
            updateLoaded(loaded + 1);
          }}
        />

        <svg
          width="48"
          height="48"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
        </svg>
      </Link>
    </Container>
  );
};
export default PhotoContainer;
