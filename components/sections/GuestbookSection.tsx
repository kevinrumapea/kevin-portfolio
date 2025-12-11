'use client';

import { useEffect, useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

type GuestbookEntry = {
  id: string;
  name: string;
  message: string;
  createdAt: Timestamp | null;
};

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function GuestbookSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const colRef = collection(db, 'guestbook');
    const q = query(colRef, orderBy('createdAt', 'desc'));

    const unsub = onSnapshot(
      q,
      (snap) => {
        const docs: GuestbookEntry[] = snap.docs.map((doc) => {
          const data = doc.data() as any;
          return {
            id: doc.id,
            name: data.name ?? 'Anonymous',
            message: data.message ?? '',
            createdAt: data.createdAt ?? null,
          };
        });
        setEntries(docs);
        setLoading(false);
      },
      (err) => {
        console.error('Guestbook subscribe error:', err);
        setError('Failed to load messages.');
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim() || 'Anonymous';
    const trimmedMsg = message.trim();

    if (!trimmedMsg) {
      setError('Please write a message first.');
      return;
    }

    try {
      setSubmitting(true);
      const colRef = collection(db, 'guestbook');

      await addDoc(colRef, {
        name: trimmedName,
        message: trimmedMsg,
        createdAt: serverTimestamp(),
      });

      setMessage('');
    } catch (err) {
      console.error('Guestbook add error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <motion.section
      id="guestbook"
      className="w-full max-w-6xl mx-auto mt-24 scroll-mt-24 px-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
    >
      <div className="mb-8 space-y-2">
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-sky-400">
          Guestbook
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Say <span className="text-sky-400">hello</span>
        </h2>
        <p className="text-sm text-slate-400 max-w-lg">
          Leave a short message, feedback, or just a hello. Messages appear here
          in real-time 😎.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-start">
        <motion.form
          onSubmit={handleSubmit}
          className="relative rounded-2xl border border-slate-800 bg-slate-950/70 backdrop-blur-md p-5 md:p-6 shadow-[0_20px_60px_rgba(15,23,42,0.9)] overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1, ease: easeOutExpo }}
        >
          <div className="pointer-events-none absolute inset-[-40%] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_60%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.16),transparent_60%)] opacity-80 blur-3xl" />

          <div className="relative space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-1.5">
                Name (optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={40}
                className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                placeholder="Your name or alias"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-slate-400 mb-1.5">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                maxLength={280}
                className="w-full rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition resize-none"
                placeholder="Write something nice ✨"
              />
              <div className="mt-1 flex justify-between text-[10px] text-slate-500">
                <span>Max 280 characters</span>
                <span>{message.length}/280</span>
              </div>
            </div>

            {error && <p className="text-xs text-rose-400">{error}</p>}

            <motion.button
              type="submit"
              disabled={submitting}
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: submitting ? 1 : 1.03 }}
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.5)] hover:bg-sky-400 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {submitting ? 'Sending…' : 'Sign guestbook'}
              <span className="text-base">✍️</span>
            </motion.button>
          </div>
        </motion.form>

        {/* ✅ INI YANG DIPERBAIKI */}
        <motion.div
          className="space-y-3 max-h-[360px] overflow-y-auto pr-1 custom-scroll"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.15, ease: easeOutExpo }}
        >
          {loading ? (
            <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 px-4 py-6 text-sm text-slate-400">
              Loading messages...
            </div>
          ) : entries.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 px-4 py-6 text-sm text-slate-400">
              No messages yet. Be the first one to say hi 👋
            </div>
          ) : (
            entries.map((entry, index) => {
              const date = entry.createdAt?.toDate ? entry.createdAt.toDate() : null;

              return (
                <motion.article
                  key={entry.id}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.6)]"
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.03 * index,
                    ease: easeOutExpo,
                  }}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-medium text-sky-300 text-xs md:text-[13px]">
                      {entry.name || 'Anonymous'}
                    </p>
                    {date && (
                      <p className="text-[10px] text-slate-500">
                        {date.toLocaleDateString('id-ID', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}{' '}
                        ·{' '}
                        {date.toLocaleTimeString('id-ID', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    )}
                  </div>
                  <p className="mt-1.5 text-xs md:text-[13px] text-slate-200 whitespace-pre-line">
                    {entry.message}
                  </p>
                </motion.article>
              );
            })
          )}
        </motion.div>
      </div>

      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.6);
          border-radius: 999px;
        }
      `}</style>
    </motion.section>
  );
}