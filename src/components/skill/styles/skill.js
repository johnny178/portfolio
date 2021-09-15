import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 70px;

  @media (max-width: 600px) {
    padding: 0px 0px 30px;
  }
`;

export const Content = styled.div`
  width: 80%;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-gap: 2.5em 2.2em;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${({ color }) => color};
  font-weight: 700;
  font-size: 1.2em;
  text-transform: uppercase;
  margin-bottom: 0.8em;
`;

export const Paragraph = styled.p`
  line-height: 20px;
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 2em;
  padding-right: 1em;
  background-color: #30303E;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${({ percent }) => percent}%;
  background-color: ${({ color }) => color};
`;

export const PercentText = styled.p`
  margin-left: 1em;
  color: ${({ color }) => color};
  font-weight: 700;
`;