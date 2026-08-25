import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  User,
  Clock,
  MapPin,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Globe2,
  Compass,
  Languages,
  Shield,
  Layers,
  Phone,
  Mail,
} from 'lucide-react';
import { profileData, languagesData, educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  // Live clocks for Pakistan and Dubai
  const [pakistanTime, setPakistanTime] = useState('');
  const [dubaiTime, setDubaiTime] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setPakistanTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
      setDubaiTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dubai',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-blue-400 font-semibold font-mono">
              Profile &amp; Executive Summary
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Precision, Creative Vision &amp; <span className="text-blue-400">Multi-Project Execution</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Summary Glass Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Shield className="w-48 h-48 text-white" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-white flex items-center justify-center text-black font-black text-sm">
                  SMA
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                    {profileData.name}
                  </h3>
                  <p className="text-xs text-blue-400 font-mono tracking-wide font-medium">
                    Creative Graphic Designer &bull; Social Media Specialist &bull; Co-Founder
                  </p>
                </div>
              </div>

              {/* Verified CV Summary Quote */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 mb-6 relative">
                <div className="text-[10px] font-mono text-blue-400 mb-2 uppercase tracking-[0.2em] flex items-center gap-2 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Official CV Executive Summary
                </div>
                <blockquote className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
                  &ldquo;{profileData.summary}&rdquo;
                </blockquote>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-white/70">
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Strict Deadline Adherence:</strong> Proven capacity to maintain schedules, meetings, and records.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Extreme Pressure Execution:</strong> Resilient performance in demanding collaborative settings.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Interdepartmental Liaison:</strong> Clear coordination across technical and commercial teams.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Simultaneous Project Delivery:</strong> Dual involvement across multiple ventures.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Rawalpindi / Islamabad &bull; Dubai (UAE)</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>BS Computer Sciences (NUML)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Stats & Live Operations (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Live Operational Timezones Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono text-white/50">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Live Operational Clocks</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Pakistan Clocks */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    PKT (Pakistan)
                  </div>
                  <div className="text-xl font-mono font-light text-white mt-1">
                    {pakistanTime || '--:--:--'}
                  </div>
                  <div className="text-[10px] text-white/30 font-mono mt-0.5">
                    Rawalpindi / Islamabad
                  </div>
                </div>

                {/* Dubai Clocks */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    GST (Dubai UAE)
                  </div>
                  <div className="text-xl font-mono font-light text-white mt-1">
                    {dubaiTime || '--:--:--'}
                  </div>
                  <div className="text-[10px] text-white/30 font-mono mt-0.5">
                    Sama Logistics &amp; Bayt Al Raha
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Spoken Languages Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-6"
            >
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono text-white/50 mb-4">
                <Languages className="w-3.5 h-3.5 text-blue-400" />
                <span>Multilingual Fluency</span>
              </div>

              <div className="space-y-3">
                {languagesData.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-medium text-white flex items-center gap-2 uppercase tracking-wider">
                        <span>{lang.name}</span>
                        {lang.nativeScript && (
                          <span className="text-[10px] text-white/40 font-normal">
                            ({lang.nativeScript})
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-white/40 font-mono">
                        {lang.proficiency}
                      </div>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact Direct Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-6"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/40 mb-3">
                Direct Contact Reach
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2.5 text-xs text-white/70 hover:text-white font-mono break-all p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{profileData.email}</span>
                </a>
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-2.5 text-xs text-white/70 hover:text-white font-mono p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{profileData.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
