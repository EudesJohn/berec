import { Link } from 'react-router-dom';

import { articles } from '../data/site-data';
import { ArticleCard, PageBanner, Reveal } from '../components/Shared';

export default function Actualites() {
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
  const latest = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <PageBanner eyebrow="Actualités / Réalisations" title="Nos actualités et réalisations" crumb="Actualités" />

      {/* Latest post feature */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <Link to={`/blog/${latest.slug}`} className="group relative block rounded-3xl overflow-hidden min-h-[24rem] shadow-card hover:shadow-card-hover transition-[transform,box-shadow] duration-300">
              <img src={latest.cover} alt={latest.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent" />
              <div className="relative p-8 md:p-12 flex flex-col justify-end h-full min-h-[24rem]">
                <div className="flex flex-wrap items-center gap-3 text-[12.5px] mb-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-berec-500 to-berec-700 text-white font-bold shadow-card">{latest.category}</span>
                  <span className="text-white/80">{new Date(latest.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white text-balance leading-tight max-w-3xl group-hover:text-berec-200 transition-colors">
                  {latest.title}
                </h2>
                <p className="mt-4 text-white/75 max-w-2xl leading-relaxed">{latest.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-berec-200 font-semibold text-[14.5px]">
                  Lire l'article
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          </Reveal>

          {/* remaining posts */}
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} />)}
          </div>
        </div>
      </section>

      {/* band with link to blog */}
      <section className="pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="rounded-2xl bg-gradient-to-r from-berec-600 to-berec-800 px-8 py-8 flex flex-wrap items-center justify-between gap-5 text-white shadow-card">
              <div>
                <h3 className="font-heading text-xl font-bold">Envie d'en savoir plus sur nos publications ?</h3>
                <p className="mt-1 text-white/80 text-[14.5px]">Retrouvez l'intégralité de nos articles, actualités et réalisations sur le blog.</p>
              </div>
              <Link to="/blog" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-heading font-bold text-berec-700 hover:-translate-y-0.5 hover:shadow-lg transition duration-300">
                Voir le blog <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
