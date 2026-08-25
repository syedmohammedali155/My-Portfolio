import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Palette,
  Code,
  ShoppingBag,
  TrendingUp,
  Sparkles,
  CheckCircle,
  Layers,
  Wrench,
} from 'lucide-react';
import { skillCategoriesData } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    skillCategoriesData[0].id
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-blue-400 font-semibold font-mono">
              Technical Stack &amp; Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Specialized in <span className="text-blue-400">Graphic Design</span> &amp; Social Creatives
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Visual Design tools, Social Media Creatives (Instagram &amp; Facebook), E-Commerce, and Client Operations.
          </p>
        </div>

        {/* 4 Core Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategoriesData.map((category, idx) => {
            const isSelected = selectedCategory === category.id;
            return (
              <motion.div
                key={category.id}
                id={`skill-category-${category.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                  isSelected
                    ? 'border-blue-500/50 bg-white/[0.06] shadow-[0_15px_35px_rgba(59,130,246,0.15)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                      {getIcon(category.iconName)}
                    </div>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-sm font-medium uppercase tracking-wider text-white group-hover:text-blue-300 transition-colors mb-2">
                    {category.title}
                  </h3>

                  <p className="text-xs text-white/40 leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Skills inside category */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-white/90">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        )}
                      </div>
                      {skill.tool && (
                        <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider mt-0.5">
                          {skill.tool}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-blue-400 shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                Dual Domain Synergy
              </h4>
              <p className="text-xs text-white/40 mt-0.5">
                A refined balance of high-end visual aesthetics and foundational C++/Java computer science engineering.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-mono text-blue-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span>Verified Track Record</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
