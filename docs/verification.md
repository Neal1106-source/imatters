# 本機驗證紀錄

日期：2026-10-14（Asia/Taipei）。狀態：草稿，等待人工 Final Review。

## 建置與依賴

- `npm install` 成功；獨立 package-lock.json 已產生。
- `npm run lint`：通過，0 錯誤、0 警告。
- `npm run typecheck`：通過。
- 最終 `npm run build`：通過，全部頁面靜態預先渲染。建置階段 lint 與型別檢查通過。
- Next.js 15.5.27、React 19.3.0、TypeScript 5.9.3、Tailwind 4.3.3、GSAP 3.15.0、@gsap/react 2.1.2、Motion 14.2.0。使用相鄰專案的版本範圍，不複用其 node_modules。
- Windows 沙箱中 webpack 初次無法解析專案 alias；以本機核准權限重跑成功。npm 提示沿用的 ESLint 9 已停止支援，後續維護可另案評估升級；本次 lint 正常。

## Playwright MCP

- 1440px 桌面、375px 手機：首頁、服務、關於、隱私、服務規則、預約六頁皆正常顯示、各一個 main 與 h1，無橫向溢出。
- 768px 首頁：無橫向溢出。
- 六頁 HTTP 200、網站圖示 HTTP 200、不存在頁面 HTTP 404。
- 首屏 CTA 正確導向 `/booking`，顯示「預約服務準備中」；無表單輸入或個資傳送。
- 手機選單開啟後，Escape 關閉且焦點返回選單按鈕。
- FAQ 滑鼠切換、Enter 關閉、aria-expanded 與答案 hidden 狀態正確。
- 服務卡片導向對應服務錨點。
- reduced-motion 模擬：375px / 1440px 下首屏與照片版位可見，保留原生捲動。
- Noto Serif TC、Noto Sans TC、PT Serif 三組字體載入成功。
- 不顯示內部價格、沒有顧問資料時不顯示人物介紹。
- 最終重新載入首頁後瀏覽器 console 0 錯誤、0 警告。初次缺少 favicon 已補上暫用網站圖示。404 路由測試本身產生的預期錯誤不屬網站回歸。

## 動畫與限制

Motion 已接入按鈕、選單與 FAQ 符號，遵循使用者降低動態偏好。GSAP 與 ScrollTrigger 已接入兩個照片位置；useGSAP 限定 scope，matchMedia 僅於 761px 以上且 no-preference 啟用，並在切換／卸載時清理。不同引擎沒有共用動畫元素或屬性。

目前沒有真實照片，Photo 元件不建立照片視差；正式素材設定後，仍需再次驗證裁切、移動範圍、手機停用與卸載清理。不能將本次版位檢查視為正式照片視差的視覺驗收。預約外部流程、實際通知與兩個工作天回覆承諾亦未驗證。

## 截圖

- `artifacts/home-desktop.png`：桌面首頁全頁。
- `artifacts/home-mobile.png`：手機首頁全頁。
- `artifacts/hero-desktop.png` / `hero-mobile.png`：首屏。
- `artifacts/services-desktop.png`：服務頁全頁。
- `artifacts/booking-mobile.png`：預約準備中狀態。

本機預覽 http://127.0.0.1:3001 。保持草稿與 noindex；未執行 commit、push 或部署。未修改 wavemaker、其他子品牌與共用模板。
