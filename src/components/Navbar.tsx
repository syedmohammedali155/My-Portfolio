import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  FileText,
  Send,
  Sparkles,
  ArrowUpRight,
  Code2,
  Phone,
  Mail,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / (totalScroll || 1)) * 100);

      setIsScrolled(currentScroll > 30);

      // Detect active section
      const sections = [
        'hero',
        'about',
        'certificates',
        'skills',
        'experience',
        'education',
        'contact',
      ];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar at the Top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-400 shadow-[0_0_10px_#3b82f6]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation Header */}
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-[#020204]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Brand / Name Logo from Elegant Dark Theme */}
            <a
              href="#hero"
              id="brand-logo"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm"
            >
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105">
                <span className="text-black font-black text-xs font-mono">SMA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-white group-hover:text-blue-200 transition-colors">
                  Syed Muhammad Ali
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-mono">
                  Designer &bull; Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with Elegant Tracking */}
            <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    className={`transition-colors duration-200 ${
                      isActive ? 'text-white font-bold' : 'hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA Action Buttons with Elegant Dark Pills */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                id="navbar-cv-btn"
                onClick={onOpenCvModal}
                className="px-5 py-2 border border-white/20 rounded-full text-[11px] uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 font-medium"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                id="navbar-contact-btn"
                className="px-6 py-2 bg-white text-black font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-1.5"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                id="mobile-cv-quick-btn"
                onClick={onOpenCvModal}
                className="px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] uppercase tracking-wider font-mono flex items-center gap-1"
                aria-label="View CV"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>CV</span>
              </button>
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-[#020204]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-blue-400 font-mono uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <span>Available for collaborations</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                  PK &bull; UAE
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-xs uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-white/40" />
                  </a>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full py-3 border border-white/20 rounded-full text-xs uppercase tracking-wider text-white hover:bg-white hover:text-black font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download / View CV</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <Send className="w-4 h-4" />
                  <span>Get in touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
