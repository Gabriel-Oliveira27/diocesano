'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Um número que conta até o valor quando aparece na tela.
 *
 * O servidor manda o valor final: sem JavaScript, ou para quem pediu
 * menos movimento, o número já está certo e nunca anima. A contagem
 * começa só quando o número entra na tela — contar fora da vista é
 * animação que ninguém vê.
 */
export default function Numero({ valor, duracao = 1400 }: { valor: number; duracao?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [atual, setAtual] = useState(valor);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let quadro = 0;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const inicio = performance.now();
      const passo = (agora: number) => {
        const p = Math.min(1, (agora - inicio) / duracao);
        // Desacelera no fim: o olho lê o número quando ele para.
        setAtual(Math.round(valor * (1 - Math.pow(1 - p, 3))));
        if (p < 1) quadro = requestAnimationFrame(passo);
      };
      quadro = requestAnimationFrame(passo);
    });
    obs.observe(el);

    return () => {
      obs.disconnect();
      cancelAnimationFrame(quadro);
    };
  }, [valor, duracao]);

  return (
    // Algarismos alinhados e de largura fixa: na Garamond eles são de
    // texto por padrão (o 4 desce, o 6 sobe), e o número não pode
    // tremer de largura enquanto conta.
    <span ref={ref} className="lining-nums tabular-nums">
      {atual.toLocaleString('pt-BR')}
    </span>
  );
}
