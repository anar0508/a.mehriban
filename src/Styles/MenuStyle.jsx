import styled from "styled-components";
export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  padding-bottom: 10px;
  align-items: center;
  text-align: center;
  li {
    width: 185px;
    padding-bottom: 10px;
    font-size: 18px;
    letter-spacing: 0em;
    cursor: pointer;
    fill: #c8d5b9;
    color: #c8d5b9;
     &:hover {
      transition-duration: 0.25s;
      color: #68b0ab;
      fill: #68b0ab;
      text-decoration: line;
    }
    
    
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
    ul {
    text-align: left;
    position: relative;
    left: 60px;
      list-style: none;
      padding-bottom: 0px;
      -webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      li {
        transition: 1s;
        font-size: 15px;
        &:first-child {
          margin-top: 6px;
        }
        &:last-child {
          padding-bottom: 0px;
        }
      }
    }
  }
  a {
    cursor: pointer;

    fill: #c8d5b9;
    color: #c8d5b9;
    text-decoration: none;
    display: inline-block;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    &:hover {
      color: #68b0ab;
      fill: #68b0ab;
      text-decoration: line;
    }
  }
  @media screen and (min-width: 600px) {
    align-items: flex-start;
    margin-left: 40px;
    text-align: start;
    li {
      font-size: 18px;
      letter-spacing: 0em;
      padding-bottom: 15px;
     ul{
      left: 10px;
     } 
    }
  }
`;
