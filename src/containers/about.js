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
              <About.Article>&emsp;&emsp;我是林宗毅，出生於高雄市，畢業自元智大學資訊工程學系，有兩年React框架開發經驗，現任於露天市集擔任APP工程師，主要用React Native開發Hybrid App，除了開發專案內各個頁面與功能外，也曾經將公司現有的Swift專案轉成React Native。</About.Article>
              <About.Article>&emsp;&emsp;在工作上遇到問題會與同事討論，喜歡一起追求最省效能、有效率的寫法，看到有困難的同事，會以引導式的去幫助一同進步。我的學習能力快速，兩周將訓練題做完後，就將原web版的通知中心頁改成React Native版以成功交付工作。我對程式語言有很高的熱忱，只要開始實作新的功能項，就會很專心的投入，享受中間的過程，直到完成目標。</About.Article>
              <About.Article>&emsp;&emsp;我認為，當自己目標明確時，能更清楚地知道自己想要什麼，未來計畫往ReactJS網頁前端前進，趁著年輕時光，去更加挑戰自己，接受新的技術與知識。另外，我也鞭策自己多方涉獵不同的書籍，除了增加軟實力之外，也可以激發自己的創造力。</About.Article>
            </About.ArticlePane>
          </About.Pane>
        </About.Content>
      </About.Container>
    </About>
  );
}