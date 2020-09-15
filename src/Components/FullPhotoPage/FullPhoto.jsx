import React, { useState, useContext } from "react";
import { store } from "../../Store/store";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import play from "../../images/play-button.svg";
import close from "../../images/close-button.svg";
import left from "../../images/left-arrow.svg";
import right from "../../images/right-arrow.svg";
import pause from "../../images/pause.svg";
import "../../index.css";

const Slider = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: ${({ id }) =>
    `url(/api/image/${id}?photoVersion=watermark)`};
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: contain;

  .visible {
    opacity: 1;
    transition: opacity 1.3s ease-in-out;
  }
  img:hover {
    transform: scale(1.4);
    opacity:1;
  }
  img:active{
    transform: scale(1.7);
  }
`;

const UpperComponent = styled.div`
  opacity: 0;
  width: 95%;
  margin: 0 auto;
  height: 7%;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: opacity 1s ease-in-out;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      width: 16px;
    }
    span {
      display: inline-block;
      padding-left: 5px;
      color: #c8d5b9;
    }
  }
`;

const LowerComponent = styled.div`
  opacity: 0;
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: opacity 1s ease-in-out;
  margin: 0 auto;
  align-items: center;
  img {
    width: 36px;
  }
`;

const FullPhoto = (props) => {
  const [isVisible, toggleVisibility] = useState(true);
  const [isMouseMoveDisabled, toggleMouseMove] = useState(false);
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const { gallery, id } = globalState.state.previousPage;
  const { photos, isSlidesActive } = globalState.state;
  let ids = photos.map((image) => image.idPhotos);
  let idIndex = Number(ids.indexOf(id));
  let nextId = idIndex + 1 >= ids.length ? ids[0] : ids[idIndex + 1];
  let previousId = idIndex - 1 < 0 ? ids[ids.length - 1] : ids[idIndex - 1];
  let history = useHistory();

  const handleVisibility = () => {
    toggleVisibility(true);
    toggleMouseMove(true);
    setTimeout(() => {
      toggleMouseMove(false);
      toggleVisibility(false);
    }, 5000);
  };

  if (isSlidesActive) {
    setTimeout(() => {
      dispatch({
        type: "NEXT_FULL_PHOTO",
        payload: { gallery: gallery, id: nextId },
      });
      history.push(`/photo/${nextId}`);
    }, 3500);
  }

  return (
    <Slider id={id}  onMouseMove={()=>{ if (isMouseMoveDisabled===false) {handleVisibility()}} }>
      <UpperComponent className={isVisible ? "visible" : ""}>
        <div>
          {isSlidesActive ? (
            <Link
              to={`/photo/${id}`}
              onClick={() => {
                dispatch({
                  type: "END_SLIDES",
                  payload: { gallery: gallery, id: id },
                });
              }}
            >
              <img src={pause} alt="" />
            </Link>
          ) : (
            <Link
              to={`/photo/${nextId}`}
              onClick={(e) => {
                dispatch({
                  type: "START_SLIDES",
                  payload: { gallery: gallery, id: nextId },
                });
              }}
            >
              <img src={play} alt="" />
            </Link>
          )}
          <span>{`${idIndex + 1}/${photos.length}`}</span>
        </div>
        <div>
          <Link
            to={gallery ? `/gallery/${gallery}` : "/"}
            onClick={() =>
              dispatch({
                type: "TOGGLE_FULL_PHOTO",
                payload: { gallery: "", id: "" },
              })
            }
          >
            <img src={close} alt="" />
          </Link>
        </div>
      </UpperComponent>
      <LowerComponent className={isVisible ? "visible" : ""}>
        <div>
          <Link
            to={`/photo/${previousId}`}
            onClick={() => {
              dispatch({
                type: "NEXT_FULL_PHOTO",
                payload: { gallery: gallery, id: previousId },
              });
            }}
          >
            <img src={left} alt="" />
          </Link>
        </div>
        <div>
          <Link
            to={`/photo/${nextId}`}
            onClick={() => {
              dispatch({
                type: "NEXT_FULL_PHOTO",
                payload: { gallery: gallery, id: nextId },
              });
            }}
          >
            {" "}
            <img src={right} alt="" />
          </Link>
        </div>
      </LowerComponent>
    </Slider>
  );
};
export default FullPhoto;
