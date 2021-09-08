import React from 'react'
import { About } from '../components'
import Selfie from '../images/selfie.jpeg'

export function AboutContainer() {
  return (
    <About>
      <About.Container>
        <About.HeaderPane>
          <About.Bullet />
          <About.Header >about</About.Header>
        </About.HeaderPane>
        <About.Pane>
          <About.Image src={Selfie} />
          <About.ArticlePane>
            <About.TitleOne>Hello world, I am </About.TitleOne>
            <About.TitleTwo>React Developer</About.TitleTwo>
            <About.Article>Aliquatm porttitor ligula sed diam aliquam, sit amet dapibus ante vestibulum. Fusce fnibus, dui nec mattis fermentum,
              purus arcu auctor elit, at ultricies est odio vel nulla. Quisque accumsan eros quis arcu sagittis, sit amet tempor felis
              ornare</About.Article>
          </About.ArticlePane>
        </About.Pane>
      </About.Container>
    </About>
  );
}