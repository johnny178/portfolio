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
              <About.Article>&emsp;&emsp;我是林宗毅，出生於高雄市，畢業自元智大學資訊工程學系，大學期間曾到公司去實習擔任iOS工程師，開發Objective-C與Swift專案，現任於露天市集擔任APP工程師，主要用React Native開發Hybrid App，除了開發專案內各個頁面與功能外，也曾經將現有的Swift專案轉成React Native。</About.Article>
              <About.Article>&emsp;&emsp;在工作上遇到問題會與同事討論，喜歡一起追求最省記憶體、有效率的寫法，看到有困難的同事，會以引導式的去幫助一同進步。我的學習能力快速，在一個月將訓練題做完後，並將web版的通知中心頁改成React Native版以成功交付工作。</About.Article>
              <About.Article>&emsp;&emsp;我認為，當自己目標明確時，能更清楚地知道自己想要什麼，因此我誠心希望透過貴公司的工作機會，能夠有更多實戰的機會，趁著年輕時光，去更加挑戰自己。另外，我也鞭策自己多方涉獵不同的書籍，除了增加軟實力之外，也可以激發自己的創造力。</About.Article>
            </About.ArticlePane>
          </About.Pane>
        </About.Content>
      </About.Container>
    </About>
  );
}