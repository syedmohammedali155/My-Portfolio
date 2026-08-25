import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  CheckCircle2,
  Code2,
  Award,
  Globe2,
  Languages,
} from 'lucide-react';
import { educationData, languagesData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-blue-400 font-semibold font-mono">
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Education &amp; <span className="text-blue-400">Language Mastery</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Formal computational education underpinning design and digital technology practice.
          </p>
        </div>

        {/* Education Hero Bento Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Degree Card (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono uppercase tracking-wider">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-white mt-1">
                    {educationData.degree}
                  </h3>
                </div>
              </div>

              <div className="text-xs font-mono text-white/40 space-y-1">
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5 text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{educationData.period}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-blue-400 font-mono mb-4">
              <MapPin className="w-3.5 h-3.5 text-white/30" />
              <span className="text-white font-medium">{educationData.institution}</span>
              <span className="text-white/40">({educationData.shortName})</span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 font-normal">
              {educationData.description}
            </p>

            {/* Core Focus Modules */}
            <div>
              <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>Primary Technical Focus Areas:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {educationData.focus.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Spoken Languages Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-blue-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium uppercase tracking-wider text-white">
                    Languages
                  </h3>
                  <p className="text-[11px] text-white/40 font-mono">
                    Global Fluency
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {languagesData.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white uppercase tracking-wider">
                        {lang.name}
                      </span>
                      {lang.nativeScript && (
                        <span className="text-[10px] font-mono text-blue-400">
                          {lang.nativeScript}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-white/40 mt-1 font-mono">
                      {lang.proficiency}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-center">
              <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                <span>Verified Academic Record</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
