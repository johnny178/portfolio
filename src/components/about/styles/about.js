import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0px;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1000px;
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

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  height: 200px;
  margin-right: 20px;
`;

export const ArticlePane = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    align-items: center;
    margin-top: 10px;
  }
`;

export const TitlePane = styled.div`
  display: flex;
`

export const TitleOne = styled.h2`
  font-size: 30px;
  color: #fff;

  &::after {
    content: 'Johnny Lin';
    color: #9BBA65;
    font-size: 35px;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    font-size: 20px;

    &::after {
      font-size: 30px;
    }
  }
`;

export const TitleTwo = styled.h2`
  font-size: 40px;
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`

export const Article = styled.p`
  line-height: 22px;
  margin-bottom: 20px;
`;