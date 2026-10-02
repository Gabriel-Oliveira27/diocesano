/**
 * As cores do hotel viram variáveis CSS na raiz da página, e as peças
 * só leem as variáveis — o mesmo esquema das propostas de restaurante,
 * para as peças passarem de uma para a outra sem reescrever cor.
 */
export type Tema = {
  marca: string;
  marcaEscura: string;
  sobreMarca: string;
  destaque: string;
  fundo: string;
  papel: string;
  areia: string;
  borda: string;
  tinta: string;
  tintaMedia: string;
  tintaFraca: string;
};

export function variaveis(t: Tema): React.CSSProperties {
  return {
    '--marca': t.marca,
    '--marca-escura': t.marcaEscura,
    '--sobre-marca': t.sobreMarca,
    '--destaque': t.destaque,
    '--fundo': t.fundo,
    '--papel': t.papel,
    '--areia': t.areia,
    '--borda': t.borda,
    '--tinta': t.tinta,
    '--tinta-media': t.tintaMedia,
    '--tinta-fraca': t.tintaFraca,
  } as React.CSSProperties;
}

export type Foto = { src: string; alt: string; titulo: string; detalhe?: string };

/** Centavos só quando existem: diária é "R$ 210", não "R$ 210,00". */
export const real = (v: number) =>
  `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits: 2 })}`;

export const whatsapp = (numero: string, texto: string) =>
  `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
