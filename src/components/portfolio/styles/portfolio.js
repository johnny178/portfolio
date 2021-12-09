import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  
  @media (max-width: 600px) {
    padding-bottom: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Pane = styled.div`
  display: flex;
  &:not(:last-child){
    margin-bottom: 5%;
  }

  @media (max-width: 600px){
    flex-direction: column;
    
    &:not(:last-child){
      margin-bottom: 15%;
    }
  }
`;

export const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2em;
  flex: 1;
`;

export const TitlePane = styled.div`
  display: flex;
  align-items: center;
`;

export const Bullet = styled.div`
  background-color: ${({ color }) => color};
  width: 35px;
  height: 35px;
  margin-right: 5%;

  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
    margin-right: 25px;
  }

  @media (max-width: 600px) {
    width: 25px;
    height: 25px;
    margin-right: 15px;
  }
`;

export const Title = styled.h1`
  color: ${({ color }) => color};
  font-weight: 700;
  font-size: 1.5em;
`;

export const Paragraph = styled.h2`
  margin-top: 1.8em;
  line-height: 1.5;
  white-space: pre-line;
  margin-bottom: 1em;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const UnorderedList = styled.ul``;

export const List = styled.li`
  &:not(:last-child){
    margin-bottom: 1em;
  }
`;

export const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  align-items: center;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 8px;

  @media (min-width: 1000px){
    width: 80%;
  }

  @media (max-width: 600px){
    margin-top: 2.5em;
    margin-bottom: 1em;
  }
`;

export const ButtonPane = styled.div`
  display: flex;
`;

export const Button = styled.a`
  border-style: solid;
  border-width: 1px;
  padding: 10px 45px;
  margin-top: 20px;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  margin-right: ${({ id }) => id === 'demo' ? '2em' : '0px'};
  transition: all ease 0.2s;
  text-align: center;
  align-self: center;
  color: #C7C3C0;
  border-color: #C7C3C0;


  @media(hover: hover) and (pointer: fine) {
    &:hover{
      transform: scale(1.1);
    }
  }

  @media (max-width: 600px) {
    transform: scale(1.05);
    margin-top: 15px;
  }

  &:active {
    transform: scale(0.9);
  }
`;