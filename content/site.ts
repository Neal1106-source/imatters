export const brand = {
  name: 'iMatters 職引力',
  description: '我們是一個幫助人重新看見自己價值的個人品牌系統，透過形象管理、個人品牌強化，協助職場人提升職場競爭力。',
  bookingUrl: null as string | null,
  contactEmail: null as string | null,
  parentUrl: null as string | null,
  logo: null as string | null,
  photos: {
    hero: null as { src: string; alt: string } | null,
    method: null as { src: string; alt: string } | null,
  },
  consultants: [] as { name: string; role: string; bio: string; photo: string }[],
};

export const services = [
  { id: 'image', number: '01', english: 'IMAGE CONSULTATION', title: '形象諮詢', intro: '讓外在呈現，與內在實力一致。', description: '從身形診斷與測色開始，探索適合自己的色彩、版型與整體風格。讓每一次出場，都更自在。', duration: '單次 1–1.5 小時', format: '實體・個別・小包廂', for: '準備面試、升遷，或想重新認識自己風格的你。', details: ['身形診斷：理解自己的線條與比例。', '測色：探索適合自己的色彩方向。', '形象諮詢：將個人風格與職場情境連結。'] },
  { id: 'wardrobe', number: '02', english: 'WARDROBE EDIT', title: '衣櫥管理', intro: '從已經擁有的，找到新的可能。', description: '理解穿衣風格、生活情境與現有衣櫥，重新整理搭配邏輯。少一點選擇的困擾，多一點適合自己的組合。', duration: '3 小時', format: '實際進行安排於諮詢時確認', for: '衣服不少，卻總覺得沒有衣服可穿的你。', details: ['盤點現有衣櫥與日常穿衣需求。', '探索可以保留與重新搭配的單品。', '依預算與生活情境，討論實用的添購方向。'] },
  { id: 'presence', number: '03', english: 'PERSONAL PRESENCE', title: '儀態訓練', intro: '讓你的專業，有自在的表達。', description: '將形象整理延伸到儀態與整體呈現，練習更適合自己的表達方式。具體內容與進行安排於諮詢時確認。', duration: '時間與次數於諮詢時確認', format: '依個別需求討論', for: '希望提升職場呈現與表達自信的你。', details: ['依需求討論儀態與職場呈現方向。', '服務內容、時間與準備事項於預約前確認。'] },
  { id: 'accompaniment', number: '04', english: 'GROW WITH YOU', title: '持續陪跑', intro: '把改變，慢慢變成日常。', description: '以持續的陪伴，讓形象與個人品牌的整理走進生活。在不同階段，重新看見自己的需要。', duration: '一年・每季一次', format: '合作內容與方式於諮詢時確認', for: '希望持續整理形象、累積自信與自我成長的你。', details: ['每季一次，持續檢視不同階段的需求。', '合作範圍與安排於開始前共同確認。'] },
];

export const pending = ['正式 Logo 原始檔與使用規範', '首屏真實人物照片、方法區測色／諮詢照片與公開授權', 'Google 表單預約網址及通知流程驗證', '正式聯絡管道、個資管理者與資料權利申請方式', '資料保存期限、Google 表單個資告知與隱私審查', '取消期限、退款比例、手續費與處理時程', '儀態訓練與陪跑的具體範圍、場地及準備事項', '彩虹四型測色系統使用資格與授權確認', '顧問真實資料及照片（提供前隱藏人物介紹）', '先前完整首頁文案（本輪未提供，現有文案為需求表衍生草稿）', '正式網域、分享圖與人工 Final Review'];
