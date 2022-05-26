export const skillData = [
  {
    name: 'React',
    content: `Hooks / Redux / Rematch
    Styled Component
    React Native`,
    id: 0,
    color: '#DB7013',
  },
  {
    name: 'Framework',
    content: `Material UI
    Bootstrap`,
    id: 1,
    color: '#CEDB12',
  },
  {
    name: 'Basic',
    content: `JavaScript / TypeScript: ESNext
    HTML5: Pug
    CSS3: SCSS / SASS
    `,
    id: 2,
    color: '#33DAA4',
  }
];

export const navigationBar = [
  { name: 'home', id: 0 },
  { name: 'about', id: 1 },
  { name: 'skills', id: 2 },
  { name: 'experience', id: 3 },
  { name: 'portfolio', id: 4 },
  { name: 'contact', id: 5 },
];

export const experienceData = [
  {
    name: 'React Native Developer',
    time: '2020/02 - 2022/02',
    company: '露天市集國際資訊股份有限公司',
    contentList: [
      '撰寫露天市集APP，使用React Native進行開發頁面與組件，包含通知中心頁、領券頁、商品篩選等功能',
      '將原生TOTP二階段APP由Swift改寫為RN併入現有露天APP中，引入需要的新套件進行開發，例如產生TOTP驗證碼、讀取QRcode內容的library',
      '處理RN 59 to 63升版，替專案引入swipe-list-view套件，解決套件版本不相容的問題',
      '維護商品搜尋流程，替搜尋頁廣告排序算法更新並優化，刪除30%冗餘程式碼',
      '替產品埋站上pv, click, impress tracking code'
    ],
    color: '#DB7013',
    id: 1,
  },
  {
    name: 'iOS RD intern',
    time: '2018/03 - 2018/12',
    company: '精誠資訊 SYSTEX',
    content: `- 開發壽險公司APP專案
      主要處理保單頁面功能，其中包含APP畫面的製作與背後邏輯觸發事件，篩選保單查詢功能、選單tab切換功能、串接API，以及因應不同格式動態顯示的TableView......等，編寫程式語言為Swift。

      - 維護證券APP專案
      編寫Objective - C修改iPhone X解析度不相容問題，更新元件以符合所需格式。協助專案進行壓力測試以防止記憶體錯誤與程式不正常顯示的發生，建立iOS、Android自動化測試UITest，主要用Swift與JAVA撰寫腳本，讓程式自動去照指定的測試案例去執行，並且驗證畫面的某些數值、驗證頁面是否正確，以節省每次測試所需的人力時間。
    `,
    color: '#CEDB12',
    id: 2,
  }
]

export const portfolioData = [
  {
    id: 'Taiwan Route',
    image: 'https://github.com/johnny178/taiwan-route/raw/master/CoverImage.jpg',
    title: 'Taiwan Route',
    content: '主要功能: ',
    feature: ['篩選市區並查詢公車路線', '預估到站時間', '公車GIS動態地圖'],
    technology: ['React', 'Styled Components', 'React-Router', 'Leaflet'],
    color: '#CEDB12',
    demoUrl: 'https://taiwan-route.vercel.app/',
    githubUrl: 'https://github.com/johnny178/taiwan-route'
  },

  {
    id: 'YoTW',
    image: 'https://github.com/johnny178/YoTW/raw/master/screenshot.jpg',
    title: 'YoTW',
    content: '搜尋公車路線並查看動態公車地圖',
    feature: ['查詢台灣景點、美食、旅宿、活動', '地區篩選查詢', '附近地點推薦', '查看Google map位置'],
    technology: ['React', 'Styled Components', 'React-Router'],
    color: '#DB7013',
    demoUrl: 'https://johnny178.github.io/YoTW/',
    githubUrl: 'https://github.com/johnny178/YoTW'
  }
];

export const getCoverImage = width => {
  return `https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${width}&q=80`
}