export const skillData = [
  {
    name: 'web development',
    content: ['HTML & CSS & Javascript', 'Familiar with React, Context, Redux', 'API connection & Version control'],
    id: 0,
    color: '#DB7013',
    percent: 80
  },
  {
    name: 'mobile development',
    content: ['Familiar with React Native', 'iOS development(Swift)'],
    id: 1,
    color: '#CEDB12',
    percent: 90
  },
  {
    name: 'backend development',
    content: ['C++ & Python'],
    id: 2,
    color: '#33DAA4',
    percent: 70
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
    name: 'Mobile Developer',
    time: '2020/2 - Now',
    company: '露天市集國際資訊股份有限公司',
    content: `iOS及Android的APP開發與維護
    主要案⼦有TOTP⼆階段認證APP、通知中⼼⾴、領劵⾴、商品篩選⾴、記錄使⽤者操作⾏為，與現有功能維護。
    
     - TOTP⼆階段認證APP
     將現有Swift專案改寫為React Native
    1. 抓取伺服器時間矯正錯誤的本機時間、產⽣TOTP驗證碼、掃描QRcode並解析資料 
    2. bridge原⽣code去請求相機權限
    3. 本地化儲存⾦鑰資料
    4. webView相關處理
    簡易demo: https://youtu.be/z0arXaiMlsg 

    - 通知中⼼⾴
     串接API顯⽰各種類別的通知資料，下拉刷新，並⽤Redux在有新通知時去更新資料。`,
    color: '#CEDB12',
    id: 0,
  },
  {
    name: 'iOS RD intern',
    time: '2018/3 - 2018/12',
    company: '精誠資訊 SYSTEX',
    content: `- 開發壽險公司APP專案
      主要處理保單頁面功能，其中包含APP畫面的製作與背後邏輯觸發事件，篩選保單查詢功能、選單tab切換功能、串接API，以及因應不同格式動態顯示的TableView......等，編寫程式語言為Swift。
    
      - 維護證券APP專案
      編寫Objective - C修改iPhone X解析度不相容問題，更新元件以符合所需格式。協助專案進行壓力測試以防止記憶體錯誤與程式不正常顯示的發生，建立iOS、Android自動化測試UITest，主要用Swift與JAVA撰寫腳本，讓程式自動去照指定的測試案例去執行，並且驗證畫面的某些數值、驗證頁面是否正確，以節省每次測試所需的人力時間。
    `,
    color: '#33DAA4',
    id: 1,
  }
]

export const portfolioTypes = ['all', 'web', 'react native'];
