import styled from "styled-components/macro";

export const Container = styled.button`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 2%;
  left: 2%;
  width: 40px;
  height: 40px;
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
  border-color: white;
  box-shadow: 0px 1px 3px black;
  cursor: pointer;
  z-index: 20;
`;

export const Line = styled.div`
  position: relative;
  height: 1px;
  width: 60%;
  background-color: white;

  &::before { 
    content: "";
    position: absolute;
    height: inherit;
    background-color: inherit;
    width: 100%;
    top: -7px;
    left: 0px;
  }

  &::after { 
    content: "";
    position: absolute;
    height: inherit;
    background-color: inherit;
    width: 100%;
    top: 7px;
    left: 0px;
  }
`;