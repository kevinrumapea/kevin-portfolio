'use client';

import React, { useRef, useEffect, useState } from 'react';

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const activeIndexRef = useRef(initialActiveIndex);

  // keep ref in sync
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (
    distance: number,
    pointIndex: number,
    totalPoints: number
  ): [number, number] => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (
    i: number,
    t: number,
    d: [number, number],
    r: number
  ) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate:
        rotate > 0
          ? (rotate + r / 20) * 10
          : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');

        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty(
          '--color',
          `var(--color-${p.color}, white)`
        );
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);

        requestAnimationFrame(() => {
          element.classList.add('active');
        });

        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {}
        }, t);
      }, 30);
    }
  };

  function updateEffectPosition(element: HTMLElement) {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };

    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);

    textRef.current.innerText = element.innerText;
  }

  function activateItem(element: HTMLElement, index: number) {
    setActiveIndex(index);
    updateEffectPosition(element);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach((p) => filterRef.current!.removeChild(p));
    }

    if (textRef.current) {
      textRef.current.classList.remove('active');
      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  }

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    e.preventDefault();
    const liEl = e.currentTarget.parentElement as HTMLElement | null;
    if (!liEl) return;

    // smooth scroll ke section
    const targetId = items[index].href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    activateItem(liEl, index);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    index: number
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e as any, index);
    }
  };

  // posisi awal pill di item aktif
  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const lis = navRef.current.querySelectorAll('li');
    const activeLi = lis[activeIndex] as HTMLElement | undefined;
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add('active');
    }
  }, [activeIndex]);

  // update posisi saat resize
  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      const lis = navRef.current!.querySelectorAll('li');
      const activeLi = lis[activeIndexRef.current] as HTMLElement | undefined;
      if (activeLi) {
        updateEffectPosition(activeLi);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  // scroll spy: update aktif berdasarkan section yang kelihatan
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!navRef.current) return;

    const sectionIds = items.map((item) => item.href.replace('#', ''));
    const lis = navRef.current.querySelectorAll('li');

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = activeIndexRef.current;
        let bestScore = 0;

        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          const idx = sectionIds.indexOf(id);
          if (idx === -1) return;

          const ratio = entry.intersectionRatio;
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight || 0;
          const distanceToTop = Math.abs(rect.top - viewportHeight * 0.2);
          const score = ratio - distanceToTop / viewportHeight;

          if (ratio > 0.25 && score > bestScore) {
            bestScore = score;
            bestIndex = idx;
          }
        });

        if (bestIndex !== activeIndexRef.current) {
          const li = lis[bestIndex] as HTMLElement | undefined;
          if (li) {
            activateItem(li, bestIndex);
          } else {
            setActiveIndex(bestIndex);
          }
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="gooey-nav-container relative" ref={containerRef}>
      <nav
        className="flex relative"
        style={{ transform: 'translate3d(0,0,0.01px)' }}
      >
        <ul
          ref={navRef}
          className="flex gap-6 list-none p-0 px-4 m-0 relative z-[3] text-sm text-white"
        >
          {items.map((item, index) => (
            <li
              key={item.label}
              className={`gooey-nav-item rounded-full relative cursor-pointer transition-colors duration-300 ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <a
                href={item.href}
                onClick={(e) => handleClick(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="outline-none py-[0.5em] px-[1.1em] inline-block"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;