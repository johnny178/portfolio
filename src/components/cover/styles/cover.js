import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-self: flex-end;
  align-items: flex-start;
  width: 80%;
  /* top: 60%; */
  bottom: 20%;
`;

export const ImageBackground = styled.img`
  position: absolute;
  width: 100%;
  opacity: 0.6;
  z-index: 0;
`;

export const Video = styled.video`
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
    font-size: 35px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const More = styled.button`
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

  @media (max-width: 600px) {
    font-size: 10px;
    padding: 5px 30px;
    margin-top: 15px;
  }
`;