import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Download,
  CheckCircle2,
  FileText,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Share2,
} from 'lucide-react';
import {
  profileData,
  experiencesData,
  educationData,
  languagesData,
  skillCategoriesData,
  certificatesData,
} from '../data/portfolioData';

interface InteractiveCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveCvModal: React.FC<InteractiveCvModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextResume = () => {
    const cvContent = `
============================================================
SYED MUHAMMAD ALI
Phone: ${profileData.phone}
Email: ${profileData.email}
Location: Rawalpindi / Islamabad, Pakistan & Dubai, UAE
============================================================

SUMMARY
${profileData.summary}

WORK EXPERIENCE
------------------------------------------------------------
1. Sama Ex Pakistan — Rawalpindi, Pakistan (Aug 2026 - Present)
   Role: Graphic Designer & Social Media Content Specialist
   Details: Graphic Design | Social Media Content Creation & Management | Marketing Visuals

2. Sama Logistics — Dubai, United Arab Emirates (Oct 2024 - Present)
   Role: Graphic Designer & Social Media Executive
   Details: Planned, designed, and published social media content and brand assets

3. TECK HEAVEN — Rawalpindi, Pakistan (Sep 2024 - Present)
   Role: Co-Founder of E-Commerce Store & Lead Graphic Designer
   Details: Manage clients and Create high-converting social media posts (Instagram & Facebook)

4. Bayt Al Raha — Dubai, United Arab Emirates (Nov 2025 - July 2026)
   Role: Graphic Designer
   Details: Created engaging social media posts and marketing content

5. Winston Networks — Rawalpindi, Pakistan (Feb 2024 - Nov 2024)
   Role: Customer Sales Representative
   Details: Remotely managed Clients. Made 61 sales in 10 months that were transferred to the licensed agent.

6. Sycamore Networks — Rawalpindi, Pakistan (Sep 2023 - Dec 2023)
   Role: Customer Sales Representative
   Details: Made 23 sales in 4 months that were transferred to the licensed agent.

7. W4WORK Outsourcing — Islamabad, Pakistan (July 2022 - Nov 2022)
   Role: Customer Sales Representative
   Details: Remotely managed US Clients and marketed services by sharing its value and benefit. Made 20 sales in 5 months that were transferred to the licensed agent.

OFFICIAL CERTIFICATES OF APPRECIATION
------------------------------------------------------------
1. Certificate of Appreciation — Bayt Al Raha UAE (Dubai, UAE)
   Awarded to: Syed Muhammad Ali | Role: Graphic Designer
   Citation: In appreciation of outstanding creativity, commitment, and contribution to Bayt Al Raha UAE.

2. Certificate of Appreciation — Sama Logistic UAE (Dubai, UAE)
   Awarded to: Syed Muhammad Ali | Role: Graphic Designer & Social Media Executive
   Citation: In recognition of exceptional creativity, dedication, and valuable contributions to Sama Logistic UAE.

EDUCATION
------------------------------------------------------------
Bachelor's degree in Computer Sciences (Feb 2025 - Present)
National University of Modern Languages (NUML)

SKILLS
------------------------------------------------------------
• Adobe Photoshop & Adobe Lightroom
• Canva & Wondershare Filmora
• Instagram & Facebook Social Media Creatives
• Graphic Design & Brand Identity
• Java OOPs & C++
• Client Account Management & Sales (45+ Conversions)

LANGUAGES
------------------------------------------------------------
• English
• Urdu
• Punjabi
============================================================
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Syed_Muhammad_Ali_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity no-print"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#07090E] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-10 my-6 max-h-[92vh] overflow-y-auto z-10 print:border-none print:shadow-none print:p-0 print:m-0 print:bg-white print:text-black"
        >
          {/* Action Bar Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 no-print">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest">
              <FileText className="w-4 h-4" />
              <span>Official Curriculum Vitae</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id="cv-print-btn"
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono uppercase tracking-wider text-white border border-white/10 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-blue-400" />
                <span>Print / PDF</span>
              </button>

              <button
                type="button"
                id="cv-download-txt-btn"
                onClick={handleDownloadTextResume}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-mono uppercase tracking-wider font-semibold transition-colors hover:bg-white/90"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                id="cv-modal-close-btn"
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/50 hover:text-white transition-colors ml-1 border border-white/10"
                aria-label="Close CV Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="bg-white/[0.02] p-6 sm:p-10 rounded-2xl border border-white/10 print:border-none print:p-0 print:bg-white print:text-black">
            {/* CV Header */}
            <div className="border-b border-white/10 pb-6 mb-6 print:border-gray-300">
              <h1 className="text-3xl font-light text-white print:text-black tracking-tight">
                {profileData.name}
              </h1>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-3 text-xs sm:text-sm font-mono text-blue-400 print:text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-white/40 print:text-gray-900" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-white/40 print:text-gray-900" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-white/40 print:text-gray-900" />
                  <span>Rawalpindi / Islamabad &bull; Dubai (Remote)</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h2 className="text-[10px] font-mono font-bold tracking-widest text-blue-400 print:text-blue-800 uppercase mb-2">
                SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-white/70 print:text-gray-800 leading-relaxed font-sans font-normal">
                {profileData.summary}
              </p>
            </div>

            {/* Work Experience */}
            <div className="mb-6">
              <h2 className="text-[10px] font-mono font-bold tracking-widest text-blue-400 print:text-blue-800 uppercase mb-3">
                WORK EXPERIENCE
              </h2>
              <div className="space-y-3">
                {experiencesData.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-3.5 rounded-2xl bg-white/[0.02] print:bg-gray-50 border border-white/5 print:border-gray-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="text-sm font-medium text-white print:text-black">
                        {exp.company} &bull;{' '}
                        <span className="font-normal text-blue-400 print:text-blue-700">
                          {exp.role}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-white/40 print:text-gray-600">
                        {exp.location} | {exp.period}
                      </div>
                    </div>
                    <p className="text-xs text-white/70 print:text-gray-700 mt-1.5 leading-relaxed font-normal">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Certificates Section */}
            <div className="mb-6">
              <h2 className="text-[10px] font-mono font-bold tracking-widest text-blue-400 print:text-blue-800 uppercase mb-3">
                OFFICIAL CERTIFICATES OF APPRECIATION (DUBAI, UAE)
              </h2>
              <div className="space-y-3">
                {certificatesData.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3.5 rounded-2xl bg-white/[0.02] print:bg-gray-50 border border-white/5 print:border-gray-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="text-sm font-medium text-white print:text-black">
                        {cert.organization} &bull;{' '}
                        <span className="font-normal text-blue-400 print:text-blue-700">
                          {cert.title}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-white/40 print:text-gray-600">
                        {cert.location} &bull; {cert.verificationBadge}
                      </div>
                    </div>
                    <p className="text-xs text-white/70 print:text-gray-700 mt-1.5 leading-relaxed italic font-serif">
                      &ldquo;{cert.citation}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Skills Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 print:border-gray-300">
              {/* Education */}
              <div>
                <h2 className="text-[10px] font-mono font-bold tracking-widest text-blue-400 print:text-blue-800 uppercase mb-2">
                  EDUCATION
                </h2>
                <div className="p-3.5 rounded-2xl bg-white/[0.02] print:bg-gray-50 border border-white/5 print:border-gray-200">
                  <div className="text-sm font-medium text-white print:text-black">
                    {educationData.degree}
                  </div>
                  <div className="text-xs text-blue-400 print:text-blue-700 font-mono mt-0.5">
                    {educationData.institution}
                  </div>
                  <div className="text-[11px] text-white/40 print:text-gray-600 font-mono mt-1">
                    {educationData.period}
                  </div>
                </div>

                <div className="mt-4">
                  <h2 className="text-[10px] font-mono font-bold tracking-widest text-blue-400 print:text-blue-800 uppercase mb-2">
                    LANGUAGES
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {languagesData.map((l) => (
                      <span
                        key={l.name}
                        className="px-2.5 py-1 rounded-full bg-white/5 print:bg-gray-100 text-xs font-mono text-white/80 print:text-gray-800 border border-white/5 print:border-gray-200"
                      >
                        {l.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-[10px] font-mono font-bold tracking-widest text-blue-400 print:text-blue-800 uppercase mb-2">
                  TECHNICAL &amp; CREATIVE SKILLS
                </h2>
                <div className="p-3.5 rounded-2xl bg-white/[0.02] print:bg-gray-50 border border-white/5 print:border-gray-200">
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Adobe Photoshop',
                      'Adobe Lightroom',
                      'Canva',
                      'Wondershare Filmora',
                      'Instagram & Facebook Creatives',
                      'Graphic Design & Branding',
                      'Java OOPs',
                      'C++',
                      'Client Relations (45+ Sales)',
                    ].map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 print:bg-white text-[11px] font-mono text-white/80 print:text-gray-900 border border-white/10 print:border-gray-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
