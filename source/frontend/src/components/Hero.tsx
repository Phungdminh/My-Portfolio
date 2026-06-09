import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CursorRepulsionField } from './CursorRepulsionField';
import { content } from '../data/content';
import { useMouseGradient } from '../hooks/useMouseGradient';

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = content.hero.roles;
  const currentRole = roles[roleIndex] ?? '';
  const { mousePos, direction, isReducedMotion } = useMouseGradient(rootRef);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-reveal]',
        { autoAlpha: 0, y: 28, filter: 'blur(14px)' },
        { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.12, ease: 'power3.out' },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (roles.length < 2) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !roleRef.current) return;

    const roleElement = roleRef.current;
    const timer = window.setInterval(() => {
      gsap.to(roleElement, {
        y: -30,
        autoAlpha: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          setRoleIndex((index) => (index + 1) % roles.length);
          gsap.fromTo(
            roleElement,
            { y: 30, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power2.out' },
          );
        },
      });
    }, 2200);

    return () => {
      window.clearInterval(timer);
      gsap.killTweensOf(roleElement);
    };
  }, [roles.length]);

  return (
    <section id="top" ref={rootRef} className="relative flex min-h-screen items-center overflow-hidden px-5 py-28 sm:px-8 lg:px-12">
      {content.hero.videoUrl ? (
        <video className="absolute inset-0 h-full w-full object-cover opacity-35" src={content.hero.videoUrl} autoPlay muted loop playsInline />
      ) : (
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4E85BF]/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#89AACC]/10 blur-3xl" />
        </div>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(55,184,84,0.16)_0%,rgba(255,174,22,0.08)_28%,transparent_62%)]" />
      <CursorRepulsionField mousePos={mousePos} direction={direction} isReducedMotion={isReducedMotion} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,0.36)_58%,rgba(0,0,0,0.76)_100%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="max-w-4xl">
          <p data-hero-reveal className="mb-6 text-sm font-semibold uppercase tracking-[0.45em] text-[var(--color-muted)]">
            {content.hero.label}
          </p>
          <h1 data-hero-reveal className="text-balance text-6xl font-semibold tracking-[-0.08em] sm:text-7xl lg:text-9xl">
            {content.hero.title}
          </h1>
          <div data-hero-reveal className="mt-5 flex flex-wrap items-end gap-4">
            <span ref={roleRef} data-role-text className="font-serif text-5xl italic text-[var(--color-text-primary)] sm:text-7xl">{currentRole}</span>
            <span className="mb-3 h-px flex-1 bg-[var(--color-stroke)]" />
          </div>
          <p data-hero-reveal className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
            {content.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
