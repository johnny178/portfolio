export const skillData = [
  {
    name: 'web development',
    content: `React, React-Router, Context, Hooks, Redux, Thunk
    Javascript, TypeScript
    Styled-Component
    HTML, CSS
    API connection, Git Version control`,
    id: 0,
    color: '#DB7013',
  },
  {
    name: 'mobile development',
    content: `React Native
    iOS development(Swift)`,
    id: 1,
    color: '#CEDB12',
  },
  {
    name: 'backend development',
    content: `C++, Python
    Firebase
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
    name: 'Frontend Developer',
    time: '2022/02 - Now',
    company: '三維人股份有限公司 3drens',
    content: '',
    color: '#DB7013',
    id: 0,
  },
  {
    name: 'React Native Developer',
    time: '2020/02 - 2022/02',
    company: '露天市集國際資訊股份有限公司',
    content: `iOS及Android的APP開發與維護
    主要參與露天app頁面與元件的開發，像是通知中⼼⾴、領劵⾴、商品篩選⾴...等，以及維護紀錄使用者操作行為的功能。
    
     - TOTP⼆階段認證APP改版專案
     將現有Swift專案改寫為React Native
    1. 抓取伺服器時間矯正錯誤的本機時間、產⽣TOTP驗證碼、掃描QRcode並解析資料 
    2. bridge原⽣code去請求相機權限
    3. 本地化儲存⾦鑰資料
    4. webView相關處理`,
    color: '#CEDB12',
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
    color: '#33DAA4',
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