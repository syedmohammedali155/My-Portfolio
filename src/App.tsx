/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CertificatesSection } from './components/CertificatesSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveCvModal } from './components/InteractiveCvModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020204] text-[#E0E0E0] relative selection:bg-blue-500/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Interactive Cursor Spotlight (desktop only) */}
      <CustomCursor />

      {/* Ambient Moving Gradient Mesh & Cyber Particles */}
      <BackgroundEffects />

      {/* Floating Glass Navbar */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <CertificatesSection />
        <SkillsMatrix />
        <ExperienceTimeline />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />

      {/* Official Interactive CV Modal with Print & Download */}
      <InteractiveCvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
