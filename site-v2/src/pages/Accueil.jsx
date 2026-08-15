import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { company, partners, services, departments, articles, directorMessage } from '../data/site-data';
import { Reveal, Button, SectionHeading, ArticleCard } from '../components/Shared';
import { EASE_OUT } from '../lib/motion';

const serviceIcons = {
  wrench: (
    <><path d="M14.7 6.3a4 4 0 00-5.5 5L3 17.7V21h3.3l6.4-6.2a4 4 0 005-5.5l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z" /></>
  ),
  bulb: (
    <><path d="M9.7 19a6.5 6.5 0 004.6 0M12 2a7 7 0 00-4 12.7c.7.6 1.2 1.4 1.3 2.3h5.4c.1-.9.6-1.7 1.3-2.3A7 7 0 0012 2z" /></>
  ),
  handshake: (
    <><path d="M20 6l-3-3-3 3H6a1 1 0 00-1 1v8H3v5h6v-5H7V7h4.6l3-3L20 8v3h-2v3h4V7a1 1 0 00-1-1h-1z" /></>
  ),
};
const serviceIcons2 = {
  medic: (
    <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></>
  ),
  car: (
    <><path d="M5 17h1.5M17.5 17H19a1 1 0 001-1v-3.5L17.8 9H6.2L4 12.5V16a1 1 0 001 1h1.5M5 13h14M7.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></>
  ),
  crane: (
    <><path d="M4 21h16M6 21V5l6-2v18M12 12h6a2 2 0 012 2v1M6 9h6" /></>
  ),
};

const slides = [
  { img: '/images/hero/banner1.webp', kicker: 'BEREC SARL · Bénin Rent A Car', title: 'Des équipements et matériels de hautes qualités médicaux', text: 'Plus de 25 ans d\'expérience dans la fourniture, l\'installation et la maintenance d\'équipements hospitaliers de pointe en Afrique.' },
  { img: '/images/sections/salle-operation.webp', kicker: 'Plateau technique de pointe', title: 'Équipes médicales, votre bloc opératoire mérite l\'excellence', text: 'Stations d\'anesthésie, ventilateurs DRÄGER, mobiliers HOLTEX : nous équipons blocs et services de réanimation.' },
  { img: '/images/sections/location-voiture.webp', kicker: 'Logistique 360°', title: 'Location de voitures & manutention', text: 'Un parc de 22 véhicules et une équipe logistique dédiée au chargement, à l\'empotage et au pointage.' },
];

export default function Accueil() {
  return (
    <>
      <HeroSlider />
      <Partners />
      <Services />
      <AboutSection />
      <DirectorMessage />
      <DepartmentCards />
      <NewsSection />
      <ContactCta />
    </>
  );
}

/* ============ 1. Hero slider ============ */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const go = (d) => setCurrent((c) => (c + d + slides.length) % slides.length);

  return (
    <section className="relative h-[92vh] min-h-[620px] max-h-[900px] overflow-hidden bg-navy-950">
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={slides[current].img}
          alt=""
          initial={{ scale: 1.08, opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: EASE_OUT }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      {/* gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />

      {/* slide content */}
      <div className="absolute inset-0 z-10 mx-auto max-w-7xl px-5 flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
                exit: { opacity: 0, transition: { duration: 0.25 } },
              }}
            >
              <motion.span
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-[12px] font-semibold tracking-[0.2em] uppercase text-berec-200 ring-1 ring-white/20"
              >
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                {slides[current].kicker}
              </motion.span>
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.75 } } }}
                className="mt-6 font-heading text-4xl md:text-6xl font-extrabold text-white leading-[1.08] text-balance"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                className="mt-6 text-lg text-white/75 leading-relaxed max-w-xl"
              >
                {slides[current].text}
              </motion.p>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Button to="/produits" variant="gold">
                  Découvrir nos offres
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </Button>
                <Button to="/a-propos" variant="outline">Qui sommes-nous ?</Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* arrows */}
      <button onClick={() => go(-1)} aria-label="Précédent" className="absolute z-20 left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/25 text-white grid place-items-center hover:bg-berec-500 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={() => go(1)} aria-label="Suivant" className="absolute z-20 right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/25 text-white grid place-items-center hover:bg-berec-500 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* dots */}
      <div className="absolute z-20 bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((s, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-[width,background-color] duration-300 ${i === current ? 'w-9 bg-gradient-to-r from-berec-300 to-gold-400' : 'w-2 bg-white/40 hover:bg-white/70'}`} />
        ))}
      </div>

      {/* bottom scroll hint */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="absolute z-20 bottom-14 right-8 hidden md:flex items-center gap-2 text-white/50 text-[11px] tracking-widest uppercase rotate-90 origin-bottom-right">
        Faire défiler
      </motion.div>
    </section>
  );
}

/* ============ 2. Partenaires ============ */
function Partners() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Nos partenaires" title="16 marques internationales de confiance" subtitle="Nous collaborons avec les plus grands fabricants mondiaux d'équipements médicaux pour vous garantir des matériels certifiés et des technologies de pointe." />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={(i % 8) * 0.05}>
              <div className="group relative w-28 md:w-32 bg-white rounded-xl border border-berec-100 hover:border-berec-200 shadow-sm hover:shadow-card-hover p-3 grid place-items-center transition duration-300 hover:-translate-y-1.5">
                <img src={p.image} alt={p.name} loading="lazy" decoding="async" className="h-14 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 3. Domaines d'intervention (services) ============ */
function Services() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-berec-50/60 to-white">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Domaines d'intervention" title="Notre savoir-faire, tout au long du cycle de vie" subtitle="De la maintenance hospitalière aux conseils d'achat, en passant par la négociation de vos contrats." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <div className="relative h-full rounded-2xl bg-white shadow-card border border-berec-100 p-8 overflow-hidden group hover:shadow-card-hover hover:-translate-y-1 transition duration-300">
                <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-berec-500/8 group-hover:scale-150 group-hover:bg-berec-500/12 transition-[transform,background-color] duration-300" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-berec-500 to-berec-700 text-white grid place-items-center shadow-card group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{serviceIcons[s.icon]}</svg>
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-navy-900">{s.title}</h3>
                <p className="mt-3 text-[14.5px] text-navy-800/65 leading-relaxed">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-[13.5px] text-navy-800/80">
                      <svg className="w-4 h-4 mt-0.5 text-berec-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 4. Qui sommes-nous ============ */
function AboutSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute -left-28 top-1/3 w-96 h-96 rounded-full bg-berec-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 w-80 h-80 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 grid gap-14 lg:grid-cols-2 items-center">
        <Reveal>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img src="/images/about/professional-left.webp" alt="Equipe médicale BEREC" loading="lazy" decoding="async" className="w-full h-[26rem] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
            {/* floating badge */}
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute -bottom-7 -right-5 md:-right-8 glass rounded-2xl px-6 py-4 shadow-card-hover">
              <p className="font-heading text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-berec-500 to-berec-700">25+</p>
              <p className="mt-1 text-[12px] font-semibold tracking-wide text-navy-800/70 uppercase">années d'expérience</p>
            </motion.div>
            {/* floating years circle */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 to-berec-600 text-white grid place-items-center text-center shadow-xl">
              <div className="leading-tight">
                <p className="font-heading text-2xl font-extrabold">90%</p>
                <p className="text-[9.5px] font-semibold uppercase tracking-wide">du CA médical</p>
              </div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase text-berec-200"><span className="w-6 h-px bg-current" /> Qui sommes-nous ? <span className="w-6 h-px bg-current" /></span>
            <h2 className="mt-4 font-heading text-3xl md:text-[2.35rem] font-extrabold text-white leading-tight">BENIN RENT A CAR <span className="text-berec-300">(BEREC SARL)</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/75 leading-relaxed">{company.description}</p>
            <p className="mt-4 text-white/75 leading-relaxed">{company.mission}.</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n: '20', l: 'Produits référencés' },
                { n: '10', l: 'Catégories d\'équipements' },
                { n: '6', l: 'Pays d\'intervention' },
                { n: '3', l: 'Départements d\'excellence' },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-4 backdrop-blur">
                  <p className="font-heading text-2xl font-extrabold text-gold-300">{s.n}</p>
                  <p className="mt-1 text-[12.5px] text-white/65">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-9">
              <Button to="/a-propos" variant="primary">Lire plus <span aria-hidden>→</span></Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ 5. Mot du directeur ============ */
function DirectorMessage() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-white">
      <div className="pointer-events-none absolute top-10 right-0 w-[30rem] h-[30rem] rounded-full bg-berec-500/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Leadership" title="MOT DU DIRECTEUR" />
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-berec-500/25 via-transparent to-berec-700/25 blur-lg" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-berec-100">
                <img src={directorMessage.image} alt={directorMessage.name} loading="lazy" decoding="async" className="w-full aspect-[5/5.4] object-cover" />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[88%] glass rounded-2xl px-5 py-3 text-center shadow-lg">
                <p className="font-heading font-bold text-navy-900">{directorMessage.name}</p>
                <p className="text-[12.5px] text-berec-600 font-medium">{directorMessage.role}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative">
              <svg className="w-12 h-12 text-berec-300/50 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M10 8H6a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2zm9 0h-4a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2z"/></svg>
              <blockquote className="font-heading text-xl md:text-2xl font-medium text-navy-900 leading-relaxed text-balance">
                « {directorMessage.quote} »
              </blockquote>
              <p className="mt-6 text-[15px] text-navy-800/70 leading-relaxed">{directorMessage.note}</p>
              <div className="mt-8 pt-6 border-t border-berec-100 flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold text-berec-600">{directorMessage.name}</p>
                  <p className="text-[13px] text-navy-800/60">{directorMessage.role} · {company.name}</p>
                </div>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-11 h-11 rounded-full bg-berec-50 ring-1 ring-berec-200 text-berec-600 grid place-items-center hover:bg-berec-600 hover:text-white transition-colors" aria-label="Haut de page">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ 6. 3 services (départements) ============ */
function DepartmentCards() {
  const ico = { 'equipements-medicaux': serviceIcons2.medic, 'location-voitures': serviceIcons2.car, 'manutention': serviceIcons2.crane };
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-berec-50 to-white">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Notre groupe" title="Trois départements, une même exigence" subtitle="Une offre intégrée qui couvre l'équipement hospitalier, la mobilité et la logistique." />
        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {departments.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.08}>
              <div className="group relative h-full rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition duration-300 active:scale-[0.99] hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img src={d.image} alt={d.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/15 backdrop-blur ring-1 ring-white/25 text-white">
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{ico[d.id]}</svg>
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-white text-lg leading-tight">{d.title}</h3>
                      <p className="text-[11.5px] text-white/70">{d.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <p className="text-[13.5px] text-navy-800/70 leading-relaxed line-clamp-3">{d.description}</p>
                  {/* animated percent bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-[11.5px] font-semibold text-navy-800/60 mb-1.5">
                      <span className="uppercase tracking-wider">Part du CA</span>
                      <span className="text-berec-600">{d.percent}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-berec-100 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-berec-500 to-berec-700 origin-left"
                        style={{ width: `${d.percent}%` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.3 }}
                      />
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {d.features.slice(0, 2).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[12.5px] text-navy-800/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 7. Actualités ============ */
function NewsSection() {
  const latest = articles.slice(0, 3);
  return (
    <section className="relative py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading align="left" eyebrow="Actualités" title="Les dernières nouvelles de BEREC" />
          <Reveal delay={0.1}>
            <Button to="/blog" variant="ghost">Toutes les actualités <span aria-hidden>→</span></Button>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ============ 8. CTA contact ============ */
function ContactCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-navy-950">
      <div className="pointer-events-none absolute -right-32 -top-24 w-[30rem] h-[30rem] rounded-full bg-berec-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 w-80 h-80 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.25em] uppercase text-gold-300"><span className="w-8 h-px bg-current" /> Contact <span className="w-8 h-px bg-current" /></span>
          <h2 className="mt-5 font-heading text-3xl md:text-5xl font-extrabold text-white text-balance">Prêt à équiper votre établissement de santé ?</h2>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto leading-relaxed">Nos équipes vous accompagnent dans le choix, l'installation et la maintenance de vos équipements médicaux, au Bénin et dans toute l'Afrique.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button to="/contacts" variant="gold">Nous contacter</Button>
            <Button href={`tel:${company.phone.replace(/\s/g, '')}`} variant="outline">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z"/></svg>
              {company.phone}
            </Button>
          </div>
          <p className="mt-6 text-[13px] text-white/50">{company.hours}</p>
        </Reveal>
      </div>
    </section>
  );
}
