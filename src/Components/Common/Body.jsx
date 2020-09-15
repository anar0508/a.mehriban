import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Gallery from '../Galleries/Galleries';
import AboutMe from '../AboutMe/AboutMe'
import "../../index.css";

const Section = styled.section`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    width: 90%;
    margin: 0 0 0 280px;
  }
`;

const Content = (props) => {


  return (
      <Section>
        <Route path="/" exact>
          <Gallery homepage={true}  />
        </Route>
        <Route path="/login" exact>
          <Gallery page="login!" />
        </Route>
        <Route path="/cabinet" exact>
          <Gallery page="cabinet!" />
        </Route>
        <Route path="/gallery/:type" exact>
          <Gallery homepage={false} />
        </Route>
        <Route path="/about" exact>
          <AboutMe />
        </Route>
      </Section>
  );
};

export default Content;

