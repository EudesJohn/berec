import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

import { navigation } from '../data/site-data';
import { EASE_OUT } from '../lib/motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [top, setTop] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 130);
    setTop(latest < 24);
  });

  return (
    <motion.header className="fixed top-0 inset-x-0 z-50">
      {/* Signature accent line */}
      <div className="h-[3px] bg-gradient-to-r from-berec-400 via-berec-500 to-gold-400" aria-hidden="true" />

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.35, ease: EASE_OUT }}
        className={`relative transition-[box-shadow] duration-300 ${top ? '' : 'shadow-lg shadow-navy-950/10'}`}
      >
        {/* band background */}
        <div
          className={`relative overflow-hidden ${
            top
              ? 'bg-gradient-to-r from-berec-800/95 via-berec-700/90 to-navy-950/95 text-white'
              : 'glass border-b border-berec-100 text-navy-900'
          }`}
        >
          {/* subtle texture + glow when at top */}
          {top && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
              <div className="pointer-events-none absolute -top-16 right-1/4 w-72 h-40 rounded-full bg-gold-400/10 blur-3xl" aria-hidden="true" />
            </>
          )}

          <div className="relative mx-auto max-w-7xl px-5 flex items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 py-3 group shrink-0">
              <span
                className={`relative grid place-items-center rounded-xl overflow-hidden px-2 py-1.5 transition-transform duration-300 group-hover:scale-105 ${
                  top
                    ? 'bg-white shadow-lg shadow-navy-950/30 ring-1 ring-white/70'
                    : 'bg-white ring-1 ring-berec-200 shadow-sm'
                }`}
              >
                <img src="/images/logo/menu-logo.webp" alt="BEREC" width="85" height="69" decoding="async" className="h-8 w-auto object-contain" />
              </span>
              <span className="leading-tight">
                <span className="block font-heading font-extrabold tracking-wide text-lg">
                  BEREC <span className={top ? 'text-gold-300' : 'text-berec-500'}>SARL</span>
                </span>
                <span className={`block text-[10px] tracking-[0.22em] uppercase ${top ? 'text-white/70' : 'text-navy-800/60'}`}>
                  Bénin Rent A Car
                </span>
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-3 text-[14.5px] font-medium transition-colors group ${top ? 'hover:text-berec-200' : 'hover:text-berec-600'} ${isActive ? (top ? 'text-white' : 'text-berec-600') : ''}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span className={`absolute left-4 right-4 -bottom-[2px] h-[3px] rounded-full bg-gradient-to-r from-berec-400 to-gold-400 transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </>
                  )}
                </NavLink>
              ))}
              <Link
                to="/contacts"
                className="ml-4 relative overflow-hidden rounded-full bg-gradient-to-r from-berec-500 to-berec-700 px-6 py-2.5 text-sm font-semibold text-white shadow-card hover:shadow-glow hover:-translate-y-0.5 transition active:scale-[0.96]"
              >
                Contactez-nous
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-12 h-12 -mr-1 rounded-lg text-current grid place-items-center"
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col gap-[5px]">
                <span className={`h-[2px] rounded bg-current transition-[transform,opacity] duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`h-[2px] rounded bg-current transition-[transform,opacity] duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`h-[2px] rounded bg-current transition-[transform,opacity] duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>

          {/* bottom accent line (at top only) */}
          {top && (
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-berec-400/80 via-gold-400/90 to-berec-500/50" aria-hidden="true" />
          )}
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`lg:hidden overflow-hidden ${top ? 'bg-navy-900 border-b border-white/10' : 'bg-white border-b border-berec-100'}`}
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl font-medium text-[15px] transition-colors ${top || isActive ? 'bg-white/10 text-white' : 'bg-berec-50 text-berec-800'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                <Link to="/contacts" onClick={() => setOpen(false)} className="mt-2 text-center rounded-full bg-gradient-to-r from-berec-500 to-berec-700 px-4 py-3 font-semibold text-white">
                  Contactez-nous
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
