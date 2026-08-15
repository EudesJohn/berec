import { useState } from 'react';
import { motion } from 'framer-motion';

import { offices, company, contactForm } from '../data/site-data';
import { PageBanner, Reveal, Button } from '../components/Shared';
import { CountryBadge, ContactIcon, IconPin, IconAlert, IconPhone, IconMail, IconClock, IconUser } from '../components/Icons';

/* Code ISO par pays — remplace les emojis drapeaux (checklist ui-ux-pro-max) */
const COUNTRY_CODE = {
  Bénin: 'BJ',
  'Côte d\'Ivoire': 'CI',
  Niger: 'NE',
  'Burkina-Faso': 'BF',
  Mali: 'ML',
};

const tel = (p) => `tel:${p.replace(/[^\d+]/g, '')}`;

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [sendError, setSendError] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setSendError(false);
    setSending(true);
    try {
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('email', form.email);
      fd.append('phone', form.phone);
      fd.append('company', form.company);
      fd.append('message', form.message || '—');
      fd.append('_subject', form.subject || 'Message depuis le site — ' + form.name);
      fd.append('_replyto', form.email);
      fd.append('_template', 'table');
      fd.append('_captcha', 'false'); // reCAPTCHA désactivé (AJAX)
      fd.append('_honey', ''); // honeypot anti-spam

      const res = await fetch(contactForm.endpoint, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSent(true);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  const main = offices.find((o) => o.type.includes('Direction')) || offices[0];
  const others = offices.filter((o) => o !== main);

  return (
    <>
      <PageBanner eyebrow="Contact" title="Parlons de votre projet" crumb="Contacts" />

      {/* ===== Accès rapide ===== */}
      <section className="relative z-10 -mt-14 md:-mt-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <IconPhone className="w-5 h-5" />, label: 'Téléphone', value: company.phone, href: tel(company.phonePrimary) },
              { icon: <IconMail className="w-5 h-5" />, label: 'Email', value: company.email, href: `mailto:${company.email}` },
              { icon: <IconPin className="w-5 h-5" />, label: 'Adresse', value: `${company.address}, ${company.city}` },
              { icon: <IconClock className="w-5 h-5" />, label: 'Horaires', value: company.hours },
            ].map((c, i) => {
              const inner = (
                <>
                  <span className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-berec-500 to-berec-700 text-white grid place-items-center shadow-card group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-berec-500">{c.label}</span>
                    <span className="mt-0.5 block text-[13.5px] font-semibold text-navy-900 leading-snug truncate">{c.value}</span>
                  </span>
                </>
              );
              const cls = 'group flex items-center gap-4 rounded-2xl bg-white shadow-card-hover ring-1 ring-berec-100 p-5 transition duration-300 hover:-translate-y-1';
              return (
                <Reveal key={c.label} delay={i * 0.06} className="min-w-0">
                  {c.href ? <a href={c.href} className={cls}>{inner}</a> : <div className={cls}>{inner}</div>}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Nos bureaux ===== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em] uppercase text-berec-500"><span className="w-6 h-px bg-current" /> Nos bureaux <span className="w-6 h-px bg-current" /></span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-navy-900">5 implantations en Afrique</h2>
              <p className="mt-4 text-[15px] text-navy-800/65 max-w-2xl mx-auto leading-relaxed">
                Un siège à Cotonou et des bureaux de représentation dans toute la sous-région pour vous accompagner au plus près de votre établissement.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* Siège — carte mise en avant */}
            {main && (
              <Reveal className="lg:col-span-3">
                <div className="relative h-full overflow-hidden rounded-3xl bg-navy-950 text-white shadow-card-hover ring-1 ring-navy-800">
                  {/* décor */}
                  <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
                  <div className="pointer-events-none absolute -top-20 -right-16 w-72 h-72 rounded-full bg-berec-500/25 blur-3xl" aria-hidden="true" />
                  <div className="pointer-events-none absolute -bottom-24 left-1/4 w-64 h-64 rounded-full bg-gold-400/10 blur-3xl" aria-hidden="true" />

                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <CountryBadge code={COUNTRY_CODE[main.country] || main.country.slice(0, 2).toUpperCase()} tone="dark" className="w-14 h-14 text-base" />
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold-400 to-berec-500 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2-6.3-4.5-6.3 4.5L8 13.8 2 9.2h7.6z" /></svg>
                          Siège & Direction Générale
                        </span>
                        <h3 className="mt-2 font-heading text-2xl md:text-3xl font-extrabold">{main.country}</h3>
                      </div>
                    </div>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      {/* adresse */}
                      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 backdrop-blur">
                        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-berec-300">
                          <IconPin className="w-3.5 h-3.5" /> Adresse
                        </p>
                        <p className="mt-2 text-[14px] text-white/85 leading-relaxed">{main.city}<br />{main.address}</p>
                      </div>
                      {/* responsable */}
                      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 backdrop-blur">
                        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-berec-300">
                          <IconUser className="w-3.5 h-3.5" /> Responsable
                        </p>
                        <p className="mt-2 text-[14px] text-white/85 leading-relaxed">{main.contact || '—'}</p>
                      </div>
                      {/* téléphone */}
                      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 backdrop-blur">
                        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-berec-300">
                          <IconPhone className="w-3.5 h-3.5" /> Téléphone
                        </p>
                        <div className="mt-2 space-y-1">
                          {(main.phones || []).map((p) => (
                            <a key={p} href={tel(p)} className="block text-[14px] text-white/85 hover:text-berec-200 transition-colors">{p}</a>
                          ))}
                          {(main.phones || []).length === 0 && <p className="text-[14px] text-white/85">—</p>}
                        </div>
                      </div>
                      {/* email */}
                      <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-5 py-4 backdrop-blur">
                        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-berec-300">
                          <IconMail className="w-3.5 h-3.5" /> Email
                        </p>
                        <div className="mt-2 space-y-1">
                          {(main.emails || []).map((em) => (
                            <a key={em} href={`mailto:${em}`} className="block text-[13px] text-white/85 hover:text-berec-200 transition-colors break-all">{em}</a>
                          ))}
                          {(main.emails || []).length === 0 && <p className="text-[14px] text-white/85">—</p>}
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <a
                        href={company.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-berec-700 shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition duration-300 active:scale-[0.97]"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" /></svg>
                        Itinéraire Google Maps
                      </a>
                      <p className="text-[13px] text-white/60">Horaires : {company.hours}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Bureaux de représentation */}
            {others.map((o, i) => (
              <Reveal key={o.country} delay={0.08 + (i % 3) * 0.06}>
                <div className="group relative h-full rounded-3xl bg-white shadow-card ring-1 ring-berec-100 p-7 hover:shadow-card-hover hover:-translate-y-1.5 transition duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-berec-400 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-start justify-between gap-3">
                    <CountryBadge code={COUNTRY_CODE[o.country] || o.country.slice(0, 2).toUpperCase()} />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gold-500">{o.type}</span>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-navy-900">{o.country}</h3>
                  <p className="mt-1 text-[13.5px] text-navy-800/60">{o.city}{o.address ? ` · ${o.address}` : ''}</p>

                  <div className="mt-5 space-y-3">
                    {o.contact && (
                      <p className="flex items-start gap-2.5 text-[13.5px] text-navy-800/75">
                        <ContactIcon kind="user" className="mt-0.5 shrink-0 w-4 h-4 text-berec-500" />
                        <span className="leading-snug">{o.contact}</span>
                      </p>
                    )}
                    {o.phones && o.phones.length > 0 && (
                      <div className="flex items-start gap-2.5 text-[13.5px] text-navy-800/75">
                        <ContactIcon kind="phone" className="mt-0.5 shrink-0 w-4 h-4 text-berec-500" />
                        <span className="space-y-0.5">
                          {o.phones.map((p) => <a key={p} href={tel(p)} className="block hover:text-berec-600 transition-colors">{p}</a>)}
                        </span>
                      </div>
                    )}
                    {o.emails && o.emails.length > 0 && (
                      <div className="flex items-start gap-2.5 text-[13.5px] text-navy-800/75">
                        <ContactIcon kind="mail" className="mt-0.5 shrink-0 w-4 h-4 text-berec-500" />
                        <span className="space-y-0.5">
                          {o.emails.map((em) => <a key={em} href={`mailto:${em}`} className="block hover:text-berec-600 transition-colors break-all">{em}</a>)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Carte horaires — complète la grille */}
            <Reveal delay={0.2}>
              <div className="h-full rounded-3xl bg-gradient-to-br from-berec-500 to-berec-700 p-7 text-white shadow-card flex flex-col justify-between min-h-[15rem] relative overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
                <div>
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-white/15 ring-1 ring-white/25">
                    <ContactIcon kind="clock" className="w-5 h-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold">Nos horaires</h3>
                  <p className="mt-2 text-white/85 text-[14.5px] leading-relaxed">{company.hours}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-300 animate-pulse shrink-0" />
                  <p className="text-white/75 text-[13px] leading-snug">{company.address},<br />{company.city}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Formulaire + carte ===== */}
      <section className="py-20 bg-gradient-to-b from-berec-50/60 to-white">
        <div className="mx-auto max-w-7xl px-5 grid gap-12 lg:grid-cols-2">
          {/* Formulaire */}
          <Reveal>
            <div className="rounded-3xl bg-white shadow-card-hover ring-1 ring-berec-100 overflow-hidden">
              <div className="relative px-8 py-6 bg-gradient-to-r from-navy-950 via-berec-900 to-navy-950 text-white flex items-center gap-4 overflow-hidden">
                <div className="pointer-events-none absolute -right-10 -top-14 w-44 h-44 rounded-full bg-gold-400/10 blur-2xl" aria-hidden="true" />
                <span className="relative shrink-0 w-12 h-12 rounded-xl bg-white/10 ring-1 ring-white/25 grid place-items-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" /></svg>
                </span>
                <div className="relative">
                  <h2 className="font-heading font-bold text-lg">Envoyez-nous un message</h2>
                  <p className="text-[13px] text-white/60">Réponse sous 48h ouvrées</p>
                </div>
              </div>

              <div className="p-8">
                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                      className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-berec-500 to-berec-700 text-white grid place-items-center shadow-card"
                    >
                      <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </motion.div>
                    <h3 className="mt-6 font-heading text-2xl font-bold text-navy-900">Message envoyé !</h3>
                    <p className="mt-3 text-navy-800/65 max-w-sm mx-auto">Merci {form.name.split(' ')[0]} ! Notre équipe commerciale vous répondra très rapidement à l'adresse {form.email}.</p>
                    <button onClick={() => { setSent(false); setSendError(false); setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' }); }} className="mt-6 text-[13.5px] font-semibold text-berec-600 hover:underline">
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {error && (
                      <div role="alert" className="rounded-xl bg-red-50 ring-1 ring-red-200 px-4 py-3 text-[13.5px] text-red-700 flex items-center gap-2.5">
                        <IconAlert className="w-5 h-5 shrink-0 text-red-500" />
                        <span>Merci de renseigner au minimum votre nom et votre adresse email.</span>
                      </div>
                    )}
                    {sendError && (
                      <div role="alert" className="rounded-xl bg-red-50 ring-1 ring-red-200 px-4 py-3 text-[13.5px] text-red-700 flex items-center gap-2.5">
                        <IconAlert className="w-5 h-5 shrink-0 text-red-500" />
                        <span>L'envoi a échoué. Merci de réessayer, ou écrivez-nous directement à {company.email}.</span>
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Nom *" error={error && !form.name.trim()}>
                        <input value={form.name} onChange={update('name')} placeholder="Votre nom complet" className={inputCls(error && !form.name.trim())} />
                      </Field>
                      <Field label="Email *" error={error && !form.email.trim()}>
                        <input type="email" value={form.email} onChange={update('email')} placeholder="vous@exemple.com" className={inputCls(error && !form.email.trim())} />
                      </Field>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Téléphone">
                        <input value={form.phone} onChange={update('phone')} placeholder="(+229) ..." className={inputCls(false)} />
                      </Field>
                      <Field label="Société">
                        <input value={form.company} onChange={update('company')} placeholder="Nom de votre structure" className={inputCls(false)} />
                      </Field>
                    </div>
                    <Field label="Objet">
                      <input value={form.subject} onChange={update('subject')} placeholder="Objet de votre demande" className={inputCls(false)} />
                    </Field>
                    <Field label="Message">
                      <textarea value={form.message} onChange={update('message')} rows={5} placeholder="Décrivez votre besoin..." className={`${inputCls(false)} resize-none`} />
                    </Field>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-berec-500 to-berec-700 text-white font-heading font-bold text-[15px] py-4 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {sending ? (
                        <>
                          <svg className="w-4.5 h-4.5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg>
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>

          {/* Carte Google Maps + infos */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.05}>
              <div className="rounded-3xl overflow-hidden shadow-card ring-1 ring-berec-100 bg-navy-950">
                <div className="flex items-center justify-between gap-3 px-7 py-4 bg-gradient-to-r from-navy-950 to-berec-900 text-white">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-white/10 ring-1 ring-white/20 grid place-items-center">
                      <IconPin className="w-4.5 h-4.5 text-berec-200" />
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-[15px]">Notre siège — Cotonou</h3>
                      <p className="text-[12px] text-white/60">Quartier Ayélawadjè, Akpakpa</p>
                    </div>
                  </div>
                  <a
                    href={company.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 ring-1 ring-white/25 px-4 py-2 text-[12.5px] font-semibold text-white hover:bg-white/20 transition-colors"
                  >
                    Ouvrir
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" /></svg>
                  </a>
                </div>
                <div className="relative h-[22rem]">
                  <iframe
                    title="Carte — Siège BEREC SARL, Cotonou (Bénin)"
                    src={`https://www.google.com/maps?q=${company.mapCoords.lat},${company.mapCoords.lng}&z=17&output=embed`}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-navy-950 p-8 text-white shadow-card relative overflow-hidden">
                <div className="pointer-events-none absolute -left-16 -bottom-20 w-56 h-56 rounded-full bg-berec-500/20 blur-3xl" aria-hidden="true" />
                <div className="relative">
                  <h3 className="font-heading font-bold text-xl">Besoin d'aide ?</h3>
                  <p className="mt-2 text-white/65 text-[14.5px]">Notre équipe est joignable du lundi au vendredi, de 8h à 18h.</p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <a href={tel(company.phonePrimary)} className="group rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors">
                      <p className="text-[12px] uppercase tracking-widest text-berec-300 mb-1.5">Téléphone</p>
                      <p className="font-heading font-semibold group-hover:text-berec-200 transition-colors">{company.phone}</p>
                    </a>
                    <a href={`mailto:${company.email}`} className="group rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-4 hover:bg-white/10 transition-colors">
                      <p className="text-[12px] uppercase tracking-widest text-berec-300 mb-1.5">Email</p>
                      <p className="font-heading font-semibold text-[13.5px] group-hover:text-berec-200 transition-colors break-all">{company.email}</p>
                    </a>
                  </div>
                  <div className="mt-4 rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-4">
                    <p className="text-[12px] uppercase tracking-widest text-berec-300 mb-1.5">Email secondaire</p>
                    <a href={`mailto:${company.email2}`} className="font-heading font-semibold text-[13.5px] hover:text-berec-200 transition-colors break-all">{company.email2}</a>
                  </div>
                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[13px] text-white/55">{company.hours}</p>
                    <Button to="/produits" variant="gold" size="sm">Voir le catalogue</Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium text-navy-800/75 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function inputCls(hasError) {
  return `w-full rounded-xl px-4 py-3.5 text-[14.5px] text-navy-900 placeholder:text-navy-800/35 bg-white ring-1 transition focus:outline-none focus:ring-2 ${hasError ? 'ring-red-300 focus:ring-red-400 bg-red-50/40' : 'ring-berec-200 focus:ring-berec-400'}`;
}
