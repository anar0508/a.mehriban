import React, { useState } from "react";
import styled from "styled-components";
import photo from "../../images/aboutme.png";
import "../../index.css";

const ProfilePart = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  .imgContainer {
    width: 65%;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  h2 {
    width: 100%;
    text-align: center;
    color: #68b0ab;
    padding: 10px;
  }
  p {
      width: 100%;
      text-align: justify;
      padding-left: 2%;
    }
  hr {
    height: 5px;
    margin: 10px 0;
    background-color: rgb(200, 213, 185);
    width: 100%;
  }
  @media screen and (min-width: 600px) {
    align-items: center;
    margin-top: 20px;
    .imgContainer {
      width: 30%;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    h2 {
      width: 50%;
      text-align: left;
      color: #68b0ab;
    }
    p {
      width: 100%;
      text-align: justify;
      padding-left: 2%;
    }
    hr {
      height: 5px;
      margin: 40px auto 30px;
      background-color: rgb(200, 213, 185);
      width: 100%;
    }
  }

  @media screen and (min-width: 750px) {
    p {
      width: 60%;
    }
  }
`;

const MePart = (props) => {
  return (
    <ProfilePart>
      <div className="imgContainer">
        <img src={photo} alt="Mehriban Aliyeva" />{" "}
      </div>
      <h2>Hi, my name is Mehriban!</h2>
      <p>
        If you have restaurant, but menu pictures are disgusting, then you need
        me. I will shoot your dishes more delicious than they actually are.
        Please, contact me via message part below or through social bar in the
        left bar.
      </p>
      <hr />
    </ProfilePart>
  );
};

export default MePart;
