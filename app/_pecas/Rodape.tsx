import Image from 'next/image';
import { I } from './Icones';
import type { Linha } from './ComoChegar';

/** A vitrine do autor — a assinatura do rodapé leva para lá. */
const AUTOR = 'https://landingpage-gabriel.vercel.app';

export type DadosRodape = {
  nome: string;
  logo: { src: string; largura: number; altura: number };
  lema: string;
  /** A quem a casa pertence — no lugar da razão social, que o levantamento não achou. */
  instituicao: string;
  endereco: string[];
  observacoes: string[];
  contatos: Linha[];
  atalhos: [href: string, rotulo: string][];
};

/**
 * O rodapé institucional.
 *
 * É onde a pessoa procura as coisas chatas e necessárias — endereço,
 * telefone fixo, e-mail — e onde um site de empresa de verdade se
 * diferencia de um cartão de visita. A assinatura do autor fica na
 * última linha, discreta, como em qualquer site feito por encomenda.
 */
export default function Rodape({ d }: { d: DadosRodape }) {
  return (
    <footer className="bg-[var(--marca-escura)] text-[#EFE6D8]">
      {/* A coluna dos contatos é a mais larga: o e-mail do hotel não
          tem onde quebrar, e partido no meio ninguém copia. */}
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.3fr_0.8fr]">
        <div>
          {/* A logo é vermelha sobre transparente; no bordô escuro ela
              some. O filtro a pinta de branco sem precisar de um
              segundo arquivo. */}
          <Image
            src={d.logo.src}
            alt={d.nome}
            width={d.logo.largura}
            height={d.logo.altura}
            className="h-8 w-auto brightness-0 invert"
          />
          <p className="mt-4 font-[family-name:var(--font-marca)] text-lg italic text-white/80">{d.lema}</p>
          <p className="mt-3 text-xs leading-relaxed text-white/45">{d.instituicao}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--destaque)]">Onde</p>
          <address className="mt-3 flex gap-2.5 text-sm not-italic leading-relaxed text-white/75">
            <I.local className="mt-0.5 size-4 shrink-0" />
            <span>
              {d.endereco.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </span>
          </address>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-white/50">
            {d.observacoes.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--destaque)]">Fale com o hotel</p>
          <ul className="mt-3 space-y-2 text-sm">
            {d.contatos.map((c) => {
              const Icone = I[c.icone];
              return (
                <li key={c.rotulo}>
                  <a
                    href={c.href}
                    target={c.href?.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white/75 transition-colors hover:text-white"
                  >
                    <Icone className="size-4 shrink-0" />
                    <span className="min-w-0 break-words">{c.valor}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--destaque)]">No site</p>
          <ul className="mt-3 space-y-2 text-sm">
            {d.atalhos.map(([href, rotulo]) => (
              <li key={href}>
                <a href={href} className="text-white/75 transition-colors hover:text-white">
                  {rotulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-5 text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} {d.nome}
          </p>
          <p>Proposta de redesenho — não é o site oficial.</p>
          <a
            href={AUTOR}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto transition-colors hover:text-white"
          >
            Site por <span className="font-semibold text-white/70">Gabriel Oliveira</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
