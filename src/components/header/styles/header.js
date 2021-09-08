import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavigationBar = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 45px 20% 0px 0px;
  justify-content: flex-end;
  background-color: transparent;
  z-index: 10;
`;

export const NavigationBtn = styled.button`
  position: relative;
  border: none;
  padding: 0;
  background: none;
  color: #C7C3C0;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;

  &:focus {
    color: #899E53;
    &::after {
      position: absolute;
      content: "";
      top: 120%;
      left: 0px;
      width: 100%;
      height: 3px;
      background-color: #899E53;
    }
  }

  &:hover {
    color: #899E53;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;