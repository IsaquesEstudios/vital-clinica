# Seção única "Nossa trajetória + Missão"

## Layout (conforme a referência enviada)
- Fundir as seções "Nossa trajetória" e "Missão/compromisso/valores" de `/a-clinica` em uma única seção.
- Foto dos doutores à esquerda (a nova imagem enviada), coluna de texto à direita:
  - Título: "A mais de 13 anos oferecendo nosso melhor" (mantém o texto original, sem acento em "A mais", fiel ao HTML antigo).
  - Abaixo do título, os três itens empilhados verticalmente, cada um com pequeno ícone à esquerda (estilo linha, conforme a referência):
    - Missão — "promover o bem estar das pessoas cuidando da saúde cardiovascular, de forma humanizada, onde a vida é valorizada acima de tudo."
    - Nosso compromisso — texto original integral.
    - Nossos valores — "Dedicamos a cuidar da sua saúde com ética, responsabilidade e comprometimento."
- Remover o botão de agendamento desta seção (decisão do usuário).

## Foto
- Usar `user-uploads://clinica-vital-doutores.png` (retrato dos dois doutores em fundo cinza).
- Converter para WebP e salvar em `public/media/doutores-vitalcor.webp` (ponteiros de asset não carregam no preview deste projeto).
- Alt descritivo: "Dr. Ulisses Calandrin e Dra. Vanessa C. Calandrin, da Clínica Vitalcor".
- A foto antiga (`clinica-vital-cor-profissionais-original.webp`) sai da página, mas o arquivo permanece em `public/media`.

## Estilos (src/styles.css)
- Nova classe `.clinic-legacy` (fundo off-white, como hoje) com grade de 2 colunas (foto ~4fr, texto ~6fr).
- Item da lista: ícone (SVG inline com cor petróleo via tokens), `h3` com o tamanho atual de `.clinic-values h3` (var(--vc-text-card-title)), parágrafo em `--vc-text-body-sm`.
- Mobile (40rem): coluna única — foto primeiro, texto depois; espaçamentos com tokens.

## SEO
- Estrutura de títulos permanece: H2 "A mais de 13 anos oferecendo nosso melhor"; os três itens continuam H3.
- Textos, metadados e JSON-LD de `/a-clinica` permanecem como estão.

## Validação
- Build OK e conferência com Playwright em desktop (1280px) e celular (390px): layout, ícones, sem rolagem horizontal.
