import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const texto = Geist({ variable: '--font-texto', subsets: ['latin'] });

export const metadata: Metadata = {
  // O painel do Prospecta procura este título no HTML para dizer se a
  // proposta está no ar. Mudar aqui é mudar lá.
  title: 'Proposta · Diocesano Hotel',
  description: 'Proposta de redesenho do site do Diocesano Hotel, em Iguatu — CE.',
  // Não indexar. A página usa o nome, os preços e o endereço reais de
  // um hotel que existe: se ela aparecer no Google, mais cedo ou mais
  // tarde alguém acha por engano e tenta reservar por aqui. Ela
  // existe para ser mandada por link, não para competir com o site
  // que pretende substituir.
  robots: { index: false, follow: false },
};

const FALAR_COM_O_AUTOR =
  'https://wa.me/5588988568911?text=' +
  encodeURIComponent('Olá, Gabriel! Vi a proposta de redesenho do site do Diocesano Hotel e queria conversar.');

/**
 * A faixa de cima diz que esta página NÃO é o site oficial.
 *
 * A proposta usa o conteúdo real de um hotel real, para mostrar a ele
 * como o site dele poderia ser. Uma página com o nome, os preços e o
 * endereço certos PRECISA dizer que não é dele — senão é só questão de
 * tempo até alguém achar por engano e tentar reservar.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={texto.variable}>
      <body className="min-h-dvh bg-white font-[family-name:var(--font-texto)] text-zinc-900 antialiased">
        <div className="sticky top-0 z-50 flex h-9 items-center gap-3 border-b border-sky-300/60 bg-sky-50 px-3 text-[13px] text-sky-900 sm:px-4">
          <span className="shrink-0 font-semibold">Proposta de redesenho</span>

          <span className="hidden min-w-0 flex-1 truncate text-sky-800/80 md:block">
            Página de demonstração feita por Gabriel Oliveira. Não é o site oficial.
          </span>

          <a
            href={FALAR_COM_O_AUTOR}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto shrink-0 rounded-md bg-sky-900 px-2.5 py-1 font-medium text-sky-50 transition-opacity hover:opacity-90"
          >
            Falar com o autor
          </a>
        </div>

        {children}
      </body>
    </html>
  );
}
