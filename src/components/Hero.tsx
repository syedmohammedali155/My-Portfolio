import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  Sparkles,
  FileText,
  Send,
  Code,
  Palette,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Layers,
  ShoppingBag,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % profileData.titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Eyebrow Badge from Elegant Dark Theme */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">
              Creative Graphic Designer &amp; Social Media Specialist
            </span>
          </motion.div>

          {/* Main Display Title with Modern Professional Styling */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold leading-[1.05] tracking-tight text-white max-w-5xl mb-6"
          >
            Designing <span className="text-blue-400">visual assets</span>,{' '}
            building viral <span className="text-blue-400">engagement</span>.
          </motion.h1>

          {/* Rotating Role Flipper */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-8 flex items-center justify-center mb-6 overflow-hidden"
          >
            <motion.div
              key={currentTitleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="text-xs sm:text-sm uppercase tracking-[0.25em] font-mono text-white/60 font-semibold"
            >
              <span className="text-blue-400">&bull;</span> {profileData.titles[currentTitleIndex]} <span className="text-blue-400">&bull;</span>
            </motion.div>
          </motion.div>

          {/* High-Impact Summary Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mb-8 font-normal"
          >
            Specialized in high-converting Instagram &amp; Facebook social media creatives, brand identities, and commercial graphics. Awarded Official Corporate Certificates in Dubai (UAE) with proven client conversions.
          </motion.p>

          {/* Technical Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-2 mb-10 max-w-3xl"
          >
            <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-[11px] font-mono border border-white/10 text-white/90">
              Photoshop &amp; Canva
            </span>
            <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-[11px] font-mono border border-white/10 text-white/90">
              Instagram &amp; FB Creatives
            </span>
            <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-[11px] font-mono border border-white/10 text-white/90">
              Co-Founder @ TECK HEAVEN
            </span>
            <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-[11px] font-mono border border-white/10 text-white/90">
              Graphic Design @ Sama Ex &amp; Sama Logistics
            </span>
            <span className="px-3.5 py-1.5 bg-white/5 rounded-full text-[11px] font-mono border border-white/10 text-white/90">
              Dubai Verified Corporate Awards
            </span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#certificates"
              id="hero-view-work-btn"
              className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>View Verified Certificates</span>
            </a>

            <button
              type="button"
              id="hero-download-cv-btn"
              onClick={onOpenCvModal}
              className="w-full sm:w-auto bg-white/5 border border-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Download CV</span>
            </button>

            <a
              href="#contact"
              id="hero-connect-btn"
              className="w-full sm:w-auto px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in touch</span>
            </a>
          </motion.div>

          {/* High-Level Impact Metrics Bento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 w-full max-w-4xl"
          >
            {profileData.stats.map((stat, idx) => (
              <div
                key={stat.label}
                id={`hero-stat-${idx}`}
                className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-left hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`tracking-tight text-white mb-1 font-bold ${stat.value.length > 10 ? 'text-lg sm:text-xl' : 'text-3xl sm:text-4xl'}`}>
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold font-mono">
                  {stat.label}
                </div>
                <div className="text-xs text-white/40 mt-1 leading-snug">
                  {stat.subtext}
                </div>
                <span className="absolute bottom-2 right-4 text-3xl font-thin text-white/5 pointer-events-none select-none">
                  0{idx + 1}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#05070D] to-transparent pointer-events-none" />
    </section>
  );
};
