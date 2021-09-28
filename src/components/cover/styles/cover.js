import styled from 'styled-components/macro';
import { Link as LinkScroll } from 'react-scroll';

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-self: flex-end;
  align-items: flex-start;
  width: 80%;
  bottom: 20%;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ImageBackground = styled.img`
  position: absolute;
  width: 100%;
  opacity: 0.6;
  z-index: 0;
`;

export const Video = styled.img`
  width: 100%;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const Name = styled.h1`
  margin-bottom: 15px;
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 45px;
    margin-bottom: 10px;
    color: white;
  }
`;

export const Description = styled.p`
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 17px;
    color: white;
  }
`;

export const More = styled(LinkScroll)`
  color: currentColor;
  border: currentColor;
  border-style: solid;
  border-width: 1px;
  padding: 10px 45px;
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: all ease 0.2s;

  @media(hover: hover) and (pointer: fine) {
    &:hover{
      transform: scale(1.1);
    }
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 5px 30px;
    margin-top: 15px;
    color: white;
  }
`;