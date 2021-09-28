import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 0px 250px;
  align-items: center;

  @media (max-width: 600px) {
    padding: 30px 0px;
  }
`;

export const Content = styled.div`
  width: 80%;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  } 
`;

export const LeftPane = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 2em;

  @media (max-width: 600px) {
    margin-right: 0em;
  }
`;

export const RightPane = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 600px) {
    height: 20em;
    flex: none;
  }
`;

export const Input = styled.input`
  margin-bottom: 1em;
  border: #33313C 1px solid;
  padding: 0.8em;
  text-align: ${({ id }) => id === 'send' ? 'center' : 'left'};
  transition: all 200ms ease;

  &:focus {
    border: ${({ id }) => id !== 'send' && '#FFFF6F 1px solid'};
    animation-name: ${({ id }) => id === 'send' && 'send'};;
    animation-duration: 0.2s;
    animation-timing-function: ease;
  }

  &::placeholder {
    letter-spacing: 1.5px;
    color: currentColor;
  }

  @keyframes send{
    0% {
      border: #33313C 1px solid;
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      border: #33313C 1px solid;
      transform: scale(1);
    }
  }
`;

export const Textarea = styled.textarea`
  flex: 1;
  border: #33313C 1px solid;
  margin-bottom: 1em;
  padding-top: 0.8em;
  padding-left: 1.6em;

  &:focus {
    border: #FFFF6F 1px solid;
  }

  &::placeholder {
    letter-spacing: 1.5px;
    color: currentColor;
  }

  @media (max-width: 600px) {
    padding: 0.8em;
  }
`;

export const Alert = styled.div`
  position: fixed;
  padding: 10px 20px;
  background-color: green;
  text-align: center;
  left: 50vw;
  transform: translate(-50%, -50%);
  animation: ${({ isShowAlert }) => isShowAlert ? 'send 7s' : 'none'};

  @keyframes send{
    0% {
      top: 110vh;
    }
    5% {
      top: 40vh;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;