# Restaurar exames na home, novo H1, página Exames e mapa perto do rodapé

## 1. H1 da home

Em `src/routes/index.tsx`, o H1 do hero passa de "Cuidado que protege o seu maior bem." para o texto otimizado:

```text
Clínica Vitalcor —
Cardiologia em
Três Lagoas.
```

Mesmo estilo visual atual (quebra de linhas e destaque em terracota na última linha, via `<em>`). O texto completo lido por buscadores permanece "Clínica Vitalcor — Cardiologia em Três Lagoas".

## 2. Seção de exames de volta na home

Recriar a seção `home-exams` em `src/routes/index.tsx`, na posição original (entre "Marque sua consulta" e os depoimentos), seguindo a referência enviada:

- Eyebrow: "Exames realizados" · H2: "Tecnologia para cuidar do seu coração"
- 6 cards (3 por linha no desktop, 1 no mobile), cada um com foto, ícone em champagne, título, descrição de 2 linhas e seta →, linkando para a página do exame:

| Card | Imagem |
|---|---|
| Doppler de Carótidas e Vertebrais | /media/Doppler-de-Carotidas-e-Vertebrais_-vitalcor.webp |
| Ecocardiograma | /media/homem-fazendo-exame-de-ecocardiograma.webp |
| Eletrocardiograma | /media/homem-realizando-eletrocardiograma.webp |
| Holter 24h | /media/holter-clinica-vital.webp |
| Exame de MAPA | /media/homem-realizando-exame-de-mapa-1.webp |
| Teste Ergométrico | /media/homem-realizando-exame-ergometrico.webp |

- Descrições curtas: primeira frase de cada exame em `src/data/vital-content.json` (mesmos textos da referência — nada inventado).
- Botão "Ver todos os exames" abaixo dos cards, levando para a nova página `/exames`.

Nenhum estilo novo: as classes `.home-exams`, `.home-exam-grid`, `.media-symbol` e `.arrow-link` já existem em `src/styles.css`.

## 3. Nova página /exames

Criar `src/routes/exames.tsx`:

- Hero próprio (fundo azul petróleo sólido, sem imagem) com H1 único.
- Grade com todos os exames (os 9 exames do menu + Cardiologia), reutilizando o padrão de cards da home; exames sem foto ficam apenas com título e descrição.
- Textos vindos de `src/data/vital-content.json`, sem conteúdo médico novo.
- SEO próprio: title "Exames Cardiovasculares em Três Lagoas — Clínica Vitalcor", description, og:title/og:description e JSON-LD (WebPage + BreadcrumbList).

No menu (`src/components/SiteLayout.tsx`), o submenu de Exames ganha "Todos os exames" no topo, apontando para `/exames`.

## 4. Mapa para junto do rodapé

Mover a seção `home-location` (mapa + endereço) do meio da home para depois da seção de artigos do blog — última seção antes do rodapé. Nenhuma mudança de estilo; apenas a posição no arquivo.

## Validação

Build + Playwright em desktop (1280) e mobile (390): seção de exames na home com 6 cards, página /exames, H1 novo, mapa ao fim da home; sem imagens quebradas, sem rolagem horizontal.
