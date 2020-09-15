import React, { useState } from "react";
import styled from "styled-components";
import "../../index.css";

const Contact = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  h2 {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    color: #68b0ab;
    padding: 20px;
  }
  form {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 10px;
      input {
        border: 2px solid rgb(200, 213, 185);
        width: 47%;
        height: 40px;
        padding: 20px 5px;
      }
    }
    textarea {
      width: 100%;
      padding: 10px;
      border: 2px solid rgb(200, 213, 185);
    }
  }
  @media screen and (min-width: 600px) {
    align-items: center;
    .imgContainer {
      width: 35%;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    h2 {
      width: 55%;
      text-align: left;
      color: #68b0ab;
    }
    p {
      width: 100%;
      text-align: justify;
      padding-left: 2%;
    }
    hr {
      margin: 0 auto;
      height: 5px;
      margin: 40px 0;
      background-color: rgb(200, 213, 185);
      width: 80%;
    }
  }

  @media screen and (min-width: 750px) {
    p {
      width: 60%;
    }
  }
`;

const ContactMe = (props) => {
  return (
    <Contact>
      <h2>Contact me</h2>
      <form action="post" name="contact">
        <div>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
        </div>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="message"
        ></textarea>
        <input type="submit" value="Send"/>
      </form>
    </Contact>
  );
};

export default ContactMe;
