'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { I, type NomeIcone } from './Icones';
import type { Foto } from './tipos';

/**
 * As fotos da casa, em mosaico — e em tela cheia ao tocar.
 *
 * No site antigo elas eram 107 miniaturas numa galeria que ninguém
 * abria. Aqui são poucas, grandes e escolhidas; a primeira ocupa o
 * dobro porque é a que decide se a pessoa continua olhando.
 */
export function Galeria({ fotos }: { fotos: Foto[] }) {
  const [aberta, setAberta] = useState<number | null>(null);

  const anda = useCallback(
    (d: number) => setAberta((a) => (a === null ? a : (a + d + fotos.length) % fotos.length)),
    [fotos.length],
  );

  useEffect(() => {
    if (aberta === null) return;
    const tecla = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberta(null);
      if (e.key === 'ArrowRight') anda(1);
      if (e.key === 'ArrowLeft') anda(-1);
    };
    window.addEventListener('keydown', tecla);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', tecla);
      document.body.style.overflow = '';
    };
  }, [aberta, anda]);

  return (
    <>
      <div className="grid auto-rows-[11rem] grid-cols-2 gap-2 sm:auto-rows-[14rem] lg:grid-cols-4">
        {fotos.map((f, i) => (
          <button
            key={f.src}
            type="button"
            onClick={() => setAberta(i)}
            data-revelar
            style={{ '--i': i } as React.CSSProperties}
            className={`group relative overflow-hidden bg-[var(--areia)] text-left ${
              i === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <Image
              src={f.src}
              alt={f.alt}
              fill
              sizes={i === 0 ? '(min-width: 1024px) 36rem, 100vw' : '(min-width: 1024px) 18rem, 50vw'}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <span className="absolute inset-x-0 bottom-0 flex items-end gap-2 bg-gradient-to-t from-black/70 to-transparent p-3 pt-10 text-sm text-white">
              <span className="flex-1">{f.titulo}</span>
              <I.ampliar className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </button>
        ))}
      </div>

      {aberta !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={fotos[aberta].titulo}
          onClick={() => setAberta(null)}
          className="rest-troca fixed inset-0 z-[60] grid grid-rows-[1fr_auto] bg-black/92 p-4 sm:p-8"
        >
          <div className="relative min-h-0" onClick={(e) => e.stopPropagation()}>
            <Image
              key={fotos[aberta].src}
              src={fotos[aberta].src}
              alt={fotos[aberta].alt}
              fill
              sizes="100vw"
              className="rest-troca object-contain"
            />
          </div>
          <div className="mt-4 flex items-center gap-3 text-white" onClick={(e) => e.stopPropagation()}>
            <p className="flex-1">
              {fotos[aberta].titulo}
              {fotos[aberta].detalhe && <span className="text-white/60"> — {fotos[aberta].detalhe}</span>}
            </p>
            <span className="text-sm tabular-nums text-white/50">
              {aberta + 1}/{fotos.length}
            </span>
            <button type="button" onClick={() => anda(-1)} aria-label="Foto anterior" className="grid size-10 place-items-center border border-white/20 hover:bg-white/10">
              <I.esquerda className="size-4" />
            </button>
            <button type="button" onClick={() => anda(1)} aria-label="Próxima foto" className="grid size-10 place-items-center border border-white/20 hover:bg-white/10">
              <I.direita className="size-4" />
            </button>
            <button type="button" onClick={() => setAberta(null)} aria-label="Fechar" className="grid size-10 place-items-center border border-white/20 hover:bg-white/10">
              <I.fechar className="size-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export type Destaque = { icone: NomeIcone; titulo: string; texto: string };

/** O que a casa tem, com ícone, lido de relance. */
export function Destaques({ itens, colunas = 'sm:grid-cols-2 lg:grid-cols-5' }: { itens: Destaque[]; colunas?: string }) {
  return (
    <ul className={`grid gap-px bg-[var(--borda)] ${colunas}`}>
      {itens.map((d, i) => {
        const Icone = I[d.icone];
        return (
          <li
            key={d.titulo}
            data-revelar
            style={{ '--i': i } as React.CSSProperties}
            className="flex gap-3 bg-[var(--fundo)] p-5"
          >
            <span className="grid size-10 shrink-0 place-items-center border border-[var(--borda)] text-[var(--marca)]">
              <Icone className="size-5" />
            </span>
            <div>
              <p className="font-semibold leading-snug">{d.titulo}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-[var(--tinta-media)]">{d.texto}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
