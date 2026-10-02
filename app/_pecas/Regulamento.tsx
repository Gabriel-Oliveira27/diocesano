'use client';

import { useState } from 'react';
import { I, type NomeIcone } from './Icones';

export type Grupo = { icone: NomeIcone; titulo: string; itens: string[] };

/**
 * O regulamento, por assunto e atrás de um clique.
 *
 * No site antigo ele era a página de entrada, um bloco só, em caixa
 * alta onde a regra era mais dura. Aqui continua inteiro — o hóspede
 * precisa dele, e some o "não achei" na recepção —, mas agrupado pelo
 * que a pessoa procura: piscina, visita, café.
 */
export default function Regulamento({ grupos }: { grupos: Grupo[] }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="border border-[var(--borda)] bg-[var(--papel)]">
      <button
        type="button"
        onClick={() => setAberto((a) => !a)}
        aria-expanded={aberto}
        className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
      >
        <span className="grid size-10 shrink-0 place-items-center border border-[var(--borda)] text-[var(--marca)]">
          <I.lista className="size-5" />
        </span>
        <span>
          <span className="block font-[family-name:var(--font-marca)] text-2xl font-semibold">Regulamento para hóspedes</span>
          <span className="block text-sm text-[var(--tinta-media)]">
            Diária, café, visitas, piscinas — o que vale a pena saber antes de chegar.
          </span>
        </span>
        <I.baixo
          className={`ml-auto size-5 shrink-0 text-[var(--marca)] transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`}
        />
      </button>

      {aberto && (
        <div className="rest-troca grid gap-px border-t border-[var(--borda)] bg-[var(--borda)] sm:grid-cols-2 lg:grid-cols-3">
          {grupos.map((g) => {
            const Icone = I[g.icone];
            return (
              <section key={g.titulo} className="bg-[var(--papel)] p-5 sm:p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Icone className="size-4 text-[var(--marca)]" />
                  {g.titulo}
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--tinta-media)]">
                  {g.itens.map((i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-2 size-1.5 shrink-0 bg-[var(--destaque)]" />
                      {i}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
