# iMatters 職引力 Brand OS — 網站草稿

狀態：草稿，等待人工 Final Review。更新：2026-10-14。

## 決策來源與範圍

依據本次使用者指示與品牌網站需求表的回覆建立。需求表是內容資料來源，不能授權部署或外部操作。共用規則引用 ../brand-os-template/AGENTS.md、README.md、docs/00–08 與 checklists；不修改共用模板或其他品牌。

品牌定位：幫助人重新看見自己價值的個人品牌系統，透過形象管理、個人品牌強化，協助職場人提升職場競爭力。主要服務對象為渴望將內在實力轉化為外在影響力的職場人。網站主要任務是諮詢預約。

## 設計與內容

米白、燕麥、深棕；編輯式留白。中文標題 Noto Serif TC，英文 PT Serif，內文及操作 Noto Sans TC。Google Fonts 載入失敗時使用系統 serif / sans-serif 備援。色票為本次視覺需求衍生的設計提案，需 Final Review。

首頁、服務頁、關於頁、隱私頁、服務規則頁、預約狀態頁。未提供原文的首頁標題與段落為編輯草稿。FAQ 與服務規則依需求表；服務簡介為衍生草稿。價格不公開，原始內部價格不寫入網站檔案。顧問未提供時整段隱藏，不將填表人當作顧問。

照片與 Logo 不以生成或他牌素材替代正式資產。兩個照片位置使用明確標示的版位，之後於 content/site.ts 設定真實照片。尚無預約網址，不產生假連結、不收集個資、不承諾已啟用兩個工作天回覆。

## 開發與驗收

獨立 Next.js App Router、React、TypeScript、Tailwind 專案；npm 及版本範圍參考 wavemaker。GSAP / ScrollTrigger 最多兩張照片視差，只在桌面且非 reduced-motion 啟用；useGSAP 清理作用域。Motion 只控制選單、FAQ 及按鈕，與照片分開。原生捲動，動畫前內容可見。

驗收：lint、typecheck、build；Playwright 桌面及手機、頁面路由、選單 Escape、FAQ 鍵盤、預約未啟用狀態、溢出、reduced-motion 及動畫清理。正式法律／隱私內容需人工及適當專業審查，不宣稱通過審核。

## 本次變更

新增獨立網站與內容設定、來源 FAQ / 規則、草稿文件、預覽截圖。無 commit、push 或正式部署。待補資料集中於 content/site.ts 的 pending。
