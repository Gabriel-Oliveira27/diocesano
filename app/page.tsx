'use client';

import Image from 'next/image';
import { useState } from 'react';
import ComoChegar from './_pecas/ComoChegar';
import { Destaques, Galeria } from './_pecas/Galeria';
import { I } from './_pecas/Icones';
import { useRevelar } from './_pecas/movimento';
import Numero from './_pecas/Numero';
import Orcamento from './_pecas/Orcamento';
import ParaOHotel from './_pecas/ParaOHotel';
import Regulamento from './_pecas/Regulamento';
import Reserva from './_pecas/Reserva';
import Rodape from './_pecas/Rodape';
import { real, variaveis } from './_pecas/tipos';
import {
  adicionais,
  contatos,
  destaques,
  espacos,
  galeria,
  historia,
  horariosDaCasa,
  hotel,
  instalacoes,
  quartos,
  regulamento,
  rodape,
  tema,
  tiposDeEvento,
} from './dados';

/**
 * As fotos são as DELES, tiradas da galeria do site atual.
 *
 * É a escolha certa por um motivo que é também o argumento de venda:
 * as fotos de fora já são boas — luz natural, enquadramento, a
 * arquitetura bem resolvida — e o site as enterrava numa galeria de 107
 * miniaturas. Mostrá-las bem apresentadas prova que o problema é
 * apresentação, não matéria-prima. Banco de imagens seria pior: uma
 * piscina linda que não é a deles cria expectativa falsa.
 *
 * Limite real: 640px de largura. Por isso a abertura não é mais uma
 * foto de tela cheia sob um véu — é uma foto do tamanho em que ela é
 * nítida, ao lado do texto.
 */
const FOTOS = {
  logo: '/logo.png',
  passagem: '/passagem.jpg',
  jardim: '/jardim.jpg',
};

// Inaugurado em dezembro de 1965: a casa faz aniversário em dezembro.
const agora = new Date();
const anos = agora.getFullYear() - hotel.inauguracao.ano - (agora.getMonth() + 1 < hotel.inauguracao.mes ? 1 : 0);
const menorDiaria = Math.min(...quartos.map((q) => q.individual));

function Titulo({ sobre, children, claro = false }: { sobre: string; children: React.ReactNode; claro?: boolean }) {
  return (
    <div data-revelar>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${claro ? 'text-[var(--destaque)]' : 'text-[var(--marca)]'}`}
      >
        {sobre}
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-marca)] text-4xl font-semibold leading-tight lining-nums sm:text-5xl">
        {children}
      </h2>
    </div>
  );
}

export default function PropostaDiocesano() {
  useRevelar();
  // O apartamento escolhido mora aqui, e não na reserva: o "Reservar"
  // de cada cartão leva até o formulário com ele já marcado.
  const [apto, setApto] = useState(quartos[0].slug);

  return (
    <div style={variaveis(tema)} className="bg-[var(--fundo)] text-[var(--tinta)]">
      {/* ── Cabeçalho ───────────────────────────────────────── */}
      <header className="sticky top-9 z-40 border-b border-[var(--borda)] bg-[var(--fundo)]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
          {/* A marca deles, mostrada a eles. O reconhecimento é
              imediato e é o que faz a proposta parecer o site deles em
              vez de um site qualquer. */}
          <Image src={FOTOS.logo} alt={hotel.nome} width={307} height={58} loading="eager" className="h-8 w-auto shrink-0" />

          <nav className="ml-auto hidden gap-6 text-sm lg:flex">
            {[
              ['#quartos', 'Apartamentos'],
              ['#hotel', 'O hotel'],
              ['#eventos', 'Eventos'],
              ['#historia', 'História'],
              ['#contato', 'Como chegar'],
            ].map(([href, rotulo]) => (
              <a
                key={href}
                href={href}
                className="relative py-1 transition-colors hover:text-[var(--marca)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--marca)] after:transition-transform hover:after:scale-x-100"
              >
                {rotulo}
              </a>
            ))}
          </nav>

          <a
            href="#reservas"
            className="ml-auto inline-flex shrink-0 items-center gap-2 bg-[var(--marca)] px-4 py-2.5 text-sm font-semibold text-[var(--sobre-marca)] transition-opacity hover:opacity-90 lg:ml-0"
          >
            <I.calendario className="size-4" />
            Reservar
          </a>
        </div>
      </header>

      {/* ── Abertura ───────────────────────────────────────────
          O lugar que no site antigo era do regulamento. A frase é
          deles — era a chamada do carrossel da página inicial. Quem
          chega precisa saber onde está, o que é a casa e como reservar,
          nessa ordem. */}
      <section className="relative overflow-hidden bg-[var(--marca-escura)] text-white">
        <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[var(--marca)]/70 via-[var(--marca)]/15 to-transparent" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 lg:grid-cols-[1fr_1.05fr] lg:py-20">
          <div>
            <p
              className="rest-entrada text-sm font-medium uppercase tracking-[0.22em] text-[var(--destaque)]"
              style={{ '--i': 0 } as React.CSSProperties}
            >
              Desde 1965 · Iguatu — CE
            </p>

            <h1
              className="rest-entrada mt-5 font-[family-name:var(--font-marca)] text-5xl font-semibold leading-[1.02] sm:text-7xl"
              style={{ '--i': 1 } as React.CSSProperties}
            >
              {hotel.chamada}.
            </h1>
            <p
              className="rest-entrada mt-6 max-w-xl text-lg leading-relaxed text-white/75"
              style={{ '--i': 2 } as React.CSSProperties}
            >
              Hospedagem no Centro de Treinamento Diocesano, no bairro Planalto: uma casa de {anos} anos
              com jardins, a Capela São José, piscinas e café da manhã incluso na diária.
            </p>

            <div className="rest-entrada mt-8 flex flex-wrap gap-3" style={{ '--i': 3 } as React.CSSProperties}>
              <a
                href="#reservas"
                className="inline-flex items-center gap-2 bg-white px-6 py-3.5 font-semibold text-[var(--marca)] transition-transform hover:-translate-y-0.5"
              >
                <I.calendario className="size-4" />
                Verificar disponibilidade
              </a>
              <a
                href="#quartos"
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 font-semibold transition-colors hover:border-white/70"
              >
                <I.cama className="size-4" />
                Ver apartamentos
              </a>
            </div>

            <dl
              className="rest-entrada mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-white/15 pt-7 sm:grid-cols-4"
              style={{ '--i': 4 } as React.CSSProperties}
            >
              {(
                [
                  ['De casa', <Numero key="n" valor={anos} />, 'anos'],
                  ['Diária desde', <span key="n">R$ <Numero valor={menorDiaria} /></span>, ''],
                  ['Auditório', <Numero key="n" valor={450} />, 'lugares'],
                  ['Na diária', 'café', 'incluso'],
                ] as const
              ).map(([r, v, unidade]) => (
                <div key={r}>
                  <dt className="text-[11px] uppercase tracking-wider text-white/50">{r}</dt>
                  <dd className="mt-1 whitespace-nowrap font-[family-name:var(--font-marca)] text-3xl font-semibold leading-none text-[var(--destaque)]">
                    {v}
                    {unidade && <span className="ml-1.5 font-[family-name:var(--font-texto)] text-xs font-normal text-white/60">{unidade}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* A passagem coberta: piso em zigue-zague, pilares no
              vermelho da marca e o jardim dos dois lados — é a melhor
              foto que eles têm. O jardim com as esculturas entra por
              cima, no canto: é a identidade da casa, e nenhuma das duas
              aguentaria a tela cheia com 640px. */}
          <figure className="rest-entrada relative mx-auto w-full max-w-xl" style={{ '--i': 2 } as React.CSSProperties}>
            <div className="relative aspect-[3/2] overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10">
              <Image
                src={FOTOS.passagem}
                alt="Passagem coberta do hotel, com piso em zigue-zague e jardim dos dois lados"
                fill
                preload
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="rest-zoom object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-5 hidden aspect-[4/3] w-52 overflow-hidden shadow-xl shadow-black/40 ring-4 ring-[var(--marca-escura)] sm:block">
              <Image src={FOTOS.jardim} alt="Esculturas no jardim florido" fill sizes="13rem" className="object-cover" />
            </div>
          </figure>
        </div>
      </section>

      {/* ── O que tem no hotel ───────────────────────────────── */}
      <section className="border-b border-[var(--borda)]">
        <div className="mx-auto max-w-6xl">
          <Destaques itens={destaques} />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 pt-14">
        <ParaOHotel titulo="A página inicial do site de vocês abre com o regulamento">
          <p>
            Em <b>diocesanohotel.com.br</b>, depois do carrossel e da caixa de disponibilidade, o texto da
            página inicial é o regulamento interno — com{' '}
            <b>“é expressamente proibido lavar e passar roupa nos apartamentos”</b> em caixa alta. Quem
            chega ao site lê as regras antes de conhecer o hotel.
          </p>
          <p>
            Aqui a abertura recebe: o que é a casa, onde fica, quanto custa e como reservar. As regras
            continuam todas no fim da página, organizadas por assunto.
          </p>
        </ParaOHotel>
      </div>

      {/* ── Apartamentos ─────────────────────────────────────
          Os preços em TEXTO. No site eles viviam dentro de um JPEG. */}
      <section id="quartos" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Titulo sobre="Apartamentos">Quatro jeitos de ficar.</Titulo>
          <p data-revelar className="max-w-sm text-[var(--tinta-media)]">
            Todos com ar central, Wi-Fi e café da manhã incluso. A diária vai do meio-dia ao meio-dia.
          </p>
        </div>

        <div className="mt-8 grid gap-px border border-[var(--borda)] bg-[var(--borda)] sm:grid-cols-2">
          {quartos.map((q, i) => (
            <article
              key={q.slug}
              data-revelar
              style={{ '--i': i } as React.CSSProperties}
              className="group relative flex flex-col bg-[var(--papel)] p-6 transition-colors hover:bg-[var(--fundo)] sm:p-7"
            >
              {/* Um filete da cor da marca corre no topo ao passar o
                  mouse — sinal de que o cartão é clicável, sem sombra
                  nem canto arredondado. */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[var(--marca)] transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex items-start gap-3">
                <h3 className="font-[family-name:var(--font-marca)] text-3xl font-semibold leading-none">{q.nome}</h3>
                {q.destaque && (
                  <span className="ml-auto shrink-0 border-l-2 border-[var(--marca)] bg-[var(--areia)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--marca)]">
                    O mais completo
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-[var(--tinta-media)]">{q.resumo}</p>

              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {q.itens.map((item) => {
                  const Icone = I[item.icone];
                  return (
                    <li key={item.texto} className="flex items-center gap-2">
                      <Icone className="size-4 shrink-0 text-[var(--marca)]" />
                      {item.texto}
                    </li>
                  );
                })}
              </ul>

              <div className="flex-1" />

              {/* Envolve em vez de espremer: dois preços mais o botão
                  somam mais que a largura de um cartão em tela estreita. */}
              <div className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-3 border-t border-[var(--borda)] pt-5">
                {(['individual', 'duplo'] as const).map((o) => (
                  <div key={o}>
                    <p className="text-[11px] uppercase tracking-wider text-[var(--tinta-fraca)]">
                      {o === 'individual' ? 'Individual' : 'Duplo'}
                    </p>
                    <p className="font-[family-name:var(--font-marca)] text-3xl font-semibold leading-none text-[var(--marca)] lining-nums">
                      {real(q[o])}
                    </p>
                  </div>
                ))}
                <a
                  href="#reservas"
                  onClick={() => setApto(q.slug)}
                  className="ml-auto inline-flex items-center gap-2 border border-[var(--marca)] px-4 py-2.5 text-sm font-semibold text-[var(--marca)] transition-colors hover:bg-[var(--marca)] hover:text-white"
                >
                  <I.calendario className="size-4" />
                  Reservar
                </a>
              </div>
            </article>
          ))}
        </div>

        <p data-revelar className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--tinta-media)]">
          <span className="flex items-center gap-2">
            <I.balao className="size-4 text-[var(--marca)]" />
            Apartamento quádruplo e criança de 5 a 10 anos: + {real(adicionais.criancaOuQuadruplo)} por diária
          </span>
          <span className="flex items-center gap-2">
            <I.pata className="size-4 text-[var(--marca)]" />
            Pet: + {real(adicionais.pet)} por diária
          </span>
        </p>

        <div className="mt-10">
          <ParaOHotel titulo="As diárias de vocês estavam dentro de uma imagem">
            <p>
              No site, a tabela de preços era uma foto. O Google não lê o que está dentro de uma imagem,
              leitor de tela também não, no celular ela ficava pequena demais para ler — e mudar um valor
              exigia editor de imagem.
            </p>
            <p>
              Aqui as diárias são texto: trocar um preço é trocar um número. E a reserva logo abaixo já
              calcula a estadia pela tabela, para o hóspede saber o valor antes de perguntar.
            </p>
          </ParaOHotel>
        </div>
      </section>

      {/* ── Reservas ──────────────────────────────────────── */}
      <section id="reservas" className="scroll-mt-28 border-y border-[var(--borda)] bg-[var(--areia)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Titulo sobre="Reservas">Verifique a disponibilidade.</Titulo>
          <p data-revelar className="mt-3 max-w-2xl text-lg text-[var(--tinta-media)]">
            Escolha as datas e o apartamento. O pedido chega completo no WhatsApp da recepção, já com o
            valor pela tabela, e a confirmação volta por lá.
          </p>

          <div data-revelar className="mt-8">
            <Reserva
              hotel={hotel.nome}
              numeroWhatsApp={hotel.whatsapp}
              apartamentos={quartos}
              escolhido={apto}
              escolhe={setApto}
              adicional={adicionais.criancaOuQuadruplo}
              pet={adicionais.pet}
            />
          </div>
        </div>
      </section>

      {/* ── O hotel ─────────────────────────────────────────── */}
      <section id="hotel" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Titulo sobre="O hotel">Uma casa com jardim, capela e piscina.</Titulo>
          <p data-revelar className="max-w-sm text-[var(--tinta-media)]">
            O hotel ocupa parte do Centro de Treinamento Diocesano, no bairro Planalto. Toque numa foto
            para ver em tela cheia.
          </p>
        </div>

        <div className="mt-8">
          <Galeria fotos={galeria} />
        </div>

        <div className="mt-10 border border-[var(--borda)]">
          <Destaques itens={instalacoes} colunas="sm:grid-cols-2 lg:grid-cols-3" />
        </div>

        <div className="mt-10">
          <ParaOHotel titulo="As fotos são de vocês — e as de fora são ótimas">
            <p>
              Todas as fotos desta página saíram da galeria do site de vocês. As de área externa, jardim e
              arquitetura têm luz natural e enquadramento pensado; no site, estavam perdidas entre mais
              de cem miniaturas.
            </p>
            <p>
              As de <b>apartamento</b> são o ponto fraco — e são justamente as que decidem uma reserva. Uma
              manhã de fotos com a cama arrumada, a cortina aberta e luz natural resolve. E, se houver as
              originais em tamanho maior (as do site têm 640 pixels de largura), a página inteira fica
              mais nítida.
            </p>
          </ParaOHotel>
        </div>
      </section>

      {/* ── Eventos ──────────────────────────────────────────
          Faixa própria, de outra cor: quem procura auditório para um
          congresso não é a mesma pessoa que procura cama, e no site
          antigo as duas coisas dividiam o mesmo menu. */}
      <section id="eventos" className="scroll-mt-28 bg-[var(--marca-escura)] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Titulo sobre="Eventos e formações" claro>
              Um auditório para 450 pessoas.
            </Titulo>
            <p data-revelar className="max-w-md text-white/70">
              O Centro nasceu para receber encontros de formação, e os espaços dele recebem congresso,
              curso, palestra e reunião — com hospedagem no mesmo lugar.
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-white/10 lg:grid-cols-[1.4fr_1fr_1fr]">
            {espacos.map((e, i) => (
              <article
                key={e.slug}
                data-revelar
                style={{ '--i': i } as React.CSSProperties}
                className="flex flex-col bg-[var(--marca-escura)] p-6"
              >
                <h3 className="font-[family-name:var(--font-marca)] text-2xl font-semibold">{e.nome}</h3>
                {e.capacidade && (
                  <p className="mt-3 font-[family-name:var(--font-marca)] text-6xl font-semibold leading-none text-[var(--destaque)] lining-nums">
                    <Numero valor={e.capacidade} />
                    <span className="ml-2 font-[family-name:var(--font-texto)] text-sm font-normal text-white/60">pessoas</span>
                  </p>
                )}
                <p className="mt-3 text-sm text-white/70">{e.texto}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/85">
                  {e.itens.map((item) => {
                    const Icone = I[item.icone];
                    return (
                      <li key={item.texto} className="flex gap-2.5">
                        <Icone className="mt-0.5 size-4 shrink-0 text-[var(--destaque)]" />
                        {item.texto}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-auto pt-6 text-sm">
                  <span className="text-white/50">Valor: </span>
                  <span className="font-semibold">{e.porHora ? `${real(e.porHora)} por hora` : 'sob consulta'}</span>
                </p>
              </article>
            ))}
          </div>

          <div data-revelar className="mt-10">
            <Orcamento hotel={hotel.nome} numeroWhatsApp={hotel.whatsapp} espacos={espacos} tipos={tiposDeEvento} />
          </div>

          <div className="mt-10">
            <ParaOHotel titulo="Hospedagem e eventos, cada um no seu lugar">
              <p>
                No site, cada auditório era uma página no mesmo menu dos apartamentos. Quem procura
                auditório para um congresso não é quem procura cama: aqui os eventos têm faixa e pedido de
                orçamento próprios, e o pedido chega com espaço, data, pessoas, horas e se vai precisar de
                hospedagem — que é onde as duas frentes do hotel se encontram.
              </p>
              <p>
                A capacidade e o valor do Auditório Anunciação e da sala de reuniões não estavam
                publicados. Entram quando vocês quiserem.
              </p>
            </ParaOHotel>
          </div>
        </div>
      </section>

      {/* ── História ─────────────────────────────────────────
          No site, ela morava numa aba interna chamada "Sobre". É o
          maior ativo do hotel e explica tudo o que ele tem. */}
      <section id="historia" className="scroll-mt-28 border-b border-[var(--borda)] bg-[var(--areia)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1.3fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Titulo sobre="História">{anos} anos de casa.</Titulo>
            <p data-revelar className="mt-4 text-lg leading-relaxed text-[var(--tinta-media)]">
              O hotel nasceu dentro de um centro de formação da Diocese de Iguatu. É por isso que tem
              capela, auditório e jardins para caminhar.
            </p>
            <figure data-revelar className="mt-8 border-l-2 border-[var(--marca)] pl-6">
              <blockquote className="font-[family-name:var(--font-marca)] text-3xl italic text-[var(--marca)]">
                {hotel.lema}
              </blockquote>
              <figcaption className="mt-1.5 text-sm text-[var(--tinta-fraca)]">
                “{hotel.lemaTraduzido}” — lema de Dom Edson de Castro Homem
              </figcaption>
            </figure>
          </div>

          <ol className="space-y-10 border-l border-[var(--tinta-fraca)]/40 pl-8">
            {historia.map((h, i) => (
              <li key={h.ano} data-revelar style={{ '--i': i } as React.CSSProperties} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.45rem] top-3 size-3 rotate-45 bg-[var(--marca)] ring-4 ring-[var(--areia)]"
                />
                <p className="font-[family-name:var(--font-marca)] text-5xl font-semibold leading-none text-[var(--marca)] lining-nums">
                  {h.ano}
                </p>
                <h3 className="mt-2 font-semibold">{h.titulo}</h3>
                <p className="mt-1 leading-relaxed text-[var(--tinta-media)]">{h.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Como chegar ───────────────────────────────────── */}
      <section id="contato" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16">
        <Titulo sobre="Como chegar">No bairro Planalto, em Iguatu.</Titulo>
        <div className="mt-8">
          <ComoChegar
            nome={hotel.nome}
            endereco={hotel.endereco}
            consulta={hotel.consultaMapa}
            horarios={horariosDaCasa}
            contatos={contatos}
          />
        </div>
      </section>

      {/* ── Regulamento ──────────────────────────────────────
          Onde uma regra deve ficar: disponível, e não na entrada. */}
      <section id="regulamento" className="scroll-mt-28 border-t border-[var(--borda)] bg-[var(--areia)]">
        <div className="mx-auto max-w-6xl space-y-8 px-5 py-14">
          <div data-revelar>
            <Regulamento grupos={regulamento} />
          </div>

          <ParaOHotel titulo="O regulamento continua inteiro — no lugar dele">
            <p>
              São as mesmas regras da página inicial de vocês, sem tirar nenhuma: agrupadas pelo que o
              hóspede procura — diária, café, visitas, piscinas — e escritas no tom de quem recebe. Quem
              precisa delas acha; quem está chegando é recebido primeiro.
            </p>
          </ParaOHotel>
        </div>
      </section>

      <Rodape d={rodape} />
    </div>
  );
}
