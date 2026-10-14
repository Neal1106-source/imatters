'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Photo({ photo, type }: { photo: { src: string; alt: string } | null; type: 'hero' | 'method' }) {
  const frame = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!photo) return;
    const media = gsap.matchMedia();
    media.add('(min-width: 761px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('.parallax-image', { yPercent: -3 }, { yPercent: 3, ease: 'none', scrollTrigger: { trigger: frame.current, start: 'top bottom', end: 'bottom top', scrub: 1 } });
    });
    return () => media.revert();
  }, { scope: frame, dependencies: [photo?.src], revertOnUpdate: true });
  return <div ref={frame} className={`photo-frame ${type}-photo`}>
    {photo ? <Image src={photo.src} alt={photo.alt} fill unoptimized className="parallax-image" sizes="(max-width: 760px) 100vw, 50vw" priority={type === 'hero'} /> : <div className="photo-placeholder"><div className="placeholder-grain" /><div className="placeholder-mark" aria-hidden="true">{type === 'hero' ? 'i.' : 'the art\nof you.'}</div><div className="photo-note"><span className="tiny-dot" /><span>{type === 'hero' ? '真實人物照片預留' : '測色／諮詢照片預留'}<small>待提供照片與公開使用授權</small></span></div></div>}
    <span className="photo-corner" aria-hidden="true">{type === 'hero' ? 'YOUR VALUE, VISIBLE.' : 'A STYLE THAT FEELS LIKE YOU.'}</span>
  </div>;
}
