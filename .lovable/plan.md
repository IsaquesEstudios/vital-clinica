# Reconstrução do site Vitalcor

## Objetivo
Reconstruir o site antigo em uma experiência moderna, rápida e responsiva, usando integralmente a nova identidade visual Vitalcor, preservando os endereços, conteúdos úteis e imagens relacionados a cada página.

## Escopo confirmado
- Manter `clinicavitalcor.com.br` como domínio final.
- Ignorar completamente o CSS e o JavaScript antigos.
- Preservar os caminhos das páginas institucionais, serviços, exames, notícias, política de privacidade e termos de uso.
- Migrar os textos e as imagens do arquivo `Vital.zip`, descartando feeds, páginas de autor/data/paginação duplicadas, arquivos técnicos e capturas defeituosas do HTTrack.
- Fazer o formulário de contato enviar mensagens por e-mail.

## Estrutura do novo site
1. **Navegação compartilhada**
   - Cabeçalho responsivo com a marca oficial, menu e ação principal de contato/agendamento.
   - Rodapé com navegação, serviços, endereço, contato, redes sociais, aviso médico e páginas legais.

2. **Páginas institucionais**
   - Página inicial com apresentação da clínica, principais serviços, equipe, confiança e chamada para contato.
   - A Clínica, Equipe e Contato com o conteúdo existente reorganizado e mais legível.
   - Preservar endereço, telefone, e-mail, profissionais e registros médicos encontrados no arquivo.

3. **Especialidade e exames**
   - Cardiologia.
   - Doppler de Carótidas e Vertebrais.
   - Ecocardiograma.
   - Eletrocardiograma.
   - Holter 24h.
   - MAPA.
   - Teste Ergométrico.
   - Cada página terá sua URL atual, conteúdo completo, imagem correspondente e chamada de contato.

4. **Notícias e artigos**
   - Página de listagem em `/noticias/` com busca visual e paginação quando necessário.
   - Uma página para cada artigo real, mantendo o slug original.
   - Preservar títulos, subtítulos, texto, datas e imagens disponíveis.
   - Não recriar arquivos de feed, autor, arquivo por data ou páginas duplicadas como conteúdo independente.

5. **Páginas legais**
   - Política de Privacidade e Termos de Uso com seus endereços atuais.

## Identidade visual e experiência
- Aplicar os componentes e tokens oficiais do design Vitalcor, sem reproduzir o layout antigo.
- Usar Playfair Display nos títulos editoriais e Montserrat em navegação, controles e textos.
- Priorizar azul-petróleo para hierarquia, terracota nas ações e champanhe apenas como apoio.
- Criar uma composição clínica acolhedora, premium e clara, com boa leitura em celular e computador.
- Usar a marca oficial anexada ao design e as fotografias reais vinculadas a cada conteúdo antigo.
- Substituir apenas referências de imagem comprovadamente quebradas; não inventar informações clínicas.

## Formulário de contato por e-mail
- Criar campos validados para nome, telefone, e-mail e mensagem, com retorno claro de sucesso ou erro.
- Enviar cada contato para o endereço institucional da clínica, sem expor dados sensíveis no navegador.
- Preparar o e-mail com a identidade Vitalcor e proteção contra envios inválidos ou abusivos.
- Antes dos envios funcionarem, será necessário configurar e verificar um domínio de envio da clínica no painel de e-mails.

## SEO e preservação de tráfego
- Corrigir os títulos e descrições genéricos atualmente detectados na página inicial.
- Definir título, descrição, canonical, Open Graph e Twitter Card exclusivos para cada página.
- Usar dados estruturados apropriados para clínica/organização, serviços, artigos e navegação hierárquica.
- Gerar `robots.txt` permitindo rastreamento e referenciando o mapa do site.
- Gerar `sitemap.xml` no domínio `clinicavitalcor.com.br` com todas as páginas públicas e artigos canônicos, sem datas artificiais.
- Preservar os slugs antigos para evitar perda de autoridade; páginas técnicas e duplicadas não serão indexadas.
- Revisar links internos, textos alternativos das imagens, hierarquia de títulos e avisos médicos.

## Tratamento do arquivo antigo
- Extrair somente HTML e mídia necessários, sem copiar temas, plugins, scripts, CSS ou metadados do WordPress.
- Consolidar variações redimensionadas da mesma imagem e associar cada mídia ao conteúdo correto.
- Ignorar logos de convênios capturados como HTML e a referência SVG com nome corrompido, salvo se houver uma fonte válida no próprio arquivo.
- Manter um catálogo de conteúdo estruturado para que as dezenas de artigos compartilhem um único modelo consistente, sem perder texto ou URL.

## Validação final
- Conferir todas as URLs antigas preservadas e garantir que não existam links internos quebrados.
- Testar menu, formulário, páginas de serviço, listagem e leitura de artigos em celular e computador.
- Verificar legibilidade, acessibilidade por teclado, foco visível, textos alternativos e ausência de sobreposição.
- Confirmar compilação sem erros e repetir a revisão técnica de SEO após a implementação.

## Observação técnica
A captura contém 135 páginas HTML relevantes antes da deduplicação e 216 arquivos de imagem. Parte das URLs de arquivo, autor, data e paginação repete os mesmos artigos; a implementação usará páginas dinâmicas orientadas por conteúdo para manter os slugs reais sem duplicar estruturas. O envio de e-mail usará a infraestrutura gerenciada do projeto e exigirá a verificação do domínio de envio antes do teste final.
