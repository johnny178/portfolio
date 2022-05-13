import React from 'react'
import { About } from '../components'
import { BlockTitle } from '../components';
import Selfie from '../images/selfie.jpg'

export function AboutContainer() {
  return (
    <About>
      <About.Container id='about'>
        <About.Content>
          <BlockTitle title={'about'} />
          <About.Pane>
            <About.Image src={Selfie} />
            <About.ArticlePane>
              <About.TitleOne>Hello, I am </About.TitleOne>
              <About.TitleTwo>React Developer</About.TitleTwo>
              <About.Article>
                我是林宗毅，畢業自元智大學資訊工程學系，具備超過三年實務開發經驗。熟悉React，擁有開發大型專案的經歷，包含後台CMS及電商APP。
              </About.Article>
              <About.Article>
                在工作上遇到問題會與同事討論，喜歡一起追求乾淨且可維護的程式碼，看到有困難的同事，會以引導式的去幫助一同進步。我的學習能力快速，兩天內就能適應陌生的技術及專案，並且快速地進入開發。我對程式語言有很高的熱忱，只要開始實作新的功能項，就會很專心的投入，享受中間的過程，直到完成目標。
              </About.Article>
              <About.Article>
                我認為，當自己目標明確時，能更清楚地知道自己想要什麼，未來計畫往ReactJS資深網頁前端邁進，趁著年輕時光，去更加挑戰自己，接受新的技術與知識。另外，我也鞭策自己多方涉獵不同的書籍，除了增加軟實力之外，也可以激發自己的創造力。
              </About.Article>
            </About.ArticlePane>
          </About.Pane>
        </About.Content>
      </About.Container>
    </About>
  );
}