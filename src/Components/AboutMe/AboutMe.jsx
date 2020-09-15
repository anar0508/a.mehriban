import React, { useState } from "react";
import styled from "styled-components";
import MePart from "../AboutMe/MePart";
import ContactMe from "../AboutMe/ContactMe";
import "../../index.css";

const AboutMeContainer = styled.section`
  margin: 0 auto;
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const AboutMe = (props) => {
  return (
    <AboutMeContainer>
      <MePart />
      <ContactMe />
    </AboutMeContainer>
  );
};

export default AboutMe;
