import styled from "styled-components";
export const Hamburger = styled.button`
  position: absolute;
  top: 27px;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: darkblue;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isExpanded }) => isExpanded ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ isExpanded }) => (isExpanded ? "0" : "1")};
      transform: ${({ isExpanded }) => isExpanded ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ isExpanded }) => isExpanded ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;
