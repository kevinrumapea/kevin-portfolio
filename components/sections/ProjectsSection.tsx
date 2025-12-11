'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

type Project = {
  label: string;
  title: string;
  description: string;
  tech: string;
  imageSrc: string;
  githubUrl?: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    label: 'Website',
    title: 'Website Bem IT DEL',
    description:
    'Information platform for BEM IT Del to share campus updates, events, and announcements to both IT Del students and external visitors. Built as a modern web app with clear sections for news, agendas, and organizational profiles.',
    tech: 'Next.js · Postgres · Golang · Gin',
    imageSrc: '/projects/bem.jpg', // ganti ke gambar kamu
    githubUrl: 'https://github.com/username/church-information-system', // ganti
    demoUrl: 'https://bem-itdel.netlify.app/',
  },
  {
    label: 'Website',
    title: 'Development of an Information System for HKBP Toba Region',
    description:
      'Many HKBP churches still use manual administration, resulting in unintegrated data, slow information flow, and inefficient financial reporting. This reduces transparency and can impact congregation trust. A web-based information system is needed to integrate data, improve efficiency, and provide real-time, transparent information for the church and congregation.',    
    tech: 'Laravel · PHP · MySQL · ',
    imageSrc: '/projects/TA.png', // ganti
    githubUrl: '', // ganti
    demoUrl: '',
  },
  {
    label: 'Website & Mobile',
    title: 'Bloom Bouquet',
    description:
      'Bloom Bouquet adalah usaha penyedia buket bunga untuk berbagai keperluan seperti ulang tahun, wisuda, dan acara spesial. Operasional bisnis sebelumnya masih manual sehingga sering terjadi kendala seperti pesan pelanggan yang tercecer, miskomunikasi, dan kesalahan pencatatan pesanan. Karena itu, dibutuhkan sistem digital agar proses pemesanan lebih terstruktur, cepat, dan efisien, sekaligus meningkatkan kualitas pelayanan dan pengalaman pelanggan.',
    tech: 'Dart · Flutter · Tailwind CSS',
    imageSrc: '/projects/bloom bouquet.png', // ganti
    githubUrl: '', // ganti
    demoUrl: '',
  },
  {
    label: 'Website',
    title: 'Movie Ticket Booking Applicationt',

    description:
    'This project aims to develop a simple JavaFX-based application designed to demonstrate Object-Oriented Programming (OOP) concepts within a movie theater system',
    tech: 'Java · JavaFX · XML',
    imageSrc: '/projects/proyek_pbo.jpg', // ganti
    githubUrl: '', // ganti
    demoUrl: '',
  },
  {
    label: 'Mobile',
    title: 'My Diary – Personal Journal Mobile Application',
    description:
    'My Diary is a mobile application developed to support users in documenting their daily experiences and personal reflections. The app provides essential features such as creating, editing, and organizing diary entries in a clean and intuitive interface. Designed with a focus on simplicity and usability, this application helps users maintain a consistent journaling habit while ensuring data remains private and well-structured.',
    tech: 'Dart · Flutter · Tailwind CSS',
    imageSrc: '/projects/my diary.png', // ganti
    githubUrl: '', // ganti
    demoUrl: '',
  },
  {
    label: 'Website ',
    title: 'Development of the HKBP Sabungan Siborongborong Church Website',
    description:
    "This project focuses on creating and developing the official website for HKBP Sabungan Siborongborong Church. The website serves as a digital hub that helps strengthen communication between the church and its congregation. It also provides essential information, including worship schedules, updates and announcements, ministry programs, and documentation of various church activities",
    tech: 'Laravel · PHP · MySQL · ',
    imageSrc: '/projects/SabunganHompage.jpg', // ganti
    githubUrl: '', // ganti
    demoUrl: '',
  },
  {
    label: 'Coming Soon',
    title: 'Data / Analytics Project',
    description:
      'Planned project focusing on dashboards, data visualization, and case studies using SQL and analytics tools.',
    tech: 'SQL · Excel · Looker Studio / Data Studio',
    imageSrc: '', // ganti
    githubUrl: '',
    demoUrl: '',
  },
];

// Icon GitHub simple
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.29 3.438 9.773 8.205 11.366.6.111.82-.261.82-.58
        0-.287-.011-1.244-.017-2.255-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73
        1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.304-5.467-1.332-5.467-5.93
        0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.8c1.02.005 2.047.138 3.005.404
        2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221
        0 4.61-2.807 5.624-5.48 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.289 0 .322.216.698.825.579C20.565 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5Z"
      />
    </svg>
  );
}

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="w-full max-w-6xl mx-auto mt-24 scroll-mt-24 px-4"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* Header */}
      <motion.div className="mb-6 space-y-2" variants={cardVariants}>
        <p className="text-[11px] uppercase tracking-[0.25em] text-sky-400">
          Projects
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Things I&apos;ve built recently
        </h2>
      </motion.div>

      {/* 3 kolom 1 baris di desktop */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const isComingSoon = project.label === 'Coming Soon';

          return (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: '0 18px 40px rgba(15,23,42,0.9)',
                borderColor: 'rgba(56,189,248,0.85)',
              }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl border bg-slate-950/70 backdrop-blur-sm transition-colors duration-200 ${
                isComingSoon
                  ? 'border-dashed border-slate-700/80'
                  : 'border-slate-800'
              }`}
            >
              {/* Glow background halus */}
              <motion.div
                className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 7, repeat: Infinity }}
                style={{
                  background:
                    'radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at bottom right, rgba(129,140,248,0.18), transparent 55%)',
                }}
              />

              {/* Shine line */}
              <motion.span
                className="pointer-events-none absolute -inset-x-24 -top-20 h-24 opacity-0 group-hover:opacity-100"
                initial={{ x: '-130%' }}
                animate={{ x: '130%' }}
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                }}
                style={{
                  background:
                    'linear-gradient(120deg, transparent, rgba(56,189,248,0.45), transparent)',
                }}
              />

              {/* Gambar */}
              <div className="relative z-10 p-4 pb-0">
                <div className="relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/80">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 350px"
                    />
                  </div>

                  {/* Label chip */}
                  <div className="pointer-events-none absolute left-3 top-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] ${
                        isComingSoon
                          ? 'bg-amber-500/10 text-amber-300 border border-amber-500/40'
                          : 'bg-sky-500/10 text-sky-300 border border-sky-500/40'
                      }`}
                    >
                      {project.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Teks */}
              <div className="relative z-10 p-4 pt-3 space-y-2">
                <h3 className="text-sm md:text-base font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer: tech + GitHub */}
              <div className="relative z-10 flex flex-col gap-2 px-4 pb-4">
                <p className="text-[11px] text-slate-400">
                  <span className="text-slate-500">Tech:&nbsp;</span>
                  {project.tech}
                </p>

                <div className="flex items-center justify-between gap-2">
                  {isComingSoon && !project.githubUrl && (
                    <span className="inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-200">
                      In progress
                    </span>
                  )}

                  <div className="flex items-center gap-2 ml-auto">
                    {project.demoUrl && project.demoUrl !== '' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="inline-flex items-center rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-100 hover:bg-sky-500/20 transition"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && project.githubUrl !== '' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-200 hover:border-sky-500/70 hover:text-sky-100 hover:bg-slate-900 transition"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}

      </div>
    </motion.section>
  );
}
