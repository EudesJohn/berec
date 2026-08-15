import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { company, navigation, categories } from '../data/site-data';
import { IconPin, IconPhone, IconMail, IconClock } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/75">
      {/* decorative glows */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-96 h-96 rounded-full bg-berec-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-gold-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/10 ring-1 ring-white/20">
                <img src="/images/logo/menu-logo.webp" alt="BEREC" width="32" height="32" loading="lazy" decoding="async" className="w-8 h-8 object-contain" />
              </span>
              <span className="font-heading font-extrabold text-white text-lg tracking-wide">
                BEREC <span className="text-berec-300">SARL</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">{company.description.split('.')[0]}.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Bénin', 'Tchad', 'Togo', 'Côte d\'Ivoire', 'Niger', 'Bangui (RCA)'].map((c) => (
                <span key={c} className="px-2.5 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-[11px] text-white/60">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: 0.08 }}>
            <h4 className="text-white font-heading font-semibold text-sm tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="inline-flex items-center gap-2 hover:text-berec-200 transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-berec-400/60 group-hover:bg-gold-400 transition-colors" />
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: 0.16 }}>
            <h4 className="text-white font-heading font-semibold text-sm tracking-widest uppercase mb-5">Catégories</h4>
            <ul className="space-y-2.5 text-sm">
              {categories.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link to={`/produits?cat=${c.slug}`} className="inline-flex items-center gap-2 hover:text-berec-200 transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-berec-400/60 group-hover:bg-gold-400 transition-colors" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: 0.24 }}>
            <h4 className="text-white font-heading font-semibold text-sm tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-start">
                <IconPin className="mt-1.5 w-4 h-4 text-berec-300 shrink-0" />
                <span>{company.address},<br />{company.city}</span>
              </li>
              <li className="flex gap-3 items-start">
                <IconPhone className="mt-1.5 w-4 h-4 text-berec-300 shrink-0" />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-berec-200 transition-colors">{company.phone}</a>
              </li>
              <li className="flex gap-3 items-start">
                <IconMail className="mt-1.5 w-4 h-4 text-berec-300 shrink-0" />
                <span className="flex flex-col">
                  <a href={`mailto:${company.email}`} className="hover:text-berec-200 transition-colors">{company.email}</a>
                  <a href={`mailto:${company.email2}`} className="hover:text-berec-200 transition-colors">{company.email2}</a>
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <IconClock className="mt-1.5 w-4 h-4 text-berec-300 shrink-0" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} {company.name}. Tous droits réservés.</p>
          <p>
            Équipements médicaux · Location de voitures · Manutention
          </p>
        </div>
      </div>
    </footer>
  );
}
