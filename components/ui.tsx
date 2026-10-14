'use client';
import Link from 'next/link';
import { motion, MotionConfig } from 'motion/react';
import { useState } from 'react';

export function Action({ href = '/booking', children, secondary = false }: { href?: string; children: React.ReactNode; secondary?: boolean }) {
  return <MotionConfig reducedMotion="user"><motion.span className="action-wrap" whileHover={{ y: -2 }} whileTap={{ scale: .98 }}><Link className={secondary ? 'button secondary' : 'button'} href={href}>{children}<span aria-hidden="true">↗</span></Link></motion.span></MotionConfig>;
}
export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [opened, setOpened] = useState<number | null>(0);
  return <MotionConfig reducedMotion="user"><div className="faq-list">{items.map((item, index) => <div className="faq-item" key={item.question}><h3><button aria-expanded={opened === index} aria-controls={`faq-answer-${index}`} id={`faq-question-${index}`} onClick={() => setOpened(opened === index ? null : index)}><span className="faq-index">{String(index + 1).padStart(2, '0')}</span>{item.question}<motion.span className="faq-symbol" aria-hidden="true" animate={{ rotate: opened === index ? 45 : 0 }}>＋</motion.span></button></h3><div id={`faq-answer-${index}`} aria-labelledby={`faq-question-${index}`} role="region" hidden={opened !== index}><p>{item.answer}</p></div></div>)}</div></MotionConfig>;
}
