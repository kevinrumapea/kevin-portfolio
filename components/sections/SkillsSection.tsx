'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35 },
  },
};

// =============================
// 🧾 CERTIFICATES
// =============================
const certList = [
  {
    title: 'Google IT Automation with Python',
    issuer: 'Online Course',
    year: '2025',
    imageSrc: '/coursera_page-0001.jpg',
    link: '#', // ganti dengan link sertifikat asli kalau ada
    description:
      'The Google IT Automation with Python Professional Certificate is a program developed by Google to equip learners with essential IT skills, including Python programming, Git and GitHub, troubleshooting, debugging, configuration management, cloud technologies, and real-world IT automation. Graduates of this program have completed all assessments with a minimum score of 80% and demonstrate strong foundational abilities in Python and system automation, preparing them for roles such as IT Support Specialist or Junior Systems Administrator.',
  },
  {
    title: 'WordPress Introduction',
    issuer: 'Online Course / Bootcamp',
    year: '2023',
    imageSrc: '/myskill.jpg',
    link: '#',
    description:
      'This certificate recognizes the completion of the WordPress Introduction short class by MySkill, providing foundational knowledge in website creation and basic WordPress management.',
  },
  {
    title: 'Samsung Innovation Campus - Certificate of Participatio',
    issuer: 'Hacktiv8 Indonesia & Samsung Innovation Campus',
    year: '2024',
    imageSrc: '/samsung.jpg',
    link: '#',
    description:
    'Participation certificate for the Logic Test in Samsung Innovation Campus Batch 6 (AI in Everyday Life), hosted by Hacktiv8 Indonesia.',
  },
  // ✅ Sertifikat pengalaman panitia acara
  {
    title: 'Committee Certificate – Lomba Cerdas Cermat (LCC)',
    issuer: 'INALUM & Institut Teknologi Del',
    year: '2024',
    imageSrc: '/lcc.png', // ganti ke nama file sertifikatmu
    link: '#',
    description:
      'Served as an event committee member for a technology seminar at IT Del. Responsible for coordination, communication with speakers, and ensuring the event ran smoothly. Strengthened teamwork, communication, and time management skills.',
  },
  {
    title: 'Committee Certificate – Mendeley Training',
    issuer: 'TIKes Arjuna & Institut Teknologi Del',
    year: '2025',
    imageSrc: '/mendeley.png', // ganti ke nama file sertifikatmu
    link: '#',
    description:
   'Served as a committee member for the Mendeley Application Training held for STIKes Arjuna students on June 18, 2025.',
  },
  {
    title: 'Appreciation Certificate – Panitia Kaderisasi 2025',
  issuer: 'HIMATIF & Institut Teknologi Del',
  year: '2025',
  imageSrc: '/sertif_kader2025.jpg', // sesuaikan dengan lokasi file gambarmu
  link: '#',
  description:
    'Awarded for dedication, commitment, and outstanding contribution as a committee member of the 2025 Kaderisasi program.',
  },
]

// =============================
// 🧩 TECH STACK
// =============================
const techList = [
  // Core languages
  { name: 'JavaScript', icon: '/tech/javascript.png' },
  { name: 'TypeScript', icon: '/tech/typescript.png' },
  { name: 'PHP', icon: '/tech/php.png' },

  // Frameworks / libraries
  { name: 'Next.js', icon: '/tech/nextjs.png' },
  { name: 'React', icon: '/tech/react.png' },
  { name: 'Laravel', icon: '/tech/laravel.png' },
  { name: 'Node.js (Basic)', icon: '/tech/nodejs.png' },

  // Mobile
  { name: 'Flutter', icon: '/tech/flutter.png' },
  { name: 'Dart', icon: '/tech/dart.png' },

  // Styling / UI
  { name: 'Tailwind CSS', icon: '/tech/tailwind.png' },
  { name: 'Bootstrap', icon: '/tech/bootstrap.png' },

  // Build / tooling / hosting
  { name: 'Vite', icon: '/tech/vite.jpg' },
  { name: 'Vercel', icon: '/tech/vercel.png' },

  // Backend & DB
  { name: 'MySQL', icon: '/tech/mysql.png' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.png' },
  { name: 'Firebase (Basic)', icon: '/tech/firebase.png' },

  // Dev tools
  { name: 'Git', icon: '/tech/git.png' },
  { name: 'GitHub', icon: '/tech/github.png' },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="w-full max-w-5xl mx-auto mt-24 scroll-mt-24 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* TITLE */}
      <motion.h2
        className="text-2xl md:text-3xl font-semibold mb-6"
        variants={blockVariants}
      >
        Skills
      </motion.h2>

      {/* =============== CERTIFICATES (ATAS) =============== */}
      <motion.div className="mt-2" variants={blockVariants}>
        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2">
          Certificates
        </p>

        <h3 className="text-lg font-semibold mb-6 text-slate-200">
          Verified accomplishments &amp; learning journey
        </h3>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05,
              },
            },
          }}
        >
          {certList.map((cert, idx) => (
            <motion.article
              key={cert.title}
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                borderColor: 'rgba(56,189,248,0.65)',
                boxShadow: '0 0 28px rgba(56,189,248,0.35)',
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 cursor-default relative overflow-hidden group"
            >
              {/* shine line pelan */}
              <motion.span
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: '-120%' }}
                animate={{ x: '120%' }}
                transition={{
                  duration: 3 + idx * 0.2,
                  repeat: Infinity,
                }}
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(56,189,248,0.35), transparent)',
                }}
              />

              <div className="relative z-10">
                {/* FOTO SERTIFIKAT */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-800/70 mb-3 bg-slate-900">
                  <Image
                    src={cert.imageSrc}
                    alt={cert.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 300px"
                  />
                </div>

                {/* TEKS DI BAWAH FOTO */}
                <p className="text-sm font-semibold text-sky-300">
                  {cert.title}
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  {cert.issuer} · {cert.year}
                </p>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  {cert.description}
                </p>

                {cert.link && cert.link !== '#' && (
                  <a
                    href={cert.link}
                    target="_blank"
                    className="inline-block mt-3 text-[11px] text-sky-400 hover:text-sky-300 transition"
                  >
                    View Certificate &rarr;
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      {/* =============== TECH STACK (BAWAH) =============== */}
      <motion.div className="mt-16" variants={blockVariants}>
        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2">
          Tech Stack
        </p>
        <h3 className="text-lg font-semibold mb-4 text-slate-200">
          Technologies I&apos;ve worked with
        </h3>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.05,
              },
            },
          }}
        >
          {techList.map((tech, idx) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                y: -4,
                scale: 1.06,
                boxShadow: '0 0 18px rgba(56,189,248,0.35)',
                borderColor: 'rgba(56,189,248,0.8)',
              }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2.5 text-[11px] text-slate-300 text-center cursor-default group flex flex-col items-center justify-center gap-1"
            >
              {/* Shine line */}
              <motion.span
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: '-120%' }}
                animate={{ x: '120%' }}
                transition={{
                  duration: 3 + idx * 0.1,
                  repeat: Infinity,
                }}
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(56,189,248,0.45), transparent)',
                }}
              />

              {/* Logo technology (opsional) */}
              {tech.icon && (
                <div className="relative w-8 h-8 mb-1">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
              )}

              <span className="relative z-10">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}