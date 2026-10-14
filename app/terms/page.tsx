import type { Metadata } from 'next';
import source from '@/content/source.json';
import { Eyebrow } from '@/components/ui';
export const metadata: Metadata = { title: '服務規則' };
export default function Terms() { return <main id="main" className="legal-page"><Eyebrow>SERVICE GUIDELINES</Eyebrow><h1>服務規則</h1><p className="legal-notice">依品牌需求表整理的草稿，待人工及適當專業審查。個別服務的取消期限、退款比例、手續費及處理時程，須於正式開放前補齊並明確公告。</p>{source.terms.map(section => <section key={section.title}><h2>{section.title}</h2><ol>{section.items.map(item => <li key={item}>{item}</li>)}</ol></section>)}</main>; }
