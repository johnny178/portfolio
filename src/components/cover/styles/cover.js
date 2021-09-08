import styled from 'styled-components/macro';


export const CoverContainer = styled.div`
  display: flex;
  position: relative;
  padding: 60vh 0px 0px 15vw;
  flex-direction: column;
`;

export const ImageBackground = styled.img`
  position: absolute;
  height: 100vh;
  width: 100%;
  opacity: 0.6;
  z-index: 0;
`;

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
  display: inline-block;
  color: white;
  background-color: red;
`;