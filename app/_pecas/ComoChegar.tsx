import { I, type NomeIcone } from './Icones';

export type Linha = { icone: NomeIcone; rotulo: string; valor: string; href?: string };

/**
 * Mapa, rota e os contatos — com os horários da casa no lugar da tabela
 * de "aberto agora" dos restaurantes: hotel não fecha, mas o café, a
 * piscina e o restaurante têm hora, e é isso que o hóspede pergunta.
 */
export default function ComoChegar({
  nome,
  endereco,
  consulta,
  horarios,
  contatos,
}: {
  nome: string;
  endereco: string[];
  /** O que vai para o Google Maps e o Waze: nome do hotel + endereço acha o pino certo. */
  consulta: string;
  horarios: Linha[];
  contatos: Linha[];
}) {
  const q = encodeURIComponent(consulta);

  const lista = (linhas: Linha[]) => (
    <ul className="space-y-2 text-sm">
      {linhas.map((c) => {
        const Icone = I[c.icone];
        const dentro = (
          <>
            <span className="grid size-8 shrink-0 place-items-center border border-[var(--borda)] text-[var(--marca)]">
              <Icone className="size-4" />
            </span>
            <span className="w-28 shrink-0 text-[var(--tinta-fraca)]">{c.rotulo}</span>
            <span className="min-w-0 break-words font-medium">{c.valor}</span>
          </>
        );
        return (
          <li key={c.rotulo}>
            {c.href ? (
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-[var(--marca)]"
              >
                {dentro}
              </a>
            ) : (
              <span className="flex items-center gap-3">{dentro}</span>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      {/* O mapa embutido do Google, sem chave de API. Carrega só
          quando chega perto da tela — é o elemento mais pesado da
          página e a maioria das visitas nem rola até aqui. */}
      <div data-revelar className="overflow-hidden border border-[var(--borda)] bg-[var(--areia)]">
        <iframe
          title={`Mapa: ${nome}`}
          src={`https://maps.google.com/maps?q=${q}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[4/3] h-full min-h-72 w-full lg:aspect-auto"
        />
      </div>

      <div className="space-y-7">
        <div data-revelar>
          <address className="flex gap-3 not-italic leading-relaxed">
            <I.local className="mt-0.5 size-5 shrink-0 text-[var(--marca)]" />
            <span>
              {endereco.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </span>
          </address>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--marca)] px-4 py-2.5 text-sm font-semibold text-[var(--sobre-marca)] transition-opacity hover:opacity-90"
            >
              <I.rota className="size-4" />
              Traçar rota
            </a>
            <a
              href={`https://waze.com/ul?q=${q}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--borda)] px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[var(--marca)] hover:text-[var(--marca)]"
            >
              Abrir no Waze
            </a>
          </div>
        </div>

        <div data-revelar style={{ '--i': 1 } as React.CSSProperties}>
          <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--tinta-fraca)]">
            <I.relogio className="size-3.5" /> Horários da casa
          </p>
          {lista(horarios)}
        </div>

        <div data-revelar style={{ '--i': 2 } as React.CSSProperties}>
          <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[var(--tinta-fraca)]">
            <I.telefone className="size-3.5" /> Fale com a recepção
          </p>
          {lista(contatos)}
        </div>
      </div>
    </div>
  );
}
