# Fazer os artigos abrirem ao clicar

## Por que não abre
A página de Notícias está configurada como "página-mãe" da página do artigo. Ao clicar, o endereço muda, mas a página-mãe não reserva espaço para mostrar o artigo, então a lista continua aparecendo.

## O que será feito
- Separar a lista de notícias e a página do artigo, para que cada uma abra sozinha.
- Nada muda no visual, nos textos ou nos endereços (/noticias e /noticias/nome-do-artigo continuam iguais).

## Detalhes técnicos
- Renomear `src/routes/noticias.tsx` para `src/routes/noticias.index.tsx` e trocar `createFileRoute('/noticias')` por `createFileRoute('/noticias/')`.
- `noticias.$slug.tsx` passa a ser rota independente, sem layout pai.
- Validar no navegador: clicar num card em /noticias abre o artigo; build OK.
