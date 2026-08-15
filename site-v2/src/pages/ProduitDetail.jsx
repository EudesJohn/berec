import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import products from '../data/products.json';
import { categories } from '../data/site-data';
import { PageBanner, Reveal, Button, ProductCard } from '../components/Shared';
import { IconHospital, IconGlobe, IconWrench } from '../components/Icons';

/* Lightweight markdown-ish rendering: **bold**, paragraphs */
function renderDescription(text) {
  return text.split(/\n{2,}/).filter(Boolean).map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={i} className="font-heading text-lg font-bold text-berec-800 mt-6 mb-3">
          {trimmed.replace(/^##\s*/, '')}
        </h2>
      );
    }
    const parts = trimmed.split('\n');
    return (
      <div key={i} className="mb-4">
        {parts.map((line, j) => {
          if (line.startsWith('– ') || line.startsWith('- ')) {
            return (
              <p key={j} className="flex items-start gap-2.5 text-navy-800/75 leading-relaxed mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-berec-400 mt-2 shrink-0" />
                <span>{line.replace(/^[–-]\s*/, '')}</span>
              </p>
            );
          }
          const bolded = line.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
          return (
            <p key={j} className="text-navy-800/75 leading-relaxed mb-1.5">
              {bolded.map((b, k) => b.startsWith('**') ? <strong key={k} className="text-berec-800 font-semibold">{b.slice(2, -2)}</strong> : <span key={k}>{b}</span>)}
            </p>
          );
        })}
      </div>
    );
  });
}

/* Row of five SVG stars */
function Stars() {
  return (
    <span className="flex gap-0.5 text-gold-400" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.5l-5.8 3 1.1-6.5L2.6 9.4l6.5-.9z" /></svg>
      ))}
    </span>
  );
}

export default function ProduitDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <>
        <PageBanner eyebrow="Produit" title="Produit introuvable" crumb="Produit" />
        <div className="py-24 text-center">
          <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-berec-50 ring-1 ring-berec-200">
            <svg className="w-8 h-8 text-berec-500" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="m20.5 20.5-4.2-4.2" /></svg>
          </span>
          <p className="mt-4 font-heading font-bold text-xl text-navy-900">Ce produit n'existe pas.</p>
          <div className="mt-6"><Button to="/produits" variant="primary">Retour au catalogue</Button></div>
        </div>
      </>
    );
  }

  const prodCats = (product.categories || []).map((slug) => categories.find((c) => c.slug === slug)).filter(Boolean);
  const related = products.filter((p) => p.slug !== product.slug && (p.categories || []).some((c) => (product.categories || []).includes(c))).slice(0, 4);
  const fallbackRelated = related.length ? related : products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <PageBanner eyebrow="Produit" title={product.title} crumb="Fiche produit" />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <nav className="text-[13px] text-navy-800/55 mb-8">
            <Link to="/" className="hover:text-berec-600">Accueil</Link>
            <span className="mx-2">/</span>
            <Link to="/produits" className="hover:text-berec-600">Produits</Link>
            <span className="mx-2">/</span>
            <span className="text-berec-600 font-medium">{product.title}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <Reveal>
              <div className="lg:sticky lg:top-28 space-y-4">
                <div className="relative rounded-3xl overflow-hidden bg-berec-50 shadow-card ring-1 ring-berec-100 group">
                  <motion.div
                    key="main"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={`/images/products/${product.image}`}
                      alt={product.title}
                      decoding="async"
                      className="w-full aspect-square object-cover"
                    />
                  </motion.div>
                  <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-gradient-to-r from-berec-500 to-berec-700 text-white text-[12px] font-bold shadow-card">
                    {prodCats[0]?.name || 'Équipement'}
                  </span>
                </div>
                {/* thumbnails */}
                <div className="flex gap-3 flex-wrap">
                  <button className="w-20 h-20 rounded-xl overflow-hidden ring-2 ring-berec-400 shadow">
                    <img src={`/images/products/${product.image}`} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </button>
                  {prodCats.slice(1).map((c) => (
                    <div key={c.slug} className="w-20 h-20 rounded-xl overflow-hidden ring-2 ring-berec-100 shadow-sm">
                      <img src={c.image} alt={c.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Info */}
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-berec-50 ring-1 ring-berec-200 text-[12px] font-semibold text-berec-700">Référence catalogue</span>
                  {prodCats.map((c) => (
                    <Link key={c.slug} to={`/produits?cat=${c.slug}`} className="px-3 py-1 rounded-full bg-white ring-1 ring-berec-100 text-[12px] font-medium text-navy-800/70 hover:bg-berec-50 transition-colors">
                      {c.name}
                    </Link>
                  ))}
                </div>
                <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">{product.title}</h1>
                <div className="mt-4 flex items-center gap-3">
                  <Stars />
                  <span className="text-[13px] text-navy-800/55">Fiche technique de qualité professionnelle</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 rounded-2xl bg-gradient-to-br from-berec-50 to-white ring-1 ring-berec-100 p-6">
                  <p className="text-[13px] font-semibold uppercase tracking-widest text-berec-600 mb-3">Points clés</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <span className="w-11 h-11 rounded-xl bg-white shadow-sm ring-1 ring-berec-100 grid place-items-center text-berec-600"><IconHospital className="w-5 h-5" /></span>
                      <span className="text-navy-800/75">Usage hospitalier</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <span className="w-11 h-11 rounded-xl bg-white shadow-sm ring-1 ring-berec-100 grid place-items-center text-berec-600"><IconGlobe className="w-5 h-5" /></span>
                      <span className="text-navy-800/75">Installation en Afrique</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 text-center">
                      <span className="w-11 h-11 rounded-xl bg-white shadow-sm ring-1 ring-berec-100 grid place-items-center text-berec-600"><IconWrench className="w-5 h-5" /></span>
                      <span className="text-navy-800/75">Maintenance incluse</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-6 rounded-2xl ring-1 ring-berec-100 overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-4 px-7 py-5 bg-white">
                    <div className="flex items-center gap-4">
                      <p className="text-[13px] text-navy-800/55">Quantité</p>
                      <div className="flex items-center rounded-full ring-1 ring-berec-200 overflow-hidden">
                        <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 grid place-items-center text-berec-600 hover:bg-berec-50 transition-colors">−</button>
                        <span className="w-12 text-center font-heading font-bold text-navy-900">{qty}</span>
                        <button onClick={() => setQty(qty + 1)} className="w-10 h-10 grid place-items-center text-berec-600 hover:bg-berec-50 transition-colors">+</button>
                      </div>
                    </div>
                    <p className="text-[12.5px] text-navy-800/55">Devis sur demande — contactez notre équipe commerciale.</p>
                  </div>
                  <div className="flex flex-wrap gap-3 px-7 py-5 bg-berec-50/60 border-t border-berec-100">
                    <Button to="/contacts" variant="primary">Demander un devis</Button>
                    <Button to="/a-propos" variant="ghost">Notre savoir-faire</Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Description */}
          <Reveal className="mt-16">
            <div className="rounded-3xl ring-1 ring-berec-100 bg-white shadow-card overflow-hidden">
              <div className="px-8 py-5 border-b border-berec-100 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-berec-500 to-berec-700 text-white grid place-items-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M9 8h6M4 6a2 2 0 012-2h12a2 2 0 012 2v.5M4 6v12a2 2 0 002 2h12a2 2 0 002-2v-7" /></svg>
                </span>
                <h2 className="font-heading text-xl font-bold text-navy-900">Description du produit</h2>
              </div>
              <div className="px-8 py-7 prose-berec">
                {product.description ? renderDescription(product.description) : <p className="text-navy-800/70">Description détaillée disponible sur demande auprès de nos équipes.</p>}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-gradient-to-b from-berec-50/60 to-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase text-berec-500"><span className="w-6 h-px bg-current" /> Catalogue <span className="w-6 h-px bg-current" /></span>
            <h2 className="mt-3 font-heading text-2xl md:text-3xl font-extrabold text-navy-900">Produits similaires</h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {fallbackRelated.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
