import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 70px;
`;

export const Content = styled.div`
  flex-direction: column;
  width: 80%;
`;

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

  &:hover{
    font-size: 1.1em;
  }
`;

export const Collection = styled.div`
  display: grid;;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-gap: 30px;
`;

export const Works = styled.div`
  background-color: #ff5d0e;
`;