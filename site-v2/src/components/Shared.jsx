import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { EASE_OUT } from '../lib/motion';

/* Animated reveal wrapper used everywhere */
export function Reveal({ children, delay = 0, y = 24, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-70px' }}
      transition={{ duration: 0.6, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

/* Button with solid teal gradient + refined hover */
export function Button({ children, to, href, onClick, variant = 'primary', className = '', size = 'lg' }) {
  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 active:scale-[0.98] ';
  const sizes = { sm: 'px-5 py-2 text-sm', lg: 'px-8 py-3.5 text-[15px]' };
  const variants = {
    primary:
      'bg-gradient-to-r from-berec-500 to-berec-700 text-white shadow-card hover:shadow-glow hover:-translate-y-0.5',
    outline:
      'bg-white/5 backdrop-blur ring-1 ring-white/35 text-white hover:bg-white/15 hover:-translate-y-0.5',
    ghost:
      'bg-berec-50 text-berec-700 ring-1 ring-berec-200 hover:bg-berec-100 hover:-translate-y-0.5',
    gold: 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-card hover:shadow-gold-400/30 hover:-translate-y-0.5',
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button onClick={onClick} className={cls}>{children}</button>;
}

/* Section heading: eyebrow + title + subtitle */
export function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <span className={`inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase ${light ? 'text-berec-200' : 'text-berec-500'}`}>
        <span className="w-6 h-px bg-current" />
        {eyebrow}
        <span className="w-6 h-px bg-current" />
      </span>
      <h2 className={`mt-4 font-heading text-3xl md:text-[2.4rem] font-extrabold leading-tight ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[15px] leading-relaxed ${light ? 'text-white/70' : 'text-navy-800/65'}`}>{subtitle}</p>
      )}
    </Reveal>
  );
}

/* Product card for catalogue grids */
export function ProductCard({ product, index = 0 }) {
  return (
    <Reveal delay={index * 0.07}>
      <Link
        to={`/produits/${product.slug}`}
        className="group block rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover border border-berec-100 transition duration-300 active:scale-[0.985] hover:-translate-y-1.5"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-berec-50">
          <img
            src={`/images/products/${product.image}`}
            alt={product.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          <span className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow transition-all duration-300 group-hover:bg-berec-600 group-hover:text-white">
            <svg className="w-4 h-4 text-berec-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-8.5M19 3l-7 7m0 0h5M12 10V5" /></svg>
          </span>
        </div>
        <div className="p-5">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-berec-500 mb-1.5">
            {product.categories?.[0]?.replace(/-/g, ' ')}
          </p>
          <h3 className="font-heading font-semibold text-navy-900 group-hover:text-berec-600 transition-colors leading-snug line-clamp-2 min-h-[2.7rem]">
            {product.title}
          </h3>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-berec-600">
            Lire la suite
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* Article card for blog listing */
export function ArticleCard({ article, index = 0 }) {
  return (
    <Reveal delay={index * 0.07}>
      <Link
        to={`/blog/${article.slug}`}
        className="group block rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover border border-berec-100 transition duration-300 active:scale-[0.985] hover:-translate-y-1.5"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-berec-50">
          <img src={article.cover} alt={article.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[11.5px] font-semibold text-berec-700 shadow">
            {article.category}
          </span>
        </div>
        <div className="p-6">
          <p className="text-[12px] font-medium text-navy-800/55 mb-2">
            {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <h3 className="font-heading font-semibold text-navy-900 group-hover:text-berec-600 transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-berec-600">
            Lire l'article
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* Page banner / hero for inner pages */
export function PageBanner({ eyebrow, title, crumb }) {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-28 bg-navy-950">
      <img src="/images/hero/banner1.webp" alt="" decoding="async" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/40 to-navy-950" />
      <div className="absolute -right-24 -top-24 w-[26rem] h-[26rem] rounded-full bg-berec-500/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 w-72 h-72 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.25em] uppercase text-berec-200">
            <span className="w-8 h-px bg-berec-300" /> {eyebrow} <span className="w-8 h-px bg-berec-300" />
          </span>
          <h1 className="mt-5 font-heading text-4xl md:text-5xl font-extrabold text-white text-balance leading-tight">
            {title}
          </h1>
        </Reveal>
        {crumb && (
          <Reveal delay={0.15}>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[12.5px] text-white/75 backdrop-blur">
              <Link to="/" className="hover:text-berec-200 transition-colors">Accueil</Link>
              <span className="text-berec-300">/</span>
              <span className="text-white/90">{crumb}</span>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
