# Diocesano Hotel — proposta de redesenho

Página única que mostra ao Diocesano Hotel, em Iguatu — CE, como o site
dele poderia ser: uma abertura que recepciona, as diárias em texto,
reserva por datas que calcula a estadia pela tabela e chega pronta no
WhatsApp, eventos com pedido de orçamento próprio, a história da casa em
linha do tempo e o regulamento organizado por assunto.

Usa o nome, os preços, o endereço e as fotos reais do hotel. Por isso tem
uma faixa fixa no topo dizendo que **não é o site oficial**, e não é
indexada (`robots: noindex`): existe para ser mandada por link.

## Rodar

```bash
npm install
npm run dev
```

Abre em http://localhost:3103.

## Publicar

Next.js comum: na Vercel, importar o repositório e publicar. Não precisa
de variável de ambiente.

## Onde mexer

| Arquivo | O que tem |
| --- | --- |
| `app/dados.ts` | tudo que é do hotel: diárias, espaços, história, regulamento, cores |
| `app/page.tsx` | a página |
| `app/_pecas/` | reserva, orçamento, galeria, mapa, rodapé — vieram das propostas de restaurante, adaptadas ao hotel |
| `public/` | a logo e as fotos, da galeria do site atual do hotel |
