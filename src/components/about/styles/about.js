import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 80px 0px;
`;

export const HeaderPane = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
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
`;

export const Pane = styled.div`
  display: flex;
  margin: auto;
`;

export const Image = styled.img`
  width: 25%;
  margin-right: 20px;

  //-----
  margin-top: 10px;
`;

export const ArticlePane = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitlePane = styled.div`
  display: flex;
`

export const TitleOne = styled.h2`
  font-size: 40px;
  color: #fff;

  &::after {
    content: 'Johnny Lin';
    color: #9BBA65;
    font-size: 45px;
    font-weight: 500;
  }
`;

export const TitleTwo = styled.h2`
  font-size: 40px;
  color: #fff;

`

export const Article = styled.p`
  margin-top: 20px;
  line-height: 22px;
`;