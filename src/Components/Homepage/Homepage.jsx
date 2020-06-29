import React from "react";
import example from '../../images/collage.jpg';
import styled from 'styled-components';
import "../../index.css";

const Content = styled.div`
display: flex; 
flex-direction: column; 
flex-wrap: wrap;
div{
  width: 98%;
  margin: 0 auto;
  img{
    width: 100%;
  }
}
`;

const HomePage= (props) =>{
  return (
    <Content>
      <div><img src= {example} alt="example"/> </div>
    </Content>
  );
}
export default HomePage;
