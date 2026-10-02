'use client';

import { useEffect } from 'react';

/**
 * Faz subir o que tem `data-revelar` quando entra na tela.
 *
 * Só esconde o que está FORA da tela no momento em que roda — o que o
 * visitante já está vendo nunca pisca. E, se o JS não rodar, nada fica
 * escondido: o atributo sozinho não esconde, só o valor "fora".
 */
export function useRevelar() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const alvos = [...document.querySelectorAll<HTMLElement>('[data-revelar]')];
    const altura = window.innerHeight;
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.revelar = 'dentro';
            obs.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );

    for (const el of alvos) {
      if (el.getBoundingClientRect().top > altura) {
        el.dataset.revelar = 'fora';
        obs.observe(el);
      }
    }
    return () => obs.disconnect();
  }, []);
}
