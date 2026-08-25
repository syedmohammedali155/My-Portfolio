import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Filter,
  Layers,
  Sparkles,
  Building,
  ArrowUpRight,
} from 'lucide-react';
import { experiencesData } from '../data/portfolioData';
import { ExperienceItem } from '../types';

export const ExperienceTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'design' | 'ecommerce' | 'sales'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('sama-ex');

  const filteredExperiences = experiencesData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const filterTabs = [
    { id: 'all', label: 'All Roles', count: experiencesData.length },
    { id: 'design', label: 'Graphic & Social Media (Dubai)', count: experiencesData.filter(e => e.category === 'design').length },
    { id: 'ecommerce', label: 'E-Commerce Venture (TECK HEAVEN)', count: experiencesData.filter(e => e.category === 'ecommerce').length },
    { id: 'sales', label: 'Client Accounts & Liaison (45+)', count: experiencesData.filter(e => e.category === 'sales').length },
    { id: 'tech', label: 'Design & Software Roles', count: experiencesData.filter(e => e.category === 'tech').length },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-blue-400 font-semibold font-mono">
              Career History &amp; Leadership
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Work Experience &amp; <span className="text-blue-400">Track Record</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Grounded in verified roles across graphic design, social media marketing, venture co-founding, and client operations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              id={`filter-exp-${tab.id}`}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-medium transition-all duration-200 flex items-center gap-2 ${
                activeFilter === tab.id
                  ? 'bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 text-white/60 border border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-mono ${activeFilter === tab.id ? 'bg-black/15 text-black' : 'bg-white/10 text-white/70'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  id={`experience-item-${exp.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative group"
                >
                  {/* Timeline Indicator Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3 h-3 rounded-full bg-[#020204] border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                  {/* Main Card */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className={`p-6 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-300 cursor-pointer ${
                      isExpanded
                        ? 'border-blue-500/50 bg-white/[0.06] shadow-[0_15px_40px_rgba(59,130,246,0.1)]'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-light text-white group-hover:text-blue-200 transition-colors">
                            {exp.company}
                          </h3>
                          {exp.badge && (
                            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-[10px] font-mono uppercase tracking-wider">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-xs uppercase tracking-wider font-mono text-blue-400 mt-1">
                          {exp.role}
                        </div>
                      </div>

                      {/* Period & Location Meta */}
                      <div className="flex flex-col md:items-end text-xs font-mono text-white/40 space-y-1">
                        <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 text-[11px]">
                          <Calendar className="w-3 h-3 text-blue-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <MapPin className="w-3 h-3 text-white/30" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Overview description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-4 font-normal">
                      {exp.description}
                    </p>

                    {/* Expandable Highlights */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-white/10 mt-4 space-y-4 overflow-hidden"
                        >
                          <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-blue-400">
                            Verified Key Deliverables &amp; Achievements:
                          </div>
                          <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                            {exp.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Skills pills */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-4 border-t border-white/5">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-white/5 rounded-full text-[11px] border border-white/5 text-white/70"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="text-xs font-mono text-blue-400 flex items-center gap-1">
                        <span>{isExpanded ? 'Less' : 'Details'}</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 transform transition-transform duration-200 ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
