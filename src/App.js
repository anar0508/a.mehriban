import React, { useEffect, useState } from "react";
import "./index.css";
import Content from "./Components/Common/Content";
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
    <Main>
      <HeaderBar screen = {screen} isExpanded={isExpanded} setExpanded={setExpanded}/>
      <Content/> 
    </Main>
  );
};

export default App;


