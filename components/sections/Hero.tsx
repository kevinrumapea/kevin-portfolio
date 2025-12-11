'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import TypedText from '@/components/TypedText';
import TypedRotate from '../TypedRotate';

const ProfileCard = dynamic(() => import('@/components/ProfileCard'), {
  ssr: false,
});

// =======================
// ⭐ HERO TECH BADGES — hanya teknologi utama
// =======================
const techBadges = [
  'Next.js',
  'React',
  'TypeScript',
  'Laravel (PHP)',
  'REST API',
  'MySQL',
  'Flutter',
  'Tailwind CSS',
];

// Floating code snippets animation
const codeSnippets = [
  { code: '<div>', x: -20, y: -30, delay: 0 },
  { code: 'const', x: 15, y: -40, delay: 0.2 },
  { code: '{ }', x: -15, y: 35, delay: 0.4 },
  { code: '=>', x: 20, y: 30, delay: 0.6 },
];

const orbitTech = [
  {
    label: 'Next.js',
    className:
      'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
  {
    label: 'Laravel',
    className:
      'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
  },
  {
    label: 'SQL',
    className:
      'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
  },
  {
    label: 'Flutter',
    className:
      'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center relative"
    >
      {/* Floating code snippets background */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-sky-400/10 font-mono text-4xl md:text-6xl font-bold pointer-events-none select-none"
          style={{
            left: `${50 + snippet.x}%`,
            top: `${50 + snippet.y}%`,
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [0.8, 1.2, 0.8],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            delay: snippet.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {snippet.code}
        </motion.div>
      ))}

      {/* PROFILE CARD */}
      <motion.div
        className="relative flex justify-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.24),_transparent_60%)] blur-3xl opacity-60"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Orbiting Tech */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full border border-sky-500/20" />
            {orbitTech.map((item) => (
              <div key={item.label} className={`absolute ${item.className}`}>
                <div className="px-3 py-1 rounded-full text-[10px] md:text-[11px] bg-slate-900/80 border border-sky-500/40 text-sky-100 shadow-lg shadow-sky-500/20 backdrop-blur-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <ProfileCard
          avatarUrl="/avatar-kepin-removebg-preview.png"
          name="Kevin Christian B. Rumapea"
          title="Full-Stack Developer & Data Enthusiast"
          handle="kevincode"
          status="Open for Internship"
          contactText="Download CV"
          showUserInfo={true}
          enableTilt={true}
          showBehindGradient={true}
          onContactClick={() => {
            window.open('/cv-kevin.pdf', '_blank');
          }}
        />
      </motion.div>

      {/* HERO TEXT SECTION */}
      <motion.div
        className="space-y-6 relative z-10"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      >
        <motion.p
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-sky-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 0px rgba(56,189,248,0)',
                '0 0 8px rgba(56,189,248,0.8)',
                '0 0 0px rgba(56,189,248,0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Portfolio
          </motion.span>
        </motion.p>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Hi, I&apos;m{' '}
            <TypedText
              text="Kevin Christian"
              speed={90}
              startDelay={350}
              className="text-sky-400"
            />
          </h1>

          <TypedRotate
            words={[
              '--Full-Stack Developer',
              '--Mobile Developer',
              '--Web Developer',
              '--Data Enthusiast',
            ]}
            className="text-sky-400 text-xl md:text-2xl font-medium"
          />

          <motion.p
            className="text-sm md:text-base text-slate-400 max-w-md"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            I’m a full-stack developer who loves building high-quality web &
            mobile applications. I specialize in <span className="text-sky-300">
            Next.js, Laravel, REST APIs, SQL</span>, and enjoy
            transforming ideas into real, scalable projects.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.a
            href="#projects"
            className="px-5 py-2 rounded-full bg-sky-500 text-sm font-medium text-slate-950 hover:bg-sky-400 transition relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-5 py-2 rounded-full border border-slate-600 text-sm font-medium text-slate-200 hover:bg-slate-800/60 transition"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* TECH BADGES */}
        <motion.div
          className="flex flex-wrap gap-2 text-xs text-slate-400"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {techBadges.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm cursor-default"
              variants={{
                hidden: { opacity: 0, y: 8, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
