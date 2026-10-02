'use client';

import { useState } from 'react';
import Contador from './Contador';
import { dataCurta, diasEntre, somaDias, useHoje } from './datas';
import { I } from './Icones';
import { real, whatsapp } from './tipos';

export type Quarto = { slug: string; nome: string; individual: number; duplo: number };

type Ocupacao = 'individual' | 'duplo';

/**
 * O pedido de reserva vira uma mensagem completa no WhatsApp da recepção.
 *
 * Hoje reservar é ligar ou mandar "boa tarde, tem vaga?" e esperar a
 * recepção perguntar a data, o quarto, quantas pessoas. Aqui a
 * primeira mensagem já chega com entrada, saída, quarto, ocupação,
 * criança e pet — e com o valor pela tabela, para o hóspede saber antes
 * de perguntar e a recepção não precisar fazer a conta.
 *
 * O valor é estimativa e diz isso: a tabela é a publicada, mas quem
 * confirma disponibilidade e preço continua sendo a recepção.
 */
export default function Reserva({
  hotel,
  numeroWhatsApp,
  quartos,
  escolhido,
  escolhe,
  adicional,
  pet,
}: {
  hotel: string;
  numeroWhatsApp: string;
  quartos: Quarto[];
  /** O quarto vem de fora: o "Reservar" de cada cartão já chega aqui escolhido. */
  escolhido: string;
  escolhe: (slug: string) => void;
  /** Por diária, para criança de 5 a 10 anos. */
  adicional: number;
  /** Por diária. */
  pet: number;
}) {
  const hoje = useHoje();
  const [entradaEscolhida, setEntrada] = useState('');
  const [saidaEscolhida, setSaida] = useState('');
  const [ocupacao, setOcupacao] = useState<Ocupacao>('duplo');
  const [criancas, setCriancas] = useState(0);
  const [comPet, setComPet] = useState(false);
  const [nome, setNome] = useState('');
  const [obs, setObs] = useState('');

  // Sem escolha, a entrada é hoje e a saída, amanhã. Mudar a entrada
  // para depois da saída empurra a saída junto, em vez de deixar uma
  // estadia de diárias negativas na tela.
  const entrada = entradaEscolhida || hoje;
  const saidaMin = entrada ? somaDias(entrada, 1) : '';
  const saida = saidaEscolhida && saidaEscolhida >= saidaMin ? saidaEscolhida : saidaMin;
  const diarias = entrada ? diasEntre(entrada, saida) : 0;

  const quarto = quartos.find((q) => q.slug === escolhido) ?? quartos[0];
  const diaria = quarto[ocupacao];
  const linhas = [
    { texto: `${diarias} ${diarias === 1 ? 'diária' : 'diárias'} × ${real(diaria)}`, valor: diarias * diaria },
    criancas > 0 && {
      texto: `${criancas} ${criancas === 1 ? 'criança' : 'crianças'} × ${real(adicional)} × ${diarias}`,
      valor: criancas * adicional * diarias,
    },
    comPet && { texto: `Pet × ${real(pet)} × ${diarias}`, valor: pet * diarias },
  ].filter((l): l is { texto: string; valor: number } => Boolean(l));
  const total = linhas.reduce((s, l) => s + l.valor, 0);

  const texto = entrada
    ? [
        `Olá! Gostaria de verificar disponibilidade no ${hotel}.`,
        '',
        `Entrada: ${dataCurta(entrada)}`,
        `Saída: ${dataCurta(saida)} (${diarias} ${diarias === 1 ? 'diária' : 'diárias'})`,
        `Quarto: ${quarto.nome}, ${ocupacao}`,
        criancas > 0 ? `Crianças de 5 a 10 anos: ${criancas}` : false,
        comPet ? 'Vou levar um pet.' : false,
        `Pela tabela do site: ${real(total)}`,
        nome.trim() ? `Nome: ${nome.trim()}` : false,
        obs.trim() ? `Obs.: ${obs.trim()}` : false,
      ]
        .filter((l): l is string => l !== false)
        .join('\n')
    : '';

  const rotulo = 'flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[var(--tinta-fraca)]';
  const campo =
    'mt-1.5 w-full border border-[var(--borda)] bg-[var(--fundo)] px-3 py-2.5 outline-none transition-colors focus:border-[var(--marca)]';
  const opcao = (ativa: boolean) =>
    `border text-left transition-colors ${
      ativa
        ? 'border-[var(--marca)] bg-[var(--marca)] text-[var(--sobre-marca)]'
        : 'border-[var(--borda)] bg-[var(--fundo)] hover:border-[var(--tinta-fraca)]'
    }`;

  return (
    <div className="grid gap-6 border border-[var(--borda)] bg-[var(--papel)] p-5 sm:p-7 lg:grid-cols-[1fr_20rem]">
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
          <label className="block">
            <span className={rotulo}>
              <I.calendario className="size-3.5" /> Entrada
            </span>
            <input
              type="date"
              value={entrada}
              min={hoje}
              onChange={(e) => setEntrada(e.target.value)}
              className={campo}
            />
          </label>
          <label className="block">
            <span className={rotulo}>
              <I.calendario className="size-3.5" /> Saída
            </span>
            <input
              type="date"
              value={saida}
              min={saidaMin}
              onChange={(e) => setSaida(e.target.value)}
              className={campo}
            />
          </label>
          <p className="border-l-2 border-[var(--marca)] bg-[var(--areia)] px-4 py-2.5 text-sm">
            <span key={diarias} className="rest-pulo inline-block font-semibold tabular-nums">
              {diarias}
            </span>{' '}
            {diarias === 1 ? 'diária' : 'diárias'}
          </p>
        </div>

        <div>
          <span className={rotulo}>
            <I.cama className="size-3.5" /> Quarto
          </span>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {quartos.map((a) => {
              const ativo = a.slug === quarto.slug;
              return (
                <button
                  key={a.slug}
                  type="button"
                  onClick={() => escolhe(a.slug)}
                  aria-pressed={ativo}
                  className={`flex items-center gap-3 px-4 py-3 ${opcao(ativo)}`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{a.nome}</span>
                    <span className={`block text-xs ${ativo ? 'opacity-80' : 'text-[var(--tinta-media)]'}`}>
                      {real(a.individual)} individual · {real(a.duplo)} duplo
                    </span>
                  </span>
                  {ativo && <I.check className="size-4 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-end gap-6">
          <div>
            <span className={rotulo}>
              <I.pessoas className="size-3.5" /> Ocupação
            </span>
            <div className="mt-1.5 flex">
              {(['individual', 'duplo'] as const).map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setOcupacao(o)}
                  aria-pressed={ocupacao === o}
                  className={`-ml-px flex h-11 items-center gap-2 px-4 text-sm first:ml-0 ${opcao(ocupacao === o)}`}
                >
                  {o === 'individual' ? <I.pessoa className="size-4" /> : <I.pessoas className="size-4" />}
                  {o === 'individual' ? 'Individual' : 'Duplo'}
                </button>
              ))}
            </div>
          </div>

          <Contador
            rotulo="Crianças de 5 a 10 anos"
            icone={<I.balao className="size-3.5" />}
            valor={criancas}
            muda={setCriancas}
            min={0}
            max={4}
          />

          <div>
            <span className={rotulo}>
              <I.pata className="size-3.5" /> Pet
            </span>
            <button
              type="button"
              onClick={() => setComPet((p) => !p)}
              aria-pressed={comPet}
              className={`mt-1.5 flex h-11 items-center gap-2 px-4 text-sm ${opcao(comPet)}`}
            >
              {comPet ? <I.check className="size-4" /> : <I.mais className="size-4" />}
              {comPet ? 'Vou levar' : 'Levar pet'}
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={rotulo}>Seu nome</span>
            <input value={nome} onChange={(e) => setNome(e.target.value)} className={campo} />
          </label>
          <label className="block">
            <span className={rotulo}>Algum pedido?</span>
            <input
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              placeholder="chego à noite, cama de casal…"
              className={`${campo} placeholder:text-[var(--tinta-fraca)]`}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col">
        <p className={rotulo}>Pela tabela de diárias</p>
        <dl className="mt-2 space-y-1.5 text-sm">
          {linhas.map((l) => (
            <div key={l.texto} className="rest-troca flex justify-between gap-3">
              <dt className="text-[var(--tinta-media)]">{l.texto}</dt>
              <dd className="tabular-nums">{real(l.valor)}</dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-3 border-t border-[var(--borda)] pt-2">
            <dt className="font-semibold">Total estimado</dt>
            <dd key={total} className="rest-pulo font-[family-name:var(--font-marca)] text-3xl font-semibold text-[var(--marca)] lining-nums tabular-nums">
              {real(total)}
            </dd>
          </div>
        </dl>
        <p className="mt-1 text-xs text-[var(--tinta-fraca)]">Café da manhã incluso. A recepção confirma vaga e valor.</p>

        {/* O resumo é a própria mensagem: quem reserva vê exatamente o
            que a recepção vai receber, antes de mandar. */}
        <p className={`${rotulo} mt-6`}>
          <I.whatsapp className="size-3.5" /> O que a recepção recebe
        </p>
        <pre className="mt-2 flex-1 whitespace-pre-wrap bg-[#E7F7DC] p-4 font-[family-name:var(--font-texto)] text-sm leading-relaxed text-[#1c2a17]">
          {texto}
        </pre>
        <a
          href={texto ? whatsapp(numeroWhatsApp, texto) : undefined}
          aria-disabled={!texto}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-3 flex items-center justify-center gap-2 py-3.5 font-semibold text-white transition-opacity ${
            texto ? 'bg-[#1FA855] hover:opacity-90' : 'pointer-events-none bg-zinc-400'
          }`}
        >
          <I.whatsapp className="size-5" />
          Pedir reserva no WhatsApp
        </a>
      </div>
    </div>
  );
}
