import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowUpRight,
  Code2,
  Palette,
  ShoppingBag,
  Layers,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Design & Dev', 'E-Commerce', 'Brand & Media', 'Engineering'];

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold font-mono">
              Selected Works &amp; Case Studies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            Featured <span className="font-serif italic text-blue-100 font-normal">Graphic Design</span> &amp; Social Works
          </h2>
          <p className="text-white/40 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Creative projects spanning Instagram &amp; Facebook ad creatives, brand identity packages, UAE corporate media, and e-commerce campaigns with 45+ client conversions.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`filter-project-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'bg-white/5 text-white/60 border border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:shadow-[0_15px_35px_rgba(59,130,246,0.12)] transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Abstract Visual Header */}
              <div className="relative h-44 rounded-2xl bg-[#07090E] border border-white/10 p-5 overflow-hidden flex flex-col justify-between mb-5 group-hover:border-blue-500/30 transition-colors">
                {/* Visual Glow Mesh */}
                <div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Top bar inside card */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[9px] font-mono text-blue-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/15 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all flex items-center justify-center text-white/70">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Abstract Pattern Display */}
                <div className="z-10">
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    ROLE: {project.role}
                  </div>
                  <div className="text-base font-light text-white group-hover:text-blue-100 transition-colors line-clamp-1">
                    {project.title}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-medium uppercase tracking-wider text-white group-hover:text-blue-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-3 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-white/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-[10px] font-mono text-white/30">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-blue-400 group-hover:text-blue-300">
                    <span className="text-[11px] uppercase tracking-wider">Explore Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
