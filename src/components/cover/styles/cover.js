import styled from 'styled-components/macro';


export const CoverContainer = styled.div`
  display: flex;
  position: absolute;
  /* padding: 60% 0px 20vh 15vw; */
  flex-direction: column;
  align-items: flex-start;
  top: 60%;
  left: 15%;
`;

export const ImageBackground = styled.img`
  position: absolute;
  /* height: 100vh; */
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
`;

export const Description = styled.p`
  font-size: 20px;
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
`;