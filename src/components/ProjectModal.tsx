import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  Target,
  Wrench,
  Award,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#07090E] border border-white/15 shadow-2xl rounded-3xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto z-10 backdrop-blur-2xl"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            id="close-project-modal"
            className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 text-white border border-white/10">
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-white/40">
                &bull; {project.role}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light text-white">
              {project.title}
            </h2>
            <p className="text-xs uppercase tracking-wider font-mono text-blue-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Summary */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-white/80 text-sm leading-relaxed mb-6 font-normal">
            {project.summary}
          </div>

          {/* Core Case Study Sections */}
          <div className="space-y-5">
            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 mb-2 uppercase tracking-widest font-bold">
                  <Target className="w-3.5 h-3.5 text-blue-400" />
                  <span>Challenge / Objective</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 mb-2 uppercase tracking-widest font-bold">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>Executed Strategy</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* My Role / Contribution */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 mb-2 uppercase tracking-widest font-bold">
                <Wrench className="w-3.5 h-3.5 text-blue-400" />
                <span>My Direct Contribution</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                {project.contribution}
              </p>
            </div>

            {/* Key Deliverables / Outcomes */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 mb-3 uppercase tracking-widest font-bold">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>Key Deliverables &amp; Outcomes</span>
              </div>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-normal"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/40 mb-2.5">
                Applied Skills &amp; Technologies:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
              Verified Record &bull; Syed Muhammad Ali
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-white text-black font-semibold text-xs transition-colors hover:bg-white/90"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
