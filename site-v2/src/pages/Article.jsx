import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { articles } from '../data/site-data';
import { PageBanner, Button, ArticleCard, Reveal } from '../components/Shared';
import { EASE_OUT } from '../lib/motion';

export default function Article() {
  const { slug } = useParams();
  const index = articles.findIndex((a) => a.slug === slug);
  const article = articles[index];

  if (!article) {
    return (
      <>
        <PageBanner eyebrow="Blog" title="Article introuvable" crumb="Blog" />
        <div className="py-24 text-center">
          <span className="inline-grid place-items-center w-16 h-16 rounded-2xl bg-berec-50 ring-1 ring-berec-200">
            <svg className="w-8 h-8 text-berec-500" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6M9 8h1M7 3h6l5 5v13H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /></svg>
          </span>
          <p className="mt-4 font-heading font-bold text-xl text-navy-900">Cet article n'existe pas.</p>
          <div className="mt-6"><Button to="/blog" variant="primary">Retour au blog</Button></div>
        </div>
      </>
    );
  }

  const prev = articles[index - 1];
  const next = articles[index + 1];
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageBanner eyebrow="Article" title={article.title} crumb="Blog" />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-5">
          {/* meta */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[13px] text-navy-800/60">
              <span className="px-3 py-1 rounded-full bg-berec-50 ring-1 ring-berec-200 text-berec-700 font-semibold">{article.category}</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-berec-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>
                {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-berec-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.4-1.8M13 20H4a2 2 0 01-2-2v-1a4 4 0 014-4h3m2-5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" /></svg>
                {article.category}
              </span>
            </div>
          </Reveal>

          {/* cover */}
          <Reveal delay={0.08}>
            <div className="mt-8 rounded-3xl overflow-hidden shadow-card ring-1 ring-berec-100">
              <motion.img
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.1, ease: EASE_OUT }}
                src={article.cover}
                alt={article.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </Reveal>

          {/* body */}
          <Reveal delay={0.04}>
            <div className="mt-10 prose-berec">
              <p className="text-lg font-medium text-navy-900 leading-relaxed">{article.excerpt}</p>
              <p className="mt-6 text-navy-800/70 leading-relaxed">
                Ces interventions illustrent concrètement l'expertise des équipes techniques BEREC SARL : installation, maintenance,
                dépannage et remise en service des équipements médicaux, au service des hôpitaux, cliniques et centres de santé du Bénin
                et de toute la sous-région ouest-africaine.
              </p>
            </div>
          </Reveal>

          {/* gallery */}
          {article.images && article.images.length > 0 && (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {article.images.map((img, i) => (
                <Reveal key={img} delay={i * 0.08}>
                  <div className={`group relative rounded-2xl overflow-hidden shadow-card ring-1 ring-berec-100 ${i === 0 && article.images.length < 3 ? 'sm:col-span-2' : ''}`}>
                    <img src={img} alt={`Photo ${i + 1} — ${article.title}`} loading="lazy" decoding="async" className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-108" />
                    <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/35 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-[13px] flex items-center gap-2 font-medium">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V5h3m10 0h3v3M4 16v3h3m10 0h3v-3M8 12h8" /></svg>
                        Photo {i + 1}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* video */}
          {article.video && (
            <Reveal className="mt-10">
              <div className="rounded-3xl overflow-hidden shadow-card ring-1 ring-berec-100 bg-navy-950">
                <div className="aspect-video">
                  <iframe className="w-full h-full" src={article.video} title={article.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
                </div>
              </div>
            </Reveal>
          )}

          {/* tags */}
          {article.tags && article.tags.length > 0 && (
            <Reveal className="mt-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[13px] font-semibold uppercase tracking-widest text-navy-800/55 mr-2">Tags :</span>
                {article.tags.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-berec-50 ring-1 ring-berec-200 text-[12.5px] font-medium text-berec-700">{t}</span>
                ))}
              </div>
            </Reveal>
          )}

          {/* share */}
          <Reveal className="mt-10">
            <div className="rounded-2xl bg-gradient-to-r from-berec-50 to-white ring-1 ring-berec-100 px-6 py-5 flex flex-wrap items-center justify-between gap-4">
              <p className="font-heading font-bold text-navy-900">Partager cet article</p>
              <div className="flex gap-2">
                {[
                  { label: 'X', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}` },
                  { label: 'in', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}` },
                  { label: 'f', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white ring-1 ring-berec-200 text-berec-700 font-heading font-bold grid place-items-center hover:bg-berec-600 hover:text-white hover:ring-berec-600 transition duration-300">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* prev / next */}
          <Reveal className="mt-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {prev ? (
                <Link to={`/blog/${prev.slug}`} className="group rounded-2xl ring-1 ring-berec-100 bg-white p-6 hover:shadow-card-hover transition duration-300">
                  <p className="text-[12px] uppercase tracking-widest text-navy-800/50 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    Article précédent
                  </p>
                  <p className="mt-2 font-heading font-semibold text-navy-900 group-hover:text-berec-600 leading-snug line-clamp-2">{prev.title}</p>
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`/blog/${next.slug}`} className="group rounded-2xl ring-1 ring-berec-100 bg-white p-6 hover:shadow-card-hover transition duration-300 text-right">
                  <p className="text-[12px] uppercase tracking-widest text-navy-800/50 flex items-center justify-end gap-2">
                    Article suivant
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </p>
                  <p className="mt-2 font-heading font-semibold text-navy-900 group-hover:text-berec-600 leading-snug line-clamp-2">{next.title}</p>
                </Link>
              ) : <div />}
            </div>
          </Reveal>
        </div>
      </section>

      {/* related articles */}
      <section className="py-16 bg-gradient-to-b from-berec-50/60 to-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase text-berec-500"><span className="w-6 h-px bg-current" /> À découvrir <span className="w-6 h-px bg-current" /></span>
            <h2 className="mt-3 font-heading text-2xl md:text-3xl font-extrabold text-navy-900">Autres articles</h2>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {related.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
