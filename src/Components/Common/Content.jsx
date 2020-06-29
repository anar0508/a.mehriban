import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Homepage from '../Homepage/Homepage';
import "../../index.css";

const Section = styled.section`
  display: flex;
  flex-direction: column;
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
          <Homepage page="Hello there!" />
        </Route>
        <Route path="/login" exact>
          <Homepage page="login!" />
        </Route>
        <Route path="/cabinet" exact>
          <Homepage page="cabinet!" />
        </Route>
        <Route path="/photo/:id" exact>
          <Homepage page="/photo/:id" />
        </Route>
        <Route path="/galery/:type" exact>
          <Homepage page="set!" />
        </Route>
        <Route path="/about" exact>
          <Homepage page="about!" />
        </Route>
        <Route path="/contact" exact>
          <Homepage page="contact!" />
        </Route>
      </Section>
  );
};

export default Content;

