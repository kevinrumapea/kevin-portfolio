'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

type Status = 'idle' | 'sending' | 'success' | 'error';

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ContactSection() {
  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const SERVICE_ID = 'service_bj6glrs';
  const TEMPLATE_ID = 'template_lva8hcv';
  const PUBLIC_KEY = '359oFGqTWBrUNxjTr';

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name || 'Anonymous',
          reply_to: fromEmail || '',
          message,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus('success');
      setMessage('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  }

  return (
    <motion.section
      id="contact"
      className="w-full max-w-6xl mx-auto mt-24 mb-20 scroll-mt-24 px-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
    >
      <div className="mb-10 space-y-3 text-left">
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-sky-400">
          Contact
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Let&apos;s build <span className="text-sky-400">something cool</span> together
        </h2>
        <p className="text-sm md:text-[15px] text-slate-400 max-w-xl">
          Open to internship, freelance projects, or just a quick chat about web development, backend, and data.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] items-start">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl p-6 md:p-7 shadow-[0_24px_80px_rgba(15,23,42,0.95)]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.05 }}
        >
          <div className="pointer-events-none absolute inset-[-40%] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25),transparent_55%)] opacity-90 blur-3xl" />

          <div className="relative space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-1.5">Status</p>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse" />
                Open for internship opportunities
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Why reach out</p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Discuss <span className="text-sky-300">web / backend projects</span> with Next.js, Laravel, or REST APIs.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Explore <span className="text-sky-300">data & analytics</span> cases or dashboards.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Talk about <span className="text-sky-300">internship opportunities</span> or collaboration.</span>
                </li>
              </ul>
            </div>

            <div className="grid gap-3 text-xs text-slate-300 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-1">Based in</p>
                <p className="text-sm font-medium text-slate-100">Indonesia</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-1">Focus</p>
                <p className="text-sm font-medium text-slate-100">Web · Backend · Data</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          suppressHydrationWarning
          className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 backdrop-blur-xl p-6 md:p-7 shadow-[0_24px_80px_rgba(15,23,42,0.95)]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.08 }}
        >
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="relative space-y-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Send a message</p>
              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-2 py-1 text-[10px] text-slate-400">
                Avg. reply: &lt; 24h
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  suppressHydrationWarning
                  className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  suppressHydrationWarning
                  className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your idea, project, or question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                suppressHydrationWarning
                className="w-full resize-none rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
              />
            </div>

            {status === 'success' && <p className="text-xs text-emerald-400">✓ Thanks! Your message has been sent.</p>}
            {status === 'error' && <p className="text-xs text-rose-400">✗ Something went wrong. Please try again.</p>}

            <motion.button
              type="submit"
              disabled={status === 'sending' || !message.trim()}
              suppressHydrationWarning
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: status === 'sending' || !message.trim() ? 1 : 1.03 }}
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-[0_16px_40px_rgba(56,189,248,0.6)] hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {status === 'sending' ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <span className="text-base">↗</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}