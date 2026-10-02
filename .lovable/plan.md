# Mudanças solicitadas (PDF Site_vitalcor_2)

## 1. Página inicial (home)

- **Nova seção de benefícios**: texto de abertura "Na Vitalcor, você encontra consultas com cardiologistas especialistas e exames cardiovasculares completos em um só lugar..." + lista com 4 itens (13+ anos, consultas e exames na mesma clínica, equipe especializada, atendimento humanizado).
- **Remover a seção de exames da home** — os exames ficam apenas na aba Exames do menu.
- **Seção "Marque sua consulta"**: trocar o texto por "Conte com uma equipe experiente para cuidar da sua saúde. Nossos especialistas estão preparados para oferecer um atendimento completo, desde a prevenção até o acompanhamento do tratamento." Botão passa a ser "Falar com um Especialista".
- **Depoimentos**: novo título "Feedback de nossos pacientes" com o texto sobre os 13 anos e o perfil do Google Empresas, mais o destaque "A confiança de nossos pacientes é o nosso maior reconhecimento!".
- **Mapa/endereço**: mover para baixo da seção de depoimentos, com o mapa menor e o endereço em destaque maior.
- **Instagram**: adicionar link do perfil oficial (instagram.com/vitalcor3l) na home e na página de contato ("Nos siga no Instagram").

## 2. Menu e estrutura

- Nova ordem do menu: **Início, Exames, Sobre nós, Contato, Notícias**.
- "Sobre nós" passa a reunir em uma única aba as informações da clínica e os médicos (substitui "A Clínica" e "Equipe" no menu). A página /equipe deixa de existir como item de menu; os cartões de profissionais passam para a página Sobre nós.

## 3. Exames (dropdown e páginas)

- Renomear "Doppler de carótidas e vertebrais" para **Ultrassonografia com Doppler de Carótidas**.
- Acrescentar 4 novos exames ao menu: **Polissonografia**, **Eletrocardiograma**, **Teste Cardiopulmonar (Ergoespirometria)** e **MRPA — Monitorização Residencial da Pressão Arterial**.
- Como o PDF não traz o conteúdo desses 4 exames, as páginas serão criadas com estrutura básica (título + chamada para agendamento), sem inventar texto médico. Quando você enviar os textos, completo cada página.

## 4. Página Sobre nós

- **Seção "Clinica VitalCor"**: trocar o texto por "Mais do que uma clínica, um lugar para cuidar da sua saúde com confiança." + os dois novos parágrafos (atendimento acolhedor; 13 anos de experiência, especialistas, exames modernos e estrutura completa).
- **Remover a seção "Cuidando bem para Cuidar sempre."** — ir direto para os médicos.
- **Profissionais reais** substituindo os cartões fictícios, com fotos extraídas do PDF:
  - Dra. Nádia — Cardiologista e Ergometrista — CRM/MS 9969, RQE 5750 / 7490
  - Dr. Ulisses Calandrin — Cardiologista — CRM-MS 6601, RQE 5089 / 5620
  - Dra. Vanessa C. Calandrin — Cardiologista — CRM-MS 6602, RQE 5224 / 6708
  - Dr. Guilherme Pizzo Pagnani — CRM 8006/MS
  - Dra. Francielle Garcia Vangan — Infectologista — CRM 8011/MS, RQE 4484
  - Dr. Erick Vinícius Milanez Bertin — CRM 11737 — Cardiologia RQE 6957, Ecocardiografia RQE 7216
  - Dr. Gustavo Floriano de Queiroz — Cirurgia do Aparelho Digestivo — CRM 7477, RQE 4288
  - Dra. Larissa Alves da Silveira — Endocrinologia e Metabologia — CRM 12138, RQE 7242
  - Dr. Luiz Angeloni Neto — Cardiologia — CRM 15637, RQE 4376
  - Dr. Tiago Hiroshi Koyanagui — CRM 15074 — Hemodinâmica/Intervencionista RQE 94834, Clínica Médica RQE 94835
  - Josiane Maria Carlos Nunes — Nutricionista — CRN 3 52927
- Cartões atualizados para exibir especialidade, CRM e RQE.

## 5. Página de contato

- Adicionar bloco de redes sociais com o link do Instagram oficial.

## Detalhes técnicos

- Arquivos: `src/routes/index.tsx`, `src/routes/a-clinica.tsx` (Sobre nós), `src/routes/contato.tsx`, `src/components/SiteLayout.tsx` (menu), `src/data/vital-content.json` (novos exames), `src/styles.css`.
- Fotos dos médicos extraídas do PDF serão convertidas para WebP em `public/media/`.
- Rota /equipe removida do menu; manter ou redirecionar para /a-clinica.
- Manter restrições: não inventar dados clínicos, sem FAQPage, textos fiéis ao enviado.
- Validar em desktop (1280px) e mobile (390px) com Playwright; build OK.
