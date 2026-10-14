import type { Metadata } from 'next';
import { Header, Footer } from '@/components/navigation';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'iMatters 職引力｜你的價值，值得被看見', template: '%s｜iMatters 職引力' },
  description: '透過形象諮詢、衣櫥管理與持續陪跑，重新看見自己的價值，讓外在呈現與內在實力一致。',
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="zh-Hant"><body><a href="#main" className="skip-link">跳至主要內容</a><Header />{children}<Footer /></body></html>;
}
