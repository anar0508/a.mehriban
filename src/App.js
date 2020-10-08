import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import { store } from "./Store/store";
import FullPhoto from "./Components/FullPhotoPage/FullPhoto";
import "./index.css";
import Content from "./Components/Common/Body";
import HeaderBar from "./Components/Common/HeaderBar";
import LoginPage from "./Components/Admin/LoginPage";
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

  return (
    <>
      <Route path="/">
        <Main>
          <HeaderBar
            screen={screen}
            isExpanded={isExpanded}
            setExpanded={setExpanded}
          />
          <Content />
        </Main>
      </Route>
      <Route path="/photo/:id" exact>
        <FullPhoto />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/admin" exact>
        <Main>
          <HeaderBar
            screen={screen}
            isExpanded={isExpanded}
            setExpanded={setExpanded}
          />
          <Content />
        </Main>
      </Route>
    </>
  );
};

export default App;
