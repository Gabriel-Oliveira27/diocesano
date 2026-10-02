/**
 * Ícones da proposta.
 *
 * SVG inline, traço único, `currentColor` — o mesmo desenho dos ícones
 * das propostas de restaurante, com o vocabulário de hotel: cama,
 * xícara, piscina, capela.
 */

type P = { className?: string };

function T({ children, className = 'size-5' }: P & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const I = {
  telefone: (p: P) => (
    <T {...p}>
      <path d="M5 3h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 5.1 5.1l1.4-2.3L19 13.5V17a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </T>
  ),
  whatsapp: (p: P) => (
    <T {...p}>
      <path d="M4 20l1.3-3.9A8.5 8.5 0 1 1 8.2 19z" />
      <path d="M9.2 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.6l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.1.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .6-.5.8-.6.3-1.6.5-3.2-.3a9 9 0 0 1-3.8-3.8c-.7-1.5-.5-2.6-.2-3.1z" />
    </T>
  ),
  email: (p: P) => (
    <T {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3.5 6 8.5 6.5L20.5 6" />
    </T>
  ),
  instagram: (p: P) => (
    <T {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M16.8 7.2h.01" />
    </T>
  ),
  facebook: (p: P) => (
    <T {...p}>
      <path d="M14 21v-7.5h2.6l.4-3H14V8.6c0-.9.3-1.5 1.6-1.5H17V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9v2.3H8.5v3H11V21" />
    </T>
  ),
  local: (p: P) => (
    <T {...p}>
      <path d="M12 21s7-5.6 7-11.2A7 7 0 0 0 5 9.8C5 15.4 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </T>
  ),
  rota: (p: P) => (
    <T {...p}>
      <path d="M12 2.5 21.5 12 12 21.5 2.5 12z" />
      <path d="M9.5 14v-2.5h5m-2-2 2 2-2 2" />
    </T>
  ),
  relogio: (p: P) => (
    <T {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </T>
  ),
  calendario: (p: P) => (
    <T {...p}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </T>
  ),
  pessoas: (p: P) => (
    <T {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.3a3.2 3.2 0 0 1 0 5.4M18 20a6 6 0 0 0-2.6-4.9" />
    </T>
  ),
  pessoa: (p: P) => (
    <T {...p}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </T>
  ),
  cama: (p: P) => (
    <T {...p}>
      <path d="M2.5 19v-7.5a1.5 1.5 0 0 1 1.5-1.5h16a1.5 1.5 0 0 1 1.5 1.5V19M2.5 15.5h19M2.5 19v1.5M21.5 19v1.5" />
      <path d="M5.5 10V8a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 11.5 8v2" />
    </T>
  ),
  cafe: (p: P) => (
    <T {...p}>
      <path d="M4.5 9.5h11V14a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" />
      <path d="M15.5 10.5h1.2a2.5 2.5 0 0 1 0 5h-1.5M3 21.5h14" />
      <path d="M8 3c0 1 1 1.4 1 2.5S8 7 8 7M12 3c0 1 1 1.4 1 2.5S12 7 12 7" />
    </T>
  ),
  prato: (p: P) => (
    <T {...p}>
      <circle cx="12" cy="13" r="6.5" />
      <circle cx="12" cy="13" r="3.2" />
      <path d="M3 4v5a1.5 1.5 0 0 0 3 0V4M4.5 4v16M21 4c-1.7 0-2.8 2-2.8 5 0 2 1 3 2.8 3M21 4v16" />
    </T>
  ),
  piscina: (p: P) => (
    <T {...p}>
      <path d="M8 16V5.5a2 2 0 0 1 4 0M15 16V5.5a2 2 0 0 1 4 0M8 9h7M8 12.5h7" />
      <path d="M2 20c1.7 0 1.7-1 3.3-1s1.7 1 3.4 1 1.6-1 3.3-1 1.7 1 3.3 1 1.7-1 3.4-1 1.6 1 3.3 1" />
    </T>
  ),
  capela: (p: P) => (
    <T {...p}>
      <path d="M12 2v4.5M10 4h4" />
      <path d="M4.5 21V11.5L12 6.5l7.5 5V21zM3 21h18" />
      <path d="M10 21v-3.5a2 2 0 0 1 4 0V21" />
    </T>
  ),
  arvore: (p: P) => (
    <T {...p}>
      <path d="M12 21v-6M7 15h10l-2.5-4H16l-4-7-4 7h1.5z" />
    </T>
  ),
  wifi: (p: P) => (
    <T {...p}>
      <path d="M2.5 8.8a14 14 0 0 1 19 0M5.5 12.3a9.5 9.5 0 0 1 13 0M9 15.7a5 5 0 0 1 6 0" />
      <path d="M12 19.2h.01" />
    </T>
  ),
  neve: (p: P) => (
    <T {...p}>
      <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
      <path d="m9.5 4.5 2.5 2 2.5-2M9.5 19.5l2.5-2 2.5 2" />
    </T>
  ),
  tv: (p: P) => (
    <T {...p}>
      <rect x="2.5" y="5" width="19" height="12.5" rx="1" />
      <path d="M8 21h8M12 17.5V21" />
    </T>
  ),
  frigobar: (p: P) => (
    <T {...p}>
      <rect x="6" y="2.5" width="12" height="19" rx="1" />
      <path d="M6 10h12M9 6v1.5M9 13v3" />
    </T>
  ),
  mesa: (p: P) => (
    <T {...p}>
      <path d="M2.5 8h19M4.5 8v12M19.5 8v12M13.5 8v5.5h6M15.5 10.8h2" />
    </T>
  ),
  chuveiro: (p: P) => (
    <T {...p}>
      <path d="M5 21V6.5A3.5 3.5 0 0 1 8.5 3h2A3.5 3.5 0 0 1 14 6.5V7M10 7h8" />
      <path d="M11 11v1M14 11v1M17 11v1M12.5 14.5v1M15.5 14.5v1" />
    </T>
  ),
  microfone: (p: P) => (
    <T {...p}>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6" />
    </T>
  ),
  pata: (p: P) => (
    <T {...p}>
      <path d="M12 12.5c-2.8 0-5 3-5 5.2 0 1.4.9 2 2 2 1.2 0 1.8-.6 3-.6s1.8.6 3 .6c1.1 0 2-.6 2-2 0-2.2-2.2-5.2-5-5.2z" />
      <circle cx="5.5" cy="10" r="1.6" />
      <circle cx="9.3" cy="6" r="1.6" />
      <circle cx="14.7" cy="6" r="1.6" />
      <circle cx="18.5" cy="10" r="1.6" />
    </T>
  ),
  balao: (p: P) => (
    <T {...p}>
      <path d="M12 15.5c3 0 5.5-3 5.5-6.5a5.5 5.5 0 0 0-11 0c0 3.5 2.5 6.5 5.5 6.5z" />
      <path d="m11 15.5.5 1.5h1l.5-1.5M12 17c0 1.5-1.5 2-1.5 3.5" />
    </T>
  ),
  raio: (p: P) => (
    <T {...p}>
      <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12z" />
    </T>
  ),
  lista: (p: P) => (
    <T {...p}>
      <path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" />
    </T>
  ),
  brilho: (p: P) => (
    <T {...p}>
      <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7z" />
    </T>
  ),
  check: (p: P) => (
    <T {...p}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </T>
  ),
  esquerda: (p: P) => (
    <T {...p}>
      <path d="m15 5-7 7 7 7" />
    </T>
  ),
  direita: (p: P) => (
    <T {...p}>
      <path d="m9 5 7 7-7 7" />
    </T>
  ),
  baixo: (p: P) => (
    <T {...p}>
      <path d="m5 9 7 7 7-7" />
    </T>
  ),
  mais: (p: P) => (
    <T {...p}>
      <path d="M12 5v14M5 12h14" />
    </T>
  ),
  menos: (p: P) => (
    <T {...p}>
      <path d="M5 12h14" />
    </T>
  ),
  fechar: (p: P) => (
    <T {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </T>
  ),
  ampliar: (p: P) => (
    <T {...p}>
      <path d="M14 4h6v6M10 20H4v-6M20 4l-6.5 6.5M4 20l6.5-6.5" />
    </T>
  ),
};

export type NomeIcone = keyof typeof I;
