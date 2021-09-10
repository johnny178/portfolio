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
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-gap: 10px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: orange;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  line-height: 20px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 50px;

  background-color: red;
`;

export const Progress = styled.div``;

export const PercentText = styled.p``;