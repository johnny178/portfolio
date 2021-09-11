import styled from "styled-components/macro";

export const HeaderPane = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

@media (max-width: 600px) {
  margin-bottom: 40px;
  }
`;

export const Bullet = styled.div`
  background-color: #fff;
  width: 55px;
  height: 20px;
  margin-right: 30px;
`;

export const Header = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 29px;
  color: white;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;