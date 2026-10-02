import { I } from './Icones';

/** Menos e mais em volta de um número — o mesmo da reserva de mesa. */
export default function Contador({
  rotulo,
  icone,
  valor,
  muda,
  min,
  max,
  passo = 1,
}: {
  rotulo: string;
  icone: React.ReactNode;
  valor: number;
  muda: (n: number) => void;
  min: number;
  max: number;
  passo?: number;
}) {
  return (
    <div>
      <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[var(--tinta-fraca)]">
        {icone} {rotulo}
      </span>
      <div className="mt-1.5 flex w-max items-center border border-[var(--borda)] bg-[var(--fundo)]">
        <button
          type="button"
          onClick={() => muda(Math.max(min, valor - passo))}
          disabled={valor <= min}
          aria-label={`Menos — ${rotulo}`}
          className="grid size-11 place-items-center transition-colors hover:text-[var(--marca)] disabled:opacity-30"
        >
          <I.menos className="size-4" />
        </button>
        <span key={valor} className="rest-pulo w-12 text-center text-lg font-semibold tabular-nums">
          {valor}
        </span>
        <button
          type="button"
          onClick={() => muda(Math.min(max, valor + passo))}
          disabled={valor >= max}
          aria-label={`Mais — ${rotulo}`}
          className="grid size-11 place-items-center transition-colors hover:text-[var(--marca)] disabled:opacity-30"
        >
          <I.mais className="size-4" />
        </button>
      </div>
    </div>
  );
}
