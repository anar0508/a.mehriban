import React, { useState } from "react";
import styled from "styled-components";
import "../../index.css";
import API from "../../utils/API";

const ContactForm = (props) => {
  const { toggleDisplay } = props;
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [message, changeMessage] = useState("");
  const [isSending, toggleSending] = useState(false);
  const sendMessage = async (e) => {
    e.preventDefault();
    toggleSending(true);
    let messageDate = new Date().toJSON().slice(0, 19).replace("T", " ");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("date", messageDate);
    let response = await API.post("/api/message", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    toggleSending(false);
    +response.status === 200
      ? toggleDisplay([true, true])
      : toggleDisplay([true, false]);
    setTimeout(() => {
      toggleDisplay([false, false]);
      changeName("");
      changeEmail("");
      changeMessage("");
    }, 4000);
  };
  return (
    <form name="contact" onSubmit={sendMessage}>
      <div>
        <input
          type="text"
          required
          placeholder="name"
          value={name}
          onChange={(e) => changeName(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="email"
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
        />
      </div>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        required
        placeholder="message"
        value={message}
        onChange={(e) => changeMessage(e.target.value)}
      ></textarea>
      <input type="submit" value={isSending ? "Sending..." : "Send"} />
    </form>
  );
};

export default ContactForm;
