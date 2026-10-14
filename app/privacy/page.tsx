import type { Metadata } from 'next';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui';
export const metadata: Metadata = { title: '隱私說明' };
export default function Privacy() { return <main id="main" className="legal-page"><Eyebrow>PRIVACY & TRUST</Eyebrow><h1>隱私說明</h1><p className="legal-notice">草稿・更新於 2026 年 10 月 14 日。正式個資告知與聯絡方式尚待確認，需人工及適當專業審查。</p><section><h2>目前網站的資料處理</h2><p>此網站為本機預覽草稿，沒有啟用預約表單、分析追蹤或付款功能，不收集或傳送預約個人資料。網站使用 Google Fonts 載入字體；瀏覽器會向 Google 的字體服務發出連線請求。網站未主動設定追蹤 Cookie。</p></section><section><h2>未來預約與服務安排</h2><p>正式預約預計使用 Google 表單。啟用前將確認資料收集者、蒐集目的、資料項目、保存期限、利用對象及方式、當事人權利與申請管道；以正式表單中的完整告知為準。</p><p>報名資料預計用於活動聯繫、服務安排及相關行政作業。未經當事人同意或無其他合法依據，不會任意公開參與者的個人資料、照片、影片或分享內容。</p></section><section><h2>照片與影像</h2><p>如活動需要攝影、錄影或公開分享，將事先說明使用目的及範圍，並取得必要同意。</p></section><section><h2>聯絡與資料權利</h2><p>正式聯絡管道、個資管理者及資料權利申請方式尚待確認。目前請勿透過此草稿網站提交個人或敏感資訊。</p></section><Link className="text-link" href="/terms">閱讀服務規則 →</Link></main>; }
