# 第二版視覺與動畫交付 — 2026-10-14

預覽：http://127.0.0.1:4173/ 。只修改本機，未推送 GitHub、未發布 Vercel。

保留既有五個頁面、品牌文案、四項服務、價格不公開與 Google 表單預約流程。靜態 HTML 架構不需 Motion for React。

## 實作

GSAP 3.13.0 作為 npm 鎖定依賴，build 複製 GSAP/ScrollTrigger 到 dist/vendor，無需 CDN。安裝後以 `npm ci`、`npm run build`、`npm run check`、`npm run dev` 維護。

兩處視差為首屏與方法照片，移除前版的第三個情境佔位，方法照片作為中段視覺焦點。幅度 ±20px、上下 overscan 24px，原生捲動、不 pin、不影響 CTA。1024px 以下或 reduced-motion 停用。

標題、服務卡與流程進場 y:16px、0.5 秒，只在進入視窗時播放一次。畫面外內容沒有預先隱藏，套件失效仍可閱讀。matchMedia revert、pagehide cleanup、AbortController 清理互動監聽；BFCache 恢復重新初始化文件，避免重複綁定。字體載入完成刷新捲動位置。

大標使用 Noto Serif TC（思源宋體同源字體）、正文與操作使用 Noto Sans TC（思源黑體同源字體）、英文使用 PT Serif。Playwright 檢查 loaded FontFaceSet 三組皆載入成功。

## 待補照片

| 用途／集中設定 | 建議尺寸 | 備註 |
| --- | --- | --- |
| 首屏顧問或諮詢互動 `assets.hero` | 1600×2000px，4:5 | 自然光暖中性色，臉部與頭頂留安全空間；需真實身份與使用授權。 |
| 方法測色、診斷或服裝細節 `assets.method` | 1600×1920px，5:6 | 不重複首屏照片，獨立細節構圖。 |
| 顧問人物介紹 `consultant.photo`（可選） | 1200×1500px，4:5 | 姓名、職稱、簡介與授權照片完整才顯示人物欄。 |

照片、alt、srcset、原始尺寸集中於 src/content.mjs。photoLayout 管理桌面／手機焦點與 fit；首屏預設 contain 保留完整人物，方法預設 cover。照片放 public/assets，建立 480/900/1400px WebP，取得素材後按實際臉部位置校準。尚無真實照片，不宣稱人臉裁切已驗收。

## Playwright MCP 驗證

- 桌面 1440×1000、手機 390×844：首屏、方法、服務、最終 CTA 無橫向溢出或空欄；照片層覆蓋容器。
- 桌面照片層隨捲動位移，手機 transform:none。
- FAQ Enter 展開、預約 dialog 與 Escape 關閉、手機選單與服務導覽正常。
- reduced-motion 手機及桌面實測：0 個 ScrollTrigger、照片 transform:none、閱讀內容 opacity:1。
- JavaScript 停用測試：標題與服務卡仍可见，手機無溢出。
- 首頁→關於→返回首頁：Trigger 數量仍 17，沒有疊加。
- 載入與操作後瀏覽器 console error 為 0。
- build、check、client 語法檢查通過。最終 CTA 對比沿用已驗證的深棕／米白配色。

截圖：v2-desktop.png、v2-mobile.png 為完整頁面；v2-desktop-hero.png 為桌面首屏。
