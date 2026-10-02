'use client';

import { useState } from 'react';
import Contador from './Contador';
import { dataCurta, useHoje } from './datas';
import { I } from './Icones';
import { real, whatsapp } from './tipos';

export type Espaco = { slug: string; nome: string; capacidade?: number; porHora?: number };

/**
 * O pedido de orçamento de evento, que chega pronto no WhatsApp.
 *
 * Quem organiza um congresso precisa de três respostas antes de
 * qualquer outra — cabe, está livre, quanto custa — e o hotel precisa
 * de cinco para responder: espaço, data, pessoas, horas e se vai ter
 * hospedagem. A última é onde as duas frentes do hotel se encontram:
 * evento de fora da cidade é quarto ocupado.
 */
export default function Orcamento({
  hotel,
  numeroWhatsApp,
  espacos,
  tipos,
}: {
  hotel: string;
  numeroWhatsApp: string;
  espacos: Espaco[];
  tipos: string[];
}) {
  const hoje = useHoje();
  const [slug, setSlug] = useState(espacos[0].slug);
  const [tipo, setTipo] = useState(tipos[0]);
  const [data, setData] = useState('');
  const [pessoas, setPessoas] = useState(100);
  const [horas, setHoras] = useState(4);
  const [hospedagem, setHospedagem] = useState(false);
  const [nome, setNome] = useState('');

  const espaco = espacos.find((e) => e.slug === slug) ?? espacos[0];
  const valor = espaco.porHora ? espaco.porHora * horas : null;
  const lotado = espaco.capacidade !== undefined && pessoas > espaco.capacidade;

  const texto = [
    `Olá! Gostaria de um orçamento para evento no ${hotel}.`,
    '',
    `Espaço: ${espaco.nome}`,
    `Evento: ${tipo}`,
    `Data: ${data ? dataCurta(data) : 'a definir'}`,
    `Pessoas: cerca de ${pessoas}`,
    `Duração: ${horas} ${horas === 1 ? 'hora' : 'horas'}`,
    hospedagem ? 'Vamos precisar de hospedagem para participantes.' : false,
    valor !== null ? `Pela tabela do site, o espaço sai ${real(valor)}.` : false,
    nome.trim() ? `Nome: ${nome.trim()}` : false,
  ]
    .filter((l): l is string => l !== false)
    .join('\n');

  const rotulo = 'flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[var(--tinta-fraca)]';
  const campo =
    'mt-1.5 w-full border border-[var(--borda)] bg-[var(--fundo)] px-3 py-2.5 outline-none transition-colors focus:border-[var(--marca)]';
  const opcao = (ativa: boolean) =>
    `border transition-colors ${
      ativa
        ? 'border-[var(--marca)] bg-[var(--marca)] text-[var(--sobre-marca)]'
        : 'border-[var(--borda)] bg-[var(--fundo)] text-[var(--tinta-media)] hover:border-[var(--tinta-fraca)]'
    }`;

  return (
    <div className="grid gap-6 bg-[var(--papel)] p-5 text-[var(--tinta)] sm:p-7 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-6">
        <div>
          <span className={rotulo}>
            <I.microfone className="size-3.5" /> Espaço
          </span>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {espacos.map((e) => (
              <button
                key={e.slug}
                type="button"
                onClick={() => setSlug(e.slug)}
                aria-pressed={e.slug === slug}
                className={`px-4 py-3 text-left text-sm font-semibold ${opcao(e.slug === slug)}`}
              >
                {e.nome}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className={rotulo}>
            <I.brilho className="size-3.5" /> Que evento
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tipos.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTipo(t)}
                aria-pressed={t === tipo}
                className={`px-3.5 py-1.5 text-sm ${opcao(t === tipo)}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-6">
          <label className="block w-44">
            <span className={rotulo}>
              <I.calendario className="size-3.5" /> Data
            </span>
            <input type="date" value={data} min={hoje} onChange={(e) => setData(e.target.value)} className={campo} />
          </label>
          <Contador
            rotulo="Pessoas"
            icone={<I.pessoas className="size-3.5" />}
            valor={pessoas}
            muda={setPessoas}
            min={10}
            max={1000}
            passo={10}
          />
          <Contador
            rotulo="Horas"
            icone={<I.relogio className="size-3.5" />}
            valor={horas}
            muda={setHoras}
            min={1}
            max={16}
          />
        </div>

        {lotado && (
          <p className="rest-troca flex gap-2.5 border-l-2 border-[var(--marca)] bg-[var(--areia)] px-4 py-3 text-sm">
            <I.pessoas className="mt-0.5 size-4 shrink-0 text-[var(--marca)]" />
            O {espaco.nome} recebe até {espaco.capacidade} pessoas.
          </p>
        )}

        <div className="flex flex-wrap items-end gap-4">
          <button
            type="button"
            onClick={() => setHospedagem((h) => !h)}
            aria-pressed={hospedagem}
            className={`flex h-11 items-center gap-2 px-4 text-sm ${opcao(hospedagem)}`}
          >
            {hospedagem ? <I.check className="size-4" /> : <I.cama className="size-4" />}
            Vai precisar de hospedagem
          </button>
          <label className="block min-w-56 flex-1">
            <span className={rotulo}>Seu nome ou instituição</span>
            <input value={nome} onChange={(e) => setNome(e.target.value)} className={campo} />
          </label>
        </div>
      </div>

      <div className="flex flex-col">
        <p className={rotulo}>Pela tabela</p>
        <p key={valor ?? 'consulta'} className="rest-troca mt-1 font-[family-name:var(--font-marca)] text-3xl font-semibold text-[var(--marca)] lining-nums">
          {valor !== null ? real(valor) : 'Sob consulta'}
        </p>
        <p className="mt-1 text-xs text-[var(--tinta-fraca)]">
          {valor !== null
            ? `${horas} h × ${real(espaco.porHora!)} — só o espaço; serviços à parte.`
            : 'O valor deste espaço não está publicado; o hotel responde no orçamento.'}
        </p>

        <p className={`${rotulo} mt-6`}>
          <I.whatsapp className="size-3.5" /> O que o hotel recebe
        </p>
        <pre className="mt-2 flex-1 whitespace-pre-wrap bg-[#E7F7DC] p-4 font-[family-name:var(--font-texto)] text-sm leading-relaxed text-[#1c2a17]">
          {texto}
        </pre>
        <a
          href={whatsapp(numeroWhatsApp, texto)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 bg-[#1FA855] py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
        >
          <I.whatsapp className="size-5" />
          Pedir orçamento no WhatsApp
        </a>
      </div>
    </div>
  );
}
