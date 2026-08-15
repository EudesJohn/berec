/* Iconographie SVG — style ligne cohérent (Heroicons-like).
   Remplace tous les emojis-icônes conformément à la checklist ui-ux-pro-max. */

const S = ({ d, children, className = 'w-4 h-4' }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {children || <path d={d} />}
  </svg>
);

/* ---------- Icônes de contact / utilitaires ---------- */

export function IconPin({ className }) {
  return (
    <S className={className}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </S>
  );
}

export function IconPhone({ className }) {
  return (
    <S className={className}>
      <path d="M6.6 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21A1.5 1.5 0 0 0 21 19.5v-2.1a1.5 1.5 0 0 0-1.14-1.46l-3.5-.88a1.5 1.5 0 0 0-1.46.44l-.86.86A12.1 12.1 0 0 1 8.6 9.46l.86-.86a1.5 1.5 0 0 0 .44-1.46l-.88-3.5A1.5 1.5 0 0 0 7.56 3Z" />
    </S>
  );
}

export function IconMail({ className }) {
  return (
    <S className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </S>
  );
}

export function IconClock({ className }) {
  return (
    <S className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </S>
  );
}

export function IconUser({ className }) {
  return (
    <S className={className}>
      <circle cx="12" cy="8.2" r="4" />
      <path d="M4.5 20.4a7.9 7.9 0 0 1 15 0" />
    </S>
  );
}

export function IconGlobe({ className }) {
  return (
    <S className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17M12 3c2.6 2.5 4.2 5.5 4.2 9S14.6 18.5 12 21c-2.6-2.5-4.2-5.5-4.2-9S9.4 5.5 12 3Z" />
    </S>
  );
}

export function IconAlert({ className }) {
  return (
    <S className={className}>
      <path d="M12 3.5 2.8 19.8a1.2 1.2 0 0 0 1 1.7h16.4a1.2 1.2 0 0 0 1-1.7L12 3.5Z" />
      <path d="M12 10v4.2M12 17.4h.01" />
    </S>
  );
}

export function IconHospital({ className }) {
  return (
    <S className={className}>
      <path d="M3 21h18M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-3.6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V21" />
      <path d="M12 8.5V12M10.5 10.2H13.5" />
    </S>
  );
}

export function IconWrench({ className }) {
  return (
    <S className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5L3 17.6A2 2 0 0 0 6.4 21l6.3-6.3a4 4 0 0 0 5-5.4L14.7 12.3 11.7 9.3Z" />
    </S>
  );
}

/* ---------- Icônes des catégories produits (10 spécialités) ---------- */

export function CategoryIcon({ icon, className = 'w-5 h-5' }) {
  const map = {
    paw: <><circle cx="5.2" cy="11" r="1.8" /><circle cx="9.5" cy="6.8" r="1.8" /><circle cx="14.5" cy="6.8" r="1.8" /><circle cx="18.8" cy="11" r="1.8" /><path d="M6.8 14.2c1.5-1.4 3.2-1.3 4.2-.4.9.8 2.3.8 3.2-.1 1-1 2.9-1 4.4.4" /></>,
    baby: <><circle cx="12" cy="8" r="4" /><path d="M8.5 14.8c1 .8 2.2 1.2 3.5 1.2s2.5-.4 3.5-1.2" /><path d="M9 4.5c-.9-.6-2.1-.6-3-.1M15 4.5c.9-.6 2.1-.6 3-.1" /></>,
    heart: <path d="M20.8 8.3c0-2.5-2.1-4.6-4.7-4.6-1.9 0-3.6 1.1-4.1 2.7-.5-1.6-2.2-2.7-4.1-2.7-2.6 0-4.7 2.1-4.7 4.6 0 7.2 8.8 12 8.8 12s8.8-4.8 8.8-12Z" />,
    monitor: <><rect x="3.5" y="5" width="17" height="12" rx="1.5" /><path d="M9 21h6M12 17v4M7 9v4M4.5 15.5h.5" /></>,
    air: <><path d="M3 8.5h8.5a2.5 2.5 0 1 0-2.5-2.5" /><path d="M3 12.5h14a2.5 2.5 0 1 1-2.5 2.5" /><path d="M3 16.5h5a2.5 2.5 0 1 1-2.5 2.5" /></>,
    scalpel: <><path d="M4 20s1-.4 3-1.5c2-1 7-5 9.5-8.5L13.5 7l-1 1.5" /><path d="M16.5 9 9.5 16l-2.2 1.2c-.7.5-1.7.3-2.1-.6" /></>,
    'first-aid': <><rect x="7" y="5.5" width="10" height="15" rx="1.5" /><path d="M9 5.5a3 3 0 0 1 6 0M12 9.5v4.5M9.8 11.7h4.4" /></>,
    child: <><circle cx="12" cy="8" r="3.6" /><path d="M5 20c1.4-2.6 4-4 7-4s5.6 1.4 7 4" /></>,
    surgery: <><path d="M6 13.5 9 8M6 13.5 3 18M6 13.5l6-1M15 8.5l-3.4 4M12.6 12.5c.6.6 1.4.9 2.2.9 1 0 2-.4 2.6-1.2" /><path d="m6.8 13.1 5.8-4.6s1.6-1 2.6.1c.6.7.5 1.4-.2 2.1" /></>,
    bed: <><path d="M4 18v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8" /><path d="M4 18h16M4 14h16" /><path d="M8 10v2h8v-2" /></>,
  };
  return <S className={className}>{map[icon] || map['first-aid']}</S>;
}

/* Badge circulaire avec code pays ISO (remplace les emojis drapeaux) */
export function CountryBadge({ code, tone = 'light', className = 'w-12 h-12' }) {
  return (
    <span
      className={`rounded-xl grid place-items-center ${tone === 'dark' ? 'bg-white/10 ring-1 ring-white/25 text-white' : 'bg-berec-50 ring-1 ring-berec-200 text-berec-700'} ${className}`}
    >
      <span className="font-heading font-bold tracking-wider text-[13px]">{code}</span>
    </span>
  );
}

/* Icone par clé utilisée dans Contacts (responsable / coordonnées) */
export function ContactIcon({ kind, className = 'w-4 h-4' }) {
  switch (kind) {
    case 'user': return <IconUser className={className} />;
    case 'phone': return <IconPhone className={className} />;
    case 'mail': return <IconMail className={className} />;
    case 'clock': return <IconClock className={className} />;
    case 'pin': return <IconPin className={className} />;
    case 'globe': return <IconGlobe className={className} />;
    default: return null;
  }
}