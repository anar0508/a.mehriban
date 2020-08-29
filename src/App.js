import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import { store } from "./Store/store";
import FullPhoto from "./Components/Common/FullPhoto";
import "./index.css";
import Content from "./Components/Common/Body";
import HeaderBar from "./Components/Common/HeaderBar";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 96%;
  margin: 20px auto;
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`;

const App = () => {
  const [screen, setScreenWidth] = useState(window.innerWidth);
  const [isExpanded, setExpanded] = useState(false);
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const isFull = globalState.state.isFull;

  const updateWidth = () => {
    setScreenWidth(window.innerWidth);
    if (window.innerWidth > 600) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return isFull ? (
    <Route path="/photo/:id" exact>
      <FullPhoto />
    </Route>
  ) : (
    <Main>
      <HeaderBar
        screen={screen}
        isExpanded={isExpanded}
        setExpanded={setExpanded}
      />
      <Content />
    </Main>
  );
};

export default App;
