import { useSyncExternalStore } from 'react';

/**
 * Datas no formato do `<input type="date">` — "2026-10-01".
 *
 * A conta é toda em UTC de propósito: somar um dia a meia-noite local
 * cai no dia errado na virada de horário de verão de quem abre a página
 * de outro estado. Uma data de reserva não tem fuso; só tem dia.
 */

const DIAS_CURTOS = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

const utc = (iso: string) => {
  const [a, m, d] = iso.split('-').map(Number);
  return Date.UTC(a, m - 1, d);
};

export const somaDias = (iso: string, n: number) => new Date(utc(iso) + n * 864e5).toISOString().slice(0, 10);

export const diasEntre = (de: string, ate: string) => Math.round((utc(ate) - utc(de)) / 864e5);

/** "sex, 10/10" — como se escreve a data numa mensagem de WhatsApp. */
export const dataCurta = (iso: string) => {
  const [, m, d] = iso.split('-');
  return `${DIAS_CURTOS[new Date(utc(iso)).getUTCDay()]}, ${d}/${m}`;
};

/** Hoje em Iguatu, não no fuso de quem abre a página. */
export function hojeEmIguatu(d = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Fortaleza' }).format(d);
}

const semAviso = () => () => {};

/**
 * Hoje, para um componente. Vazio no servidor e na primeira pintura:
 * o servidor não sabe que dia é para quem está lendo, e calcular lá
 * daria outro dia perto da meia-noite e quebraria a hidratação.
 */
export function useHoje() {
  return useSyncExternalStore(semAviso, () => hojeEmIguatu(), () => '');
}
