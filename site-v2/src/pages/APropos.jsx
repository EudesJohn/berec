import { company, departments, realisations } from '../data/site-data';
import { Reveal, Button, SectionHeading, PageBanner } from '../components/Shared';

const videos = [
  { id: 'kBDAe8J12mI', title: 'Partenaire BEREC — BMI' },
  { id: 'G5ArcXP8KzM', title: 'Partenaire BEREC — BMI 2' },
  { id: 'rjSLAMsRZaE', title: 'Partenaire BEREC — BMI 3' },
];

export default function APropos() {
  return (
    <>
      <PageBanner eyebrow="À propos" title={`En savoir plus sur ${company.name}`} crumb="À Propos" />

      {/* ===== Histoire / qui sommes-nous ===== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 grid gap-14 lg:grid-cols-2 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase text-berec-500"><span className="w-6 h-px bg-current" /> Notre histoire <span className="w-6 h-px bg-current" /></span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">QUI SOMMES-NOUS ?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-navy-800/70 leading-relaxed">
                {company.description}
              </p>
              <p className="mt-4 text-navy-800/70 leading-relaxed">
                {company.legalName}. {company.founded.toLowerCase()} dans la fourniture et l'installation d'équipements médico-techniques, notre groupe est aujourd'hui un acteur de référence du plateau technique africain, présent au <strong className="text-berec-700 font-semibold">{company.countries.join(', ')}</strong>.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-2">
                {company.countries.map((c) => (
                  <span key={c} className="px-3.5 py-1.5 rounded-full bg-berec-50 ring-1 ring-berec-200 text-[12.5px] font-medium text-berec-700">
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { stat: '25+', label: 'Années d\'expérience' },
                  { stat: '90%', label: 'CA équipements médicaux' },
                  { stat: '8', label: 'Grands marchés réalisés' },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-gradient-to-br from-berec-50 to-white ring-1 ring-berec-100 p-5 text-center">
                    <p className="font-heading text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-berec-600 to-berec-800">{s.stat}</p>
                    <p className="mt-2 text-[11.5px] text-navy-800/65 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-berec-500/15 to-berec-700/15 blur-xl" />
              <div className="relative rounded-[1.8rem] overflow-hidden shadow-2xl ring-1 ring-berec-100">
                <img src="/images/about/siege-berec.webp" alt="Siège social BEREC" loading="lazy" decoding="async" className="w-full h-[26rem] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-heading font-bold text-lg">Notre siège social</p>
                  <p className="text-sm text-white/80">{company.address}, {company.city}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Les 3 départements ===== */}
      <section className="py-20 bg-gradient-to-b from-berec-50/60 to-white">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Organisation" title="Nos trois départements d'activité" subtitle="Des équipes spécialisées et complémentaires pour couvrir toute la chaîne de valeur." />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {departments.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-white shadow-card border border-berec-100 p-7 group hover:shadow-card-hover hover:-translate-y-1 transition duration-300">
                  <div className="flex items-start justify-between">
                    <div className="w-13 h-12 rounded-xl bg-gradient-to-br from-berec-500 to-berec-700 text-white grid place-items-center shadow-card">
                      <span className="font-heading font-extrabold text-xl">{i + 1}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-3xl font-extrabold text-berec-500">{d.percent}%</p>
                      <p className="text-[10.5px] uppercase tracking-widest text-navy-800/50">du CA</p>
                    </div>
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-navy-900">{d.title}</h3>
                  <p className="text-[13px] font-semibold text-gold-500">{d.subtitle}</p>
                  <p className="mt-4 text-[14px] text-navy-800/70 leading-relaxed">{d.description}</p>
                  <ul className="mt-5 space-y-2">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-navy-800/80">
                        <svg className="w-4 h-4 mt-0.5 text-berec-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Réalisations ===== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Nos réalisations" title="8 marchés emblématiques (2009 – 2017)" subtitle="Fourniture, installation et mise en service d'équipements dans les hôpitaux de zone et centres de santé du Bénin." />
          <div className="mt-14 relative">
            {/* timeline line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-berec-200 via-berec-300 to-gold-300" />
            <div className="space-y-10">
              {realisations.map((r, i) => {
                const right = i % 2 === 1;
                return (
                  <Reveal key={r.title} delay={0.05}>
                    <div className={`relative flex md:items-center gap-8 ${right ? 'md:flex-row-reverse' : ''}`}>
                      {/* dot */}
                      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 w-4 h-4 rounded-full bg-white ring-4 ring-berec-400 shadow" />
                      <div className="hidden md:block md:w-1/2" />
                      <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${right ? 'md:pr-14' : 'md:pl-14'}`}>
                        <div className="group rounded-2xl bg-white shadow-card hover:shadow-card-hover border border-berec-100 p-6 transition duration-300 hover:-translate-y-1">
                          <span className="inline-block px-3 py-1 rounded-full bg-berec-50 ring-1 ring-berec-200 text-[11px] font-semibold text-berec-700 mb-3">
                            Marché public
                          </span>
                          <h3 className="font-heading font-bold text-lg text-navy-900 group-hover:text-berec-600 transition-colors">{r.title}</h3>
                          <p className="mt-2 text-[14px] text-navy-800/70 leading-relaxed">{r.detail}</p>
                          <p className="mt-4 text-[12.5px] font-medium text-gold-500 flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.6 2A9.6 9.6 0 1112 2.4 9.6 9.6 0 0121.6 12z" /></svg>
                            {r.ref}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Vidéos partenaires ===== */}
      <section className="py-20 bg-gradient-to-b from-berec-50/60 to-white">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Vidéos" title="Nos partenaires en action" subtitle="Un aperçu du savoir-faire de nos partenaires utilisateurs d'équipements BEREC." />
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {videos.map((v, i) => (
              <Reveal key={v.id} delay={i * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover ring-1 ring-berec-100 transition duration-300 hover:-translate-y-1.5 bg-navy-950">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex items-center gap-3">
                    <span className="grid place-items-center w-10 h-10 rounded-full bg-red-600 text-white shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                    <p className="font-heading font-semibold text-navy-900 leading-snug">{v.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Besoin de nous rencontrer ===== */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal>
            <div className="relative rounded-[2rem] overflow-hidden bg-navy-950 px-8 py-14 text-center">
              <div className="pointer-events-none absolute -right-20 -top-20 w-72 h-72 rounded-full bg-berec-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 bottom-0 w-60 h-60 rounded-full bg-gold-400/15 blur-3xl" />
              <span className="relative inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase text-gold-300"><span className="w-6 h-px bg-current" /> Rendez-vous <span className="w-6 h-px bg-current" /></span>
              <h2 className="relative mt-4 font-heading text-3xl md:text-4xl font-extrabold text-white text-balance">Besoin de nous rencontrer ? Prenez vite RDV.</h2>
              <p className="relative mt-4 text-white/65 max-w-2xl mx-auto">Équipez, maintenez et modernisez votre plateau technique avec l'appui de nos ingénieurs biomédicaux.</p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-4">
                <Button to="/contacts" variant="gold">Prendre rendez-vous</Button>
                <Button to="/produits" variant="outline">Voir les produits</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
