'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { brand } from '@/content/site';

const links = [{ href: '/about', label: '關於職引力' }, { href: '/services', label: '服務項目' }, { href: '/#method', label: '我們的方法' }];
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } };
    const resize = () => { if (window.innerWidth > 760) setOpen(false); };
    document.addEventListener('keydown', close); window.addEventListener('resize', resize);
    return () => { document.removeEventListener('keydown', close); window.removeEventListener('resize', resize); };
  }, [open]);
  return <MotionConfig reducedMotion="user"><div className="draft-banner">品牌網站草稿 <span>・</span> 預約服務尚未開放</div><header className="site-header"><Link href="/" className="wordmark" aria-label="iMatters 職引力首頁" onClick={() => setOpen(false)}><span>iMatters<span className="logo-dot">.</span></span><small>職 引 力</small></Link><nav className="desktop-nav" aria-label="主要導覽">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}<Link href="/booking" className="nav-cta">預約諮詢 <span aria-hidden="true">↗</span></Link></nav><button className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? '關閉 −' : '選單 ＋'}</button><AnimatePresence>{open && <motion.nav id="mobile-nav" className="mobile-nav" aria-label="手機導覽" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link href="/booking">預約諮詢 ↗</Link></motion.nav>}</AnimatePresence></header></MotionConfig>;
}
export function Footer() {
  return <footer className="site-footer"><div className="footer-top"><div><Link href="/" className="wordmark"><span>iMatters<span className="logo-dot">.</span></span><small>職 引 力</small></Link><p>我很重要，我的價值值得被看見。</p></div><div className="footer-nav"><Link href="/about">關於職引力</Link><Link href="/services">服務項目</Link><Link href="/booking">預約諮詢 ↗</Link></div><p className="footer-signature">A little more you.<br /><span>更自在地，成為自己。</span></p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {brand.name} <span className="footer-parent"> / A Brand Me brand</span></span><div><Link href="/privacy">隱私說明</Link><Link href="/terms">服務規則</Link></div><span>草稿・待人工審核</span></div></footer>;
}
