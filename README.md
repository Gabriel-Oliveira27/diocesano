# Diocesano Hotel — proposta de redesenho

Página única que mostra ao Diocesano Hotel, em Iguatu — CE, como o site
dele poderia ser: uma abertura que recepciona, as diárias em texto,
reserva por WhatsApp já com o tipo de apartamento, eventos separados da
hospedagem e a história da casa em linha do tempo.

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
| `app/dados.ts` | tudo que é do hotel: diárias, espaços, história, regulamento |
| `app/page.tsx` | a página |
| `public/` | a logo e as fotos, da galeria do site atual do hotel |
