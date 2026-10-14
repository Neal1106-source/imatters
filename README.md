# iMatters 職引力 — 第一版預覽

本專案為靜態網站，原專案為空白。使用 Node.js 產生 HTML，無第三方建置依賴、無後台與資料庫。尚未公開發布。

## 執行

需要 Node.js 20 以上。於專案目錄執行：

```sh
npm run build
npm run check
npm run dev
```

開啟 http://127.0.0.1:4173。停止伺服器按 Ctrl+C。頁面為 `/`、`/services`、`/about`、`/privacy`、`/terms`。

## 維護

- `src/content.mjs`：集中管理品牌、素材、Google 表單、聯絡管道、網域、顧問、案例、政策與內容來源分類。不放任何服務金額。
- `scripts/build.mjs`：頁面結構與本次指定文案。編輯後重新建置。
- `src/style.css`：大地色、編輯式排版、響應式與鍵盤焦點。
- `src/client.js`：選單、預約提示與 CTA 點擊事件。
- `dist/`：產生的可部署網站。不要直接改此目錄。

目前使用提案字標與三個獨立矩形照片佔位，不含真實顧問或客戶照片。字體由 Google Fonts 提供 Noto Serif TC、Noto Sans TC、PT Serif（開源授權）；外部字體不可用時使用系統替代字體。正式需要自架字體時，下載合法字體並保留其授權文件。

照片設定 `assets.hero` / `assets.method` 格式：`{src:'/assets/hero-900.webp',srcset:'/assets/hero-480.webp 480w, /assets/hero-900.webp 900w',alt:'實際照片描述'}`。將已授權照片壓縮成 WebP/AVIF，建立 480/900/1400px 尺寸，置於 `public/assets/`；建置會複製 public。不可將示意人物標成顧問或客戶。

顧問填入 `name/title/bio/photo` 四項才顯示。案例需有 `approved:true`、`title/before/service/after` 才應公開。`contacts` 格式為 `{label,url}`，僅填正式管道。Logo 以 `assets.logo` 的本機資源路徑管理。

表單 URL 僅接受 HTTPS 的 docs.google.com 或 forms.gle。填入 `brand.formUrl` 並建置後才會跳轉。缺少或無效連結時，會顯示提示，沒有假網址或成功訊息。

追蹤擴充：監聽 `window` 的 `imatters:booking-click`，事件 detail 含 `location` 與 `booking_cta_click`。區分 hero、services、footer、navigation、process、各服务頁。這只代表點擊；Google 表單提交與通知必須另外驗證，不得以點擊推算成功提交。目前未接任何分析平台。

## 已完成

五頁網站、指定首頁順序、服務區段連結、手機選單、原生鍵盤 FAQ、具焦點管理的原生 dialog、缺表單提示、SEO 標題描述與分享文字、減少動畫支援、隱藏未完整顧問與案例。預覽保留 `noindex,nofollow`。

## 來源與核稿

需求表確認：品牌名稱、25–55 歲職場族群、專業親切質感、身形與測色方向、實體個別服務、形象諮詢及衣櫥管理時長、每季一次年度陪跑、不公開價格、Google 表單通知及兩個工作天回覆的預定流程、品牌理念與大地色宋體方向。附件價格未寫入前端或 HTML。表單通知流程是需求，尚未實作或驗證。

本次使用者規格優先：Brand Me 子品牌關係、focused 職場定位、四項服務獨立選擇、首頁及 FAQ 指定文案、不放地圖。首頁沒有把天賦探索、體重或彩妝列為服務。

待 Cora 核稿：本次首頁與 FAQ 指定文案、服务頁延伸描述、關於頁 focused 敘述、英文小標、暫用字標與中性插畫、政策草稿。未將提案標為 Cora 已確認事實。Cora 只作需求表填寫人，不推定職務。

## 補件及上線阻擋

必須先完成：

1. 正式 Google 表單 URL、表單個資告知與需求欄位；配置品牌負責人通知，實際送出測試並確認收到通知、回覆流程與表單不宣稱預約完成。
2. 官方聯絡管道、營運主體、個資權利窗口、資料保存期間、使用範圍與 Google 表單相關告知。
3. 政策核稿、取消改期退款細則及確認前的費用說明流程。現有政策只為待核稿草稿，沒有法律審查完成宣稱。
4. 品牌與主要文案核稿、正式網域與 HTTPS、正式版本 SEO 設定。

可保持隱藏的缺件：顧問姓名職稱經歷照片授權、可公開案例及同意。尚待替換：正式 Logo、暖中性色諮詢照片；可由品牌核准暫用中性佔位。彩虹四型資格與使用範圍確認前，不放認證或授權標章。

## 部署

目前只本機預覽，不會自行公開。取得發布指示及完成上線阻擋事項後，執行 build/check，將 `dist` 部署到支援目錄 index.html 與乾淨路徑的靜態主機（例如 Cloudflare Pages、Netlify 或既有品牌主機）。建置指令 `npm run build`、發布目錄 `dist`。驗證 `/services` 等直接存取正常。填入正式 `brand.domain`，移除建置模板的 preview noindex，補正式分享圖片與 sitemap。發布後實測手機、表單、通知與回覆流程。

## 驗證

`npm run check` 檢查五頁、內部連結、metadata、六項 FAQ、案例隱藏與公開資料限制。瀏覽器人工檢查記錄見 `QA.md`。

## 第二版精修

照片位置、尺寸、焦點設定、字體與視差說明見 `PHOTO-GUIDE.md`。
`n2026-10-14：GSAP＋ScrollTrigger 第二版已完成，最新動畫、素材規格及 Playwright 驗證見 V2-DELIVERY.md。首次安裝改用 npm ci，再執行 build/check/dev。
