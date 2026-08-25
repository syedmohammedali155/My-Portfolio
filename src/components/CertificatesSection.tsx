import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  ShieldCheck,
  MapPin,
  Maximize2,
  Minimize2,
  X,
  ExternalLink,
  Download,
  Eye,
} from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import { CertificateItem } from '../types';

export const CertificatesSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const getCertImageSrc = (cert: CertificateItem) => {
    return cert.imagePath || (cert.id === 'bayt-al-raha-cert' ? '/Certificate.png' : '/Certificate 1.png');
  };

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Clean Professional Typography */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-blue-400 font-semibold font-mono">
              Official Corporate Certifications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Verified <span className="text-blue-400">Certificates</span> &amp; Honors
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-3 font-normal leading-relaxed">
            Official corporate certificates of appreciation awarded by Dubai (UAE) enterprises, recognizing excellence in graphic design and high-engagement social media execution.
          </p>
        </div>

        {/* Certificate Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {certificatesData.map((cert, index) => {
            const currentImageSrc = getCertImageSrc(cert);

            return (
              <motion.div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedCert(cert);
                  setIsZoomed(false);
                }}
                className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer shadow-xl"
              >
                {/* Ambient Glow */}
                <div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none"
                  style={{ backgroundColor: cert.themeColor }}
                />

                {/* Top Badge & Location */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-400/30 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/90 font-medium">
                      {cert.verificationBadge}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{cert.location}</span>
                  </div>
                </div>

                {/* Certificate Visual Frame */}
                <div className="relative rounded-2xl bg-[#080b12] border border-white/15 p-5 sm:p-6 group-hover:border-blue-400/40 transition-all shadow-2xl mb-6 overflow-hidden">
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
                    <img
                      src={currentImageSrc}
                      alt={`${cert.organization} - ${cert.title}`}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        const el = document.getElementById(`fallback-card-${cert.id}`);
                        if (el) el.style.display = 'flex';
                      }}
                      onLoad={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'block';
                        const el = document.getElementById(`fallback-card-${cert.id}`);
                        if (el) el.style.display = 'none';
                      }}
                      className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
                    />

                    {/* Fallback visual document representation */}
                    <div
                      id={`fallback-card-${cert.id}`}
                      className="w-full h-full p-6 flex flex-col justify-between text-center bg-gradient-to-br from-[#0e1320] via-[#090d16] to-[#04060a]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono uppercase tracking-widest text-blue-400">
                          {cert.organization}
                        </span>
                        <span className="text-[9px] font-mono text-white/40">DUBAI, UAE</span>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-bold text-white tracking-wide">
                          {cert.title}
                        </div>
                        <div className="text-xs text-blue-300 font-medium mt-1">
                          {cert.awardee}
                        </div>
                        {cert.designatedRole && (
                          <div className="text-[10px] font-mono uppercase tracking-wider text-white/50 mt-0.5">
                            {cert.designatedRole}
                          </div>
                        )}
                      </div>
                      <div className="text-[10px] font-mono text-white/40 border-t border-white/10 pt-2 flex items-center justify-between">
                        <span>{cert.stampOrSignatureType === 'company_stamp' ? 'Verified Corporate Seal' : 'Executive Signature'}</span>
                        <span className="text-blue-400">Click to Inspect &rarr;</span>
                      </div>
                    </div>

                    {/* Inspect Overlay Trigger on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px] flex items-center justify-center gap-3 text-white">
                      <div className="px-4 py-2 rounded-full bg-blue-600/90 text-white font-medium text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-600/40">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Information Text */}
                  <div className="mt-4">
                    <div className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
                      {cert.organization}
                    </div>
                    <div className="text-lg font-bold text-white mt-0.5 tracking-tight">
                      {cert.title}
                    </div>
                    <p className="text-xs text-white/70 mt-2 leading-relaxed line-clamp-2">
                      &ldquo;{cert.citation}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Verification Seal & Action Button */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                      <span className="text-[11px] font-mono text-white/80 font-medium">
                        {cert.stampOrSignatureType === 'company_stamp' ? 'Corporate Stamp' : 'CEO Signature'}
                      </span>
                    </div>

                    <button
                      type="button"
                      id={`inspect-cert-btn-${cert.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                        setIsZoomed(false);
                      }}
                      className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-blue-600/30"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>

                {/* Skills & Capabilities Tag Matrix */}
                <div className="space-y-2.5">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                    Recognized Competencies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-[11px] bg-white/5 border border-white/10 text-white/80 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Inspection Full Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-lg"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl bg-[#090C15] border border-white/20 rounded-3xl p-5 sm:p-8 shadow-2xl my-auto text-white overflow-hidden"
              >
                {/* Modal Top Navigation */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                        {selectedCert.organization} &bull; {selectedCert.location}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {selectedCert.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Zoom Toggle */}
                    <button
                      type="button"
                      id="cert-modal-zoom-btn"
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      title={isZoomed ? 'Zoom Out' : 'Zoom In'}
                      aria-label="Toggle zoom"
                    >
                      {isZoomed ? (
                        <Minimize2 className="w-4 h-4" />
                      ) : (
                        <Maximize2 className="w-4 h-4" />
                      )}
                    </button>

                    {/* Open in New Tab */}
                    <a
                      href={getCertImageSrc(selectedCert)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      title="Open full image in new tab"
                      aria-label="Open full image"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    {/* Close Button */}
                    <button
                      type="button"
                      id="close-cert-modal-btn"
                      onClick={() => setSelectedCert(null)}
                      className="p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                      aria-label="Close modal"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Main High-Resolution Certificate Document Canvas */}
                <div className="relative rounded-2xl bg-black/60 border border-white/15 p-2 sm:p-4 mb-5 flex flex-col items-center justify-center overflow-hidden min-h-[380px] max-h-[68vh]">
                  <div
                    className={`w-full h-full flex items-center justify-center overflow-auto transition-all ${
                      isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  >
                    <img
                      src={getCertImageSrc(selectedCert)}
                      alt={`${selectedCert.organization} Certificate`}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                        const fallbackEl = document.getElementById(`fallback-modal-${selectedCert.id}`);
                        if (fallbackEl) fallbackEl.style.display = 'flex';
                      }}
                      onLoad={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'block';
                        const fallbackEl = document.getElementById(`fallback-modal-${selectedCert.id}`);
                        if (fallbackEl) fallbackEl.style.display = 'none';
                      }}
                      className={`rounded-xl object-contain max-h-[64vh] transition-all duration-300 ${
                        isZoomed ? 'scale-125 my-8' : 'scale-100 max-w-full'
                      }`}
                    />

                    {/* Fallback Display if image is still loading or not in /public */}
                    <div
                      id={`fallback-modal-${selectedCert.id}`}
                      className="hidden flex-col items-center justify-center text-center p-8 max-w-xl"
                    >
                      <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-4">
                        <Award className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {selectedCert.organization} &bull; {selectedCert.title}
                      </h4>
                      <p className="text-sm text-white/70 leading-relaxed mb-4">
                        &ldquo;{selectedCert.citation}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verified Metadata Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-mono mb-5">
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider">
                      Awardee
                    </div>
                    <div className="text-white font-bold text-sm mt-0.5">
                      {selectedCert.awardee}
                    </div>
                    {selectedCert.designatedRole && (
                      <div className="text-blue-400 text-[11px] mt-0.5">
                        {selectedCert.designatedRole}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider">
                      Issuing Authority
                    </div>
                    <div className="text-white font-semibold text-xs mt-0.5">
                      {selectedCert.organization}
                    </div>
                    <div className="text-white/50 text-[11px] mt-0.5">
                      {selectedCert.location}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider">
                      Verification Type
                    </div>
                    <div className="text-emerald-400 font-semibold text-xs mt-0.5 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{selectedCert.stampOrSignatureType === 'company_stamp' ? 'Verified Corporate Stamp' : 'Executive CEO Signature'}</span>
                    </div>
                    <div className="text-white/50 text-[10px] mt-0.5 truncate">
                      {selectedCert.issueNote}
                    </div>
                  </div>
                </div>

                {/* Modal Footer Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-white/50 font-mono flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Official verified credential supporting portfolio and CV records</span>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={getCertImageSrc(selectedCert)}
                      download
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-white/90 transition-colors w-full sm:w-auto"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
