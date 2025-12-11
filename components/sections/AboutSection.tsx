'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import ElectricBorder from '@/components/ElectricBorder';

// ❗ Tidak usah diketik : Variants, biar TS infer sendiri
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
});

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="w-full max-w-6xl mx-auto py-20 md:py-28 px-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Header */}
      <motion.div className="mb-10 space-y-2" variants={fadeUp(0)}>
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-sky-400">
          About
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold">
          A bit about <span className="text-sky-400">who I am</span>
        </h2>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        {/* KIRI – Teks */}
        <motion.div
          className="space-y-5 text-sm md:text-[15px] text-slate-200"
          variants={fadeUp(0.1)}
        >
          <p className="text-slate-300">
            I&apos;m{' '}
            <span className="font-semibold text-sky-300">
              Kevin Christian B. Rumapea
            </span>
            , an Information Technology student at{' '}
            <span className="text-sky-300 font-medium">
              Institut Teknologi Del
            </span>{' '}
            and a <span className="text-sky-300">full-stack developer</span> who
            enjoys turning ideas into working digital products. I like building
            things from the backend logic to the frontend experience, and making
            sure they feel smooth, clean, and reliable for users.
          </p>

          <p className="text-slate-400">
            I work with{' '}
            <span className="text-sky-300">
              Next.js, React, TypeScript, Laravel (PHP), REST APIs, SQL, and Flutter
            </span>{' '}
            — sometimes combined with tools like{' '}
            <span className="text-sky-300">Tailwind CSS and Firebase</span>. I&apos;m
            learning to design systems with{' '}
            <span className="text-sky-300">clean architecture</span>, think in
            terms of maintainable code, and use data to make better decisions
            through simple dashboards and analytics.
          </p>

          <p className="text-slate-400">
            I enjoy working in a team, breaking down problems into smaller
            pieces, and shipping features step by step. I&apos;m also used to
            balancing campus projects, internal initiatives, and organization
            work — which helps me stay organized and deliver under pressure.
          </p>

          <div className="grid gap-3 md:grid-cols-2 mt-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                Focus
              </p>
              <p className="text-sm font-medium">
                Full-Stack Web &amp; Mobile
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Building end-to-end applications — from REST APIs and databases
                to modern UIs and simple analytics.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                Tools I use
              </p>
              <p className="text-sm font-medium">
                Next.js · React · Laravel · SQL · Flutter
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Comfortable with modern web & mobile stacks, version control,
                and deployment workflows.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-3 text-xs text-slate-400">
            <div>
              <span className="text-slate-500">Currently: </span>
              <span className="text-sky-300">
                Looking for internship opportunities as a Full-Stack / Software
                Developer
              </span>
            </div>
            <div>
              <span className="text-slate-500">Based in: </span>
              <span className="text-slate-200">Indonesia</span>
            </div>
          </div>
        </motion.div>

        {/* KANAN – Foto + ElectricBorder + bounce */}
        <motion.div
          className="relative flex justify-center"
          variants={fadeUp(0.2)}
        >
          {/* div yang memantul */}
          <motion.div
            className="relative"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Glow halus di belakang */}
            <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25),_transparent_60%)] blur-3xl opacity-70" />

            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.6}
              thickness={2}
              style={{ borderRadius: 24 }}
              className="max-w-xs w-full"
            >
              <div className="rounded-3xl bg-slate-950/80 backdrop-blur-md p-4 md:p-5 shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-800/70">
                  <Image
                    src="/kepin-foto2.jpg"
                    alt="Photo of Kevin"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 260px, 320px"
                  />
                </div>

                <div className="mt-4 space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Full-Stack Developer
                  </p>
                  <p className="text-sm font-semibold text-slate-100">
                    Kevin Christian B. Rumapea
                  </p>
                  <p className="text-xs text-slate-400">
                    Enjoys building useful, clean, and scalable products that
                    feel good to use — both on web and mobile.
                  </p>
                </div>
              </div>
            </ElectricBorder>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
