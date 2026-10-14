import type { Metadata } from 'next';
import Link from 'next/link';
import { brand } from '@/content/site';
import { Eyebrow } from '@/components/ui';
export const metadata: Metadata = { title: '預約諮詢' };
export default function Booking() { return <main id="main" className="booking-page"><Eyebrow>LET’S BEGIN</Eyebrow><h1>從你的需要，<br />開始對話。</h1>{brand.bookingUrl ? <><p>你將前往 Google 表單填寫預約需求。<br />請先閱讀表單中的個資告知、服務內容與費用。</p><a className="button" href={brand.bookingUrl} target="_blank" rel="noopener noreferrer">前往預約表單 <span>↗</span></a></> : <div className="booking-status" role="status"><span className="tiny-dot" /><h2>預約服務準備中</h2><p>我們正在準備正式預約表單。<br />目前尚未開放預約，本站不收集或傳送個人資料。</p><Link className="text-link" href="/services">先了解服務項目 →</Link></div>}<div className="booking-notes"><Link href="/privacy">隱私說明 ↗</Link><Link href="/terms">取消、退款與服務規則 ↗</Link></div></main>; }
