// app/page.tsx
'use client';

import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import SplashScreen from '@/components/SplashScreen';
import GuestbookSection from '@/components/sections/GuestbookSection';



export default function HomePage() {
  return (
    <>
      <SplashScreen />

      <main className="w-full max-w-6xl mx-auto px-4 py-16 space-y-24">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <GuestbookSection />
      </main>
    </>
  );
}
