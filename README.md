# iMatters 職引力

獨立品牌網站草稿；本機預覽，等待人工 Final Review。共用規則引用相鄰 `brand-os-template`，未修改其他子品牌。詳見 `docs/brand-os.md`。

## 開發

Node.js 20.9 以上、npm。`npm install` 後執行 `npm run dev`，預覽位址 http://127.0.0.1:3001 。`npm run build` 後可執行 `npm start` 預覽正式建置。

Next.js 15 / React 19 / TypeScript / Tailwind CSS 4。版本範圍及 npm 方式參考 wavemaker；此目錄有獨立 package-lock.json 與依賴。GSAP、ScrollTrigger、@gsap/react 僅控制兩個照片版位；Motion 控制操作按鈕、手機導覽、FAQ 符號。`useGSAP` 清理作用域，桌面才啟用視差，支援 reduced-motion。保留原生捲動與初始可見內容。

## 頁面

- `/` 首頁
- `/services` 服務項目與 FAQ
- `/about` 品牌介紹；顧問資料為空時不顯示人物介紹
- `/privacy` 隱私草稿
- `/terms` 取消、退款與服務規則草稿
- `/booking` 預約入口；網址未提供時顯示準備中，不收集個資

## 品牌維護

`content/site.ts` 集中品牌資料、服務、預約網址、照片、顧問、待補清單。`content/source.json` 為品牌需求表的九組 FAQ 與五組規則，未包含內部價格、填表人個資。

設定照片：在 `brand.photos.hero` / `method` 填 `{src:'/images/檔名.jpg',alt:'具體照片描述'}`，將已授權照片放在 `public/images`。目前版位為明確標示的缺件示意，非顧問照片或正式品牌資產。正式 Logo 尚未提供，導航使用暫用文字識別。

字體：中文標題 Noto Serif TC、英文 PT Serif、內文與操作 Noto Sans TC；以 Google Fonts 載入，有系統字體備援。正式網域未確定，因此未設定 canonical 或社群圖；草稿 metadata 設定 noindex。

預約啟用：確認正式 Google 表單網址、完整個資告知、接收通知與回覆流程後設定 `brand.bookingUrl`。目前不公開「兩個工作天回覆」承諾。網站不加入 Google 地圖、價格、假案例、假評價或未驗證顧問資格。

## 檢查與交付

`npm run lint`、`npm run typecheck`、`npm run build`。瀏覽器驗證與截圖見 `docs/verification.md`、`artifacts/`。待補與 Final Review 清單見 `docs/pending.md`。本次不 commit、push、部署或建立新 Git repository。
