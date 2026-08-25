import React from 'react';
import { ArrowUp, Heart, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#020204] py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white font-mono text-xs font-semibold">
                SMA
              </div>
              <span className="text-sm font-semibold tracking-wider text-white uppercase font-mono">
                {profileData.name}
              </span>
            </div>
            <p className="text-[11px] text-white/40 max-w-sm font-mono uppercase tracking-wider">
              Creative Graphic Designer &bull; Social Media Specialist &bull; Co-Founder @ TECK HEAVEN
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-white/50 font-mono uppercase tracking-wider">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#certificates" className="hover:text-white transition-colors">
              Certificates
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white/70 hover:text-white transition-all group"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {profileData.name}. All verified rights reserved.
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="uppercase tracking-wider text-[10px]">Open for Selective Engagements</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
