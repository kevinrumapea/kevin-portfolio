'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import CountUp from './CountUp';
import Lightning from './Lightning';

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function SplashScreen() {
  const [isExiting, setIsExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Samakan dengan duration di CountUp (dalam detik)
  const COUNTUP_DURATION = 5;   // duration={5}
  const BUFFER_AFTER_100 = 1.7; // jeda setelah 100 muncul
  const FADE_DURATION = 0.90;   // durasi fade-out

  useEffect(() => {
    const totalVisibleMs = (COUNTUP_DURATION + BUFFER_AFTER_100) * 1000;

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, totalVisibleMs);

    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, totalVisibleMs + FADE_DURATION * 2000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: FADE_DURATION, ease: easeOutExpo }}
    >
      {/* ⚡ Background Lightning */}
      <div className="absolute inset-0 pointer-events-none">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>

      {/* Overlay gradient + blur biar lebih elegan */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.22),_transparent_55%)] bg-slate-950/75 backdrop-blur-[4px]" />

      {/* CARD utama */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-5 rounded-3xl border border-slate-800/80 bg-slate-950/85 px-8 py-7 md:px-10 md:py-8 shadow-[0_24px_80px_rgba(15,23,42,0.95)] max-w-sm w-[90%]"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
      >
        {/* Logo / inisial */}
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900/90 border border-sky-500/60 shadow-[0_0_26px_rgba(56,189,248,0.7)]"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.1, ease: easeOutExpo }}
        >
          <span className="text-lg font-semibold tracking-tight text-sky-300">
            KC
          </span>
        </motion.div>

        {/* Teks kecil */}
        <div className="text-center space-y-1">
          <p className="text-[11px] uppercase tracking-[0.3em] text-sky-300">
            Loading Portfolio
          </p>
          <p className="text-xs md:text-sm text-slate-400">
            Kevin Christian B. Rumapea
          </p>
        </div>

        {/* CountUp sebagai fokus */}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-semibold text-sky-300 tabular-nums">
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={COUNTUP_DURATION}
              className="count-up-text"
            />
          </span>
          <span className="text-xl md:text-2xl text-slate-500">%</span>
        </div>

        {/* Progress bar halus */}
        <motion.div
          className="mt-1 h-[3px] w-40 overflow-hidden rounded-full bg-slate-800/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.25 }}
        >
          <motion.div
            className="h-full w-full bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: COUNTUP_DURATION + BUFFER_AFTER_100, ease: 'easeInOut' }}
            style={{ transformOrigin: '0% 50%' }}
          />
        </motion.div>

        {/* Hint kecil */}
        <p className="text-[10px] text-slate-500">
          Preparing your experience...
        </p>
      </motion.div>
    </motion.div>
  );
  
}
