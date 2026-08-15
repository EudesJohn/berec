import { useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import products from '../data/products.json';
import { categories } from '../data/site-data';
import { PageBanner, ProductCard } from '../components/Shared';
import { CategoryIcon } from '../components/Icons';
import { EASE_OUT } from '../lib/motion';

const sortOptions = [
  { key: 'default', label: 'Tri par défaut' },
  { key: 'name-asc', label: 'Nom : A → Z' },
  { key: 'name-desc', label: 'Nom : Z → A' },
];

export default function Produits() {
  const [params, setParams] = useSearchParams();
  const activeCat = params.get('cat') || 'all';
  const [sort, setSort] = useState('default');
  const [page, setPage] = useState(1);
  const PER_PAGE = 8;

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCat !== 'all') {
      list = list.filter((p) => (p.categories || []).includes(activeCat));
    }
    if (sort === 'name-asc') list.sort((a, b) => a.title.localeCompare(b.title, 'fr'));
    if (sort === 'name-desc') list.sort((a, b) => b.title.localeCompare(a.title, 'fr'));
    return list;
  }, [activeCat, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, pages);
  const visible = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const activeCatName = activeCat === 'all' ? 'Tous les produits' : (categories.find((c) => c.slug === activeCat)?.name || activeCat);

  return (
    <>
      <PageBanner eyebrow="Catalogue" title="Nos produits & équipements" crumb="Produits" />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-center text-[15px] text-navy-800/65 max-w-2xl mx-auto">
            {filtered.length} produits référencés{activeCat !== 'all' && <> dans la catégorie <strong className="text-berec-600">{activeCatName}</strong></>} — DRÄGER, HOLTEX, COMED, CAIR, BBRAUN.
          </p>

          {/* Category filter */}
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            <button
              onClick={() => { setPage(1); setParams({}); }}
              className={`px-5 py-3 rounded-full text-[13.5px] font-semibold transition duration-300 ${activeCat === 'all' ? 'bg-gradient-to-r from-berec-500 to-berec-700 text-white shadow-card' : 'bg-berec-50 text-berec-700 ring-1 ring-berec-200 hover:bg-berec-100'}`}
            >
              Tous
            </button>
            {categories.map((c) => {
              const count = products.filter((p) => (p.categories || []).includes(c.slug)).length;
              const active = activeCat === c.slug;
              return (
                <button
                  key={c.slug}
                  onClick={() => { setPage(1); setParams({ cat: c.slug }); }}
                  className={`px-5 py-3 rounded-full text-[13.5px] font-semibold transition duration-300 ${active ? 'bg-gradient-to-r from-berec-500 to-berec-700 text-white shadow-card' : 'bg-berec-50 text-berec-700 ring-1 ring-berec-200 hover:bg-berec-100'}`}
                >
                  {c.name} <span className={`ml-1 text-[11px] ${active ? 'text-white/70' : 'text-berec-500/70'}`}>({count})</span>
                </button>
              );
            })}
          </div>

          {/* Sort + count bar */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-berec-50/60 ring-1 ring-berec-100 px-5 py-3.5">
            <p className="text-[13.5px] text-navy-800/70">
              Affichage de <strong className="text-berec-600">{visible.length}</strong> produit{visible.length > 1 ? 's' : ''} — page {safePage}/{pages}
            </p>
            <label className="flex items-center gap-2 text-[13.5px] text-navy-800/70">
              Trier :
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-white ring-1 ring-berec-200 rounded-lg px-3 py-2 text-[13.5px] font-medium text-navy-900 focus:outline-none focus:ring-2 focus:ring-berec-400 cursor-pointer"
              >
                {sortOptions.map((o) => <option key={o.key} value={o.key}>{o.label}</option>)}
              </select>
            </label>
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat + sort + safePage}
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
              className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {visible.map((p, i) => (
                <motion.div
                  key={p.slug}
                  variants={{ hidden: { opacity: 0, y: 26, scale: 0.97 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } } }}
                >
                  <ProductCard product={p} index={i} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {pages > 1 && (
            <div className="mt-14 flex justify-center gap-2">
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => { setPage(n); window.scrollTo({ top: 380, behavior: 'smooth' }); }}
                  className={`w-11 h-11 rounded-full font-heading font-bold transition duration-300 ${n === safePage ? 'bg-gradient-to-r from-berec-500 to-berec-700 text-white shadow-card' : 'bg-white ring-1 ring-berec-200 text-navy-800 hover:bg-berec-50'}`}
                >
                  {n}
                </button>
              ))}
            </div>
          )}

          {/* Empty state */}
          {visible.length === 0 && (
            <div className="mt-16 text-center py-16">
              <div className="w-20 h-20 mx-auto rounded-full bg-berec-50 ring-1 ring-berec-200 grid place-items-center">
                <svg className="w-9 h-9 text-berec-500" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="m20.5 20.5-4.2-4.2" /></svg>
              </div>
              <p className="mt-5 font-heading font-bold text-xl text-navy-900">Aucun produit dans cette catégorie</p>
              <p className="mt-2 text-navy-800/60 text-[14.5px]">Essayez une autre catégorie ou revenez plus tard.</p>
              <button onClick={() => { setPage(1); setParams({}); }} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-berec-500 to-berec-700 px-7 py-3 font-semibold text-white shadow-card hover:shadow-glow hover:-translate-y-0.5 transition active:scale-[0.98]">
                Voir tous les produits
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Categories strip */}
      <section className="py-16 bg-gradient-to-b from-berec-50/60 to-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase text-berec-500"><span className="w-6 h-px bg-current" /> Catégories <span className="w-6 h-px bg-current" /></span>
            <h2 className="mt-3 font-heading text-2xl md:text-3xl font-extrabold text-navy-900">Explorer par spécialité</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/produits?cat=${c.slug}`}
                  className="group relative block rounded-2xl overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover transition duration-300 active:scale-[0.985] hover:-translate-y-1.5"
                >
                  <img src={c.image} alt={c.name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <span className="grid place-items-center w-9 h-9 rounded-xl bg-white/15 backdrop-blur ring-1 ring-white/20 text-white">
                      <CategoryIcon icon={c.icon} className="w-4.5 h-4.5" />
                    </span>
                    <h3 className="mt-1 font-heading font-bold text-white leading-tight">{c.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
