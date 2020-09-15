import HamburgerButton from "../Common/HamburgerButton";
import React from "react";
import Logo from "../../images/letter-m.svg";
import Menu from "../Common/Menu";
import SocialLinks from "./SocialLinks.jsx";
import styled from "styled-components";
import "../../index.css";

const Header = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    .logo-container{
      width: 50px;
      margin-left: 20px;
      padding: 20px 0 30px 0;
    }
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 280px;
    padding: 5px;
    height: 100%;    
    z-index: 1050;
    .logo-container{
      width: 100px;
      margin: 20px auto 0;
      padding: 0 0 50px 0;
    }
    }
`;

const HeaderBar = (props) => {
  const { screen, isExpanded, setExpanded } = props;
  return (
    <Header>
      <nav>
        <div className='logo-container'>
          <img src={Logo} alt="logo" />
        </div>
        {mobileChecker(screen, isExpanded, setExpanded)}
      </nav>
      {(isExpanded || screen > 600) && <Menu />}
      {(isExpanded || screen > 600) && <SocialLinks/>}
    </Header>
  );
};

export default HeaderBar;

function mobileChecker(screen, isExpanded, setExpanded) {
  return Number(screen) < 600 ? (
    <HamburgerButton isExpanded={isExpanded} toggleExpanded={setExpanded} />
  ) : (
    ""
  );
}
