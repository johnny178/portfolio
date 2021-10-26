import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 70px;
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

  @media (max-width: 600px){
    flex-direction: column;
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
  margin-right: 35px;

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
  font-size: 1.2em;
`;

export const Paragraph = styled.p`
  margin-top: 2em;
  line-height: 1.5;
  white-space: pre-line;
  margin-bottom: 2em;
`;

export const UnorderedList = styled.ul`

`;

export const List = styled.li`
  margin-bottom: 1em;
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
    margin-top: 1.2em;
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



/*
export const SortBar = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

export const SortBtn = styled.button`
  text-transform: uppercase;
  color: #B4B3BB;
  font-weight: 700;
  flex: ${({ id }) => id.includes('react') ? '2' : '1'};
  border-bottom: 4px solid ${({ pressedType, id }) => pressedType === id ? '#DD7215' : '#302F3C'};
  height: 40px;
  letter-spacing: 3px;
  cursor: pointer;
  transition: all ease 0.2s;

  @media (hover: hover) and (pointer: fine) {
    &:hover{
      color: #fff;
    }
  }
`;

export const Collection = styled.div`
  display: grid;;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media (max-width: 1000px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Works = styled.div`
  cursor: pointer;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;
*/