import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import CircularText from '@/components/CircularText';
import GlobalBackground from '@/components/GlobalBackground'; // ⬅️ pakai ini, bukan LiquidEther langsung

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kevin Portfolio',
  description: 'Portfolio built with Love by Kepin',
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 🔥 BACKGROUND LIQUID ETHER SELURUH LAYAR */}
        <GlobalBackground />

        {/* LAYER KONTEN */}
        <div className="relative min-h-screen bg-slate-950/60 text-slate-100 pt-24">
          {/* NAVBAR (pastikan di komponen Navbar sudah fixed) */}
          <Navbar />

          {/* HALAMAN */}
          {children}

          {/* CIRCULAR TEXT FIXED DI KANAN BAWAH */}
          <div className="fixed bottom-5 right-6 z-50 pointer-events-none">
            <CircularText
                text="EAT • SLEEP • CODE • REPEAT •"
              onHover="goBonkers"
              spinDuration={20}
              className="pointer-events-auto w-[120px] h-[120px] text-[10px] tracking-[0.25em] text-slate-200 opacity-80 hover:opacity-100"
            />

            
          </div>
        </div>
      </body>
    </html>
  );
}
