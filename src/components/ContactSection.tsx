import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  Mail,
  Phone,
  MessageSquare,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setStatusMessage('Opening your email client to send message...');
    setTimeout(() => setStatusMessage(null), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-blue-400 font-semibold font-mono">
              Inquiries &amp; Engagement
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Create High-Impact <span className="text-blue-400">Visuals</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-3 font-normal">
            Available for graphic design, high-converting social media creatives (Instagram &amp; Facebook), and brand identities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Verified Contact Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-medium uppercase tracking-wider text-white mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-white/40 mb-6 font-normal">
                Direct response via email or direct WhatsApp call/message.
              </p>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                        EMAIL ADDRESS
                      </div>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-xs sm:text-sm font-mono text-white/80 hover:text-white truncate block"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white/50 hover:text-white transition-colors shrink-0 ml-2"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone & WhatsApp Box */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-blue-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
                        PHONE / WHATSAPP
                      </div>
                      <a
                        href={`tel:${profileData.phone}`}
                        className="text-xs sm:text-sm font-mono text-white/80 hover:text-white block"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white/50 hover:text-white transition-colors shrink-0 ml-2"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* WhatsApp Quick Action Button */}
                <a
                  href="https://wa.me/923385306005"
                  target="_blank"
                  rel="noreferrer"
                  id="whatsapp-direct-btn"
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-xs font-mono uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>Chat on WhatsApp (+92 3385306005)</span>
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 space-y-2 text-xs text-white/40 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Rawalpindi / Islamabad &bull; Dubai (UAE)</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Direct Reach &bull; Immediate Turnaround</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Message Dispatcher Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-base font-medium uppercase tracking-wider text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-white/40 mb-6 font-normal">
              Fill out this form to prepare a direct inquiry.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5"
                  >
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-white/40 focus:outline-none text-white text-sm placeholder-white/20 font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. name@company.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-white/40 focus:outline-none text-white text-sm placeholder-white/20 font-sans"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5"
                >
                  SUBJECT / ROLE / PROJECT
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="e.g. Product Design / Web Development Opportunity"
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-white/40 focus:outline-none text-white text-sm placeholder-white/20 font-sans"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your initiative, team goals, or project scope..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-white/40 focus:outline-none text-white text-sm placeholder-white/20 font-sans resize-none"
                />
              </div>

              {statusMessage && (
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                id="submit-contact-btn"
                className="w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest text-black bg-white hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Dispatch Email Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
