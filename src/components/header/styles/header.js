import styled from 'styled-components/macro';
import { Link as LinkSroll } from 'react-scroll';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavigationBar = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 40px 20% 0px 0px;
  justify-content: flex-end;
  background: ${({ scrollNav }) => (scrollNav ? '#282631' : 'transparent')};
  z-index: 10;
  transition: 800ms background-color ease;

  @media (max-width: 820px) {
    padding: 40px 0px 10px 0px;
    justify-content: center;
  }

  //轉換為sidebar
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 30px 50px 0px;
    width: 100%;
    top: ${({ isPressed }) => isPressed ? '0%' : '-100%'};
    opacity: ${({ isPressed }) => isPressed ? '100%' : '0'};
    height: 100%;
    background: #0d0d0d;
    transition: 300ms all ease;
  }
`;

export const NavigationBtn = styled(LinkSroll)`
  position: relative;
  border: none;
  padding: 0;
  background: none;
  color: #C7C3C0;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;
  height: 30px;

  @media(hover: hover) and (pointer: fine) {
    &:hover{
      color: #FFFF6F;
    }
  }

  &:not(:last-child) {
    margin-right: 20px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex: 1;
    text-align: center;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      margin-right: 0px;
    }
  }

  @media (min-width: 600px){
    color: ${({ scrollNav }) => (scrollNav ? '#C7C3C0' : '#C7C3C0')};

    &.active {
      border-bottom: 3px solid #FFFF6F;
      color: #FFFF6F;
    }
  }
`;