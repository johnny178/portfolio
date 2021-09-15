import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 70px;
`;

export const Content = styled.div`
  flex-direction: column;
  width: 80%;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
  grid-gap: 2.5em 2.2em;
`

export const Colunm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Pane = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2.5em;

  @media (max-width: 1260px) and (min-width: 680px){
    flex-direction: column;
    margin-bottom: 1.5em;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 1.5em;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const Bullet = styled.div`
  background-color: ${({ color }) => color};
  width: 40px;
  height: 40px;
  margin-right: 40px;

  @media (max-width: 1000px) {
    width: 35px;
    height: 35px;
    margin-right: 30px;
  }
  
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
`;

export const NameTime = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 40px;
`

export const CareerName = styled.h3`
  color: ${({ color }) => color};
  font-weight: 700;
`;

export const Time = styled.h3`
  color: ${({ color }) => color};
`;

export const Company = styled.h3`
  color: #fff;
  align-self: center;
  font-weight: 700;
  flex-shrink: 1;

  @media (max-width: 1260px) and (min-width: 680px){
    align-self: auto;
    margin-top: 2em;
  }

  @media (max-width: 600px){
    align-self: auto;
    margin-top: 2em;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.5;
  white-space: pre-line;
  align-self: flex-start;
`;