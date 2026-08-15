import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { articles } from '../data/site-data';
import { PageBanner, ArticleCard, Reveal } from '../components/Shared';

export default function Blog() {
  const cats = useMemo(() => ['Tous', ...new Set(articles.map((a) => a.category))], []);
  const [cat, setCat] = useState('Tous');

  const filtered = useMemo(() => (cat === 'Tous' ? articles : articles.filter((a) => a.category === cat)), [cat]);
  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <PageBanner eyebrow="Blog" title="Actualités & publications" crumb="Blog" />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {cats.map((c) => {
              const count = c === 'Tous' ? articles.length : articles.filter((a) => a.category === c).length;
              const active = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-5 py-3 rounded-full text-[13.5px] font-semibold transition duration-300 ${active ? 'bg-gradient-to-r from-berec-500 to-berec-700 text-white shadow-card' : 'bg-berec-50 text-berec-700 ring-1 ring-berec-200 hover:bg-berec-100'}`}
                >
                  {c} <span className={`ml-1 text-[11px] ${active ? 'text-white/70' : 'text-berec-500/70'}`}>({count})</span>
                </button>
              );
            })}
          </div>

          {/* Featured post */}
          {sorted.length > 0 && (
            <Reveal className="mt-12">
              <Link to={`/blog/${sorted[0].slug}`} className="group block md:grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-berec-100 transition-[transform,box-shadow] duration-300">
                <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-berec-50">
                  <img src={sorted[0].cover} alt={sorted[0].title} loading="lazy" decoding="async" className="w-full h-full md:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-berec-500 to-berec-700 text-white text-[12px] font-bold shadow-card">À la une</span>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-[12.5px] text-navy-800/55">
                    <span className="px-2.5 py-1 rounded-full bg-berec-50 ring-1 ring-berec-200 text-berec-700 font-semibold">{sorted[0].category}</span>
                    <span>{new Date(sorted[0].date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h2 className="mt-4 font-heading text-2xl md:text-3xl font-extrabold text-navy-900 group-hover:text-berec-600 transition-colors leading-snug">{sorted[0].title}</h2>
                  <p className="mt-4 text-navy-800/65 leading-relaxed">{sorted[0].excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-berec-600 font-semibold text-[14.5px]">
                    Lire l'article
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={cat}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
            >
              {sorted.slice(1).map((a, i) => <ArticleCard key={a.slug} article={a} index={i} />)}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
