import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Layers,
  Palette,
  ShoppingBag,
  Video,
  Users,
  CheckCircle2,
  ArrowRight,
  Send,
  Sparkles,
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>('web-software-dev');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-blue-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-blue-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold font-mono">
              Offerings &amp; Solutions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            Professional <span className="font-serif italic text-blue-100 font-normal">Services</span> &amp; Capabilities
          </h2>
          <p className="text-white/40 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Specialized solutions directly aligned with my professional practice in digital product design, software engineering, e-commerce, and global client relations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const isActive = activeServiceId === service.id;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setActiveServiceId(service.id)}
                className={`bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isActive
                    ? 'border-blue-500/50 bg-white/[0.06] shadow-[0_15px_35px_rgba(59,130,246,0.12)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center mb-6 group-hover:border-blue-400 transition-colors">
                    {getServiceIcon(service.icon)}
                  </div>

                  <h3 className="text-lg font-medium uppercase tracking-wider text-white group-hover:text-blue-300 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2">
                      Core Deliverables:
                    </div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tools */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-white/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 group-hover:text-blue-300 group-hover:underline"
                  >
                    <span>Inquire About Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
