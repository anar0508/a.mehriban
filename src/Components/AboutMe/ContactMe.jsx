import React, { useState } from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
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
        &:focus {
          outline-color: rgb(104, 176, 171);
        }
      }
    }
    textarea {
      width: 100%;
      padding: 10px;
      border: 2px solid rgb(200, 213, 185);
      resize: none;
      &:focus {
        outline-color: rgb(104, 176, 171);
      }
    }
    input[type="submit"] {
      text-align: center;
      width: 20%;
      margin: 20px auto;
      padding: 10px;
      background-color: rgb(200, 213, 185);
      color: white;
      &:active {
        outline-color: rgb(104, 176, 171);
      }
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
      margin: 0;
      text-align: left;
      align-self: baseline;
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
      width: 80%;
    }
  }
`;

const ContactMe = (props) => {
  const [displayResponse, toggleDisplay] = useState([false, false]);

  return (
    <Contact>
      <h2>Contact me</h2>
      {!displayResponse[0] ? (
        <ContactForm toggleDisplay={toggleDisplay} />
      ) : (
        showMessage(displayResponse)
      )}
    </Contact>
  );
};

export default ContactMe;
const showMessage = (displayResponse) => {
  return (
    <p>
      {displayResponse[1]
        ? "Thank you for message. I will contact you soon"
        : "Something went wrong. Please try again"}
    </p>
  );
};
