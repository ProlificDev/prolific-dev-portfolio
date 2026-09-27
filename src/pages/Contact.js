import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawPhone = form.phone.replace(/[\s\-()]/g, '');
    const phone = rawPhone.startsWith('+') ? rawPhone.slice(1) : rawPhone; // eslint-disable-line no-unused-vars
    const text = `Hi Ifechukwu (ProlificDev)!%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0AMessage:%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/2348154121633?text=${text}`, '_blank');
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const inputBg = 'bg-gray-50 border-gray-200 text-gray-900 placeholder-white/30 focus:border-blue-500';

  const contactItems = [
    { label: 'Email',           value: 'Prolificdevinnovations@gmail.com',    href: 'mailto:Prolificdevinnovations@gmail.com',                           mono: true  },
    { label: 'WhatsApp',        value: '+234 815 412 1633',                   href: 'https://wa.me/2348154121633',                                        mono: true  },
    { label: 'GitHub',          value: 'github.com/ProlificDev',              href: 'https://github.com/ProlificDev',                                     mono: false },
    { label: 'LinkedIn',        value: 'linkedin.com/in/ifechukwu-awuzie',    href: 'https://www.linkedin.com/in/ifechukwu-awuzie-0289632b9',             mono: false },
    { label: 'Instagram',       value: '@prolificdev.ai',                     href: 'https://www.instagram.com/prolificdev.ai?igsh=NXU1M2IxNGF2OHpn',    mono: false },
    { label: 'WhatsApp Channel',value: 'Follow on WhatsApp',                  href: 'https://whatsapp.com/channel/0029VbDarRkEKyZDuC1YQc1R',             mono: false },
    { label: 'X / Twitter',     value: '@master_pia71229',                    href: 'https://x.com/master_pia71229?t=zlZuVyl11utd63kwfePaSw&s=09',        mono: false },
  ];

  return (
    <div className="bg-white text-gray-900 transition-colors duration-300">

      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 px-5 max-w-2xl mx-auto text-center">
        <motion.p
          className="text-[10px] font-mono tracking-widest uppercase mb-4 text-gray-500"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Contact
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Let's build <span className="text-blue-500">something.</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-sm leading-relaxed max-w-sm mx-auto text-gray-500"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          I'm <span className="text-gray-900 font-medium">Ifechukwu Awuzie</span> — aka{' '}
          <span className="text-blue-500 font-semibold">ProlificDev</span>.
          Full stack developer. Whether you have a project, a question, or an opportunity, I'd love to hear from you.
        </motion.p>
      </section>

      <motion.div
        className="border-t border-gray-200"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        style={{ originX: 0 }}
      />

      {/* ── CONTACT ITEMS ── */}
      <section className="py-10 px-5 max-w-lg mx-auto">
        <div className="divide-y divide-white/10">
          {contactItems.map(({ label, value, href, mono }, i) => (
            <motion.div
              key={label}
              className="py-4 flex items-center justify-between gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            >
              <span className="text-[10px] font-mono tracking-widest uppercase shrink-0 text-gray-500">{label}</span>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`text-xs sm:text-sm transition-colors hover:text-blue-500 truncate text-gray-800 ${mono ? 'font-mono' : 'font-medium'}`}
              >
                {value} ↗
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="pb-20 px-5 max-w-lg mx-auto">
        <FadeUp>
          <p className="text-[10px] font-mono tracking-widest uppercase mb-6 text-center text-gray-500">Send a message</p>
        </FadeUp>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: 'name',  label: 'Name',            type: 'text',  placeholder: 'Your name',                         note: null },
            { name: 'email', label: 'Email',           type: 'email', placeholder: 'your@email.com',                    note: null },
            { name: 'phone', label: 'WhatsApp Number', type: 'tel',   placeholder: '+1 234 567 8900 (with country code)', note: 'Include your country code so I can reach you back on WhatsApp.' },
          ].map(({ name, label, type, placeholder, note }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            >
              <label className="block text-[10px] font-mono tracking-widest uppercase mb-1.5 text-gray-500">
                {label}{name === 'phone' && <span className="text-blue-500"> *</span>}
              </label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                required
                placeholder={placeholder}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors duration-200 ${inputBg}`}
              />
              {note && <p className="text-[10px] mt-1.5 text-gray-500">{note}</p>}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          >
            <label className="block text-[10px] font-mono tracking-widest uppercase mb-1.5 text-gray-500">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={5}
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors duration-200 resize-none ${inputBg}`}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
          >
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-400 text-gray-900 text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,102,255,0.4)] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send via WhatsApp
            </button>

            {sent && (
              <motion.div
                className="py-3 px-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm text-center font-medium mt-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                ✓ WhatsApp is opening — your message is pre-filled and ready to send!
              </motion.div>
            )}
          </motion.div>
        </form>
      </section>

    </div>
  );
};

export default Contact;
