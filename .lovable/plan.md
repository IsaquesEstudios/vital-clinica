# Remover o Dr. Tiago do site

## Alterações
- Retirar o cartão do **Dr. Tiago Hiroshi Koyanagui** de **Sobre nós**, incluindo nome, foto, especialidade, CRM e RQEs.
- Excluir as duas fotos dele guardadas no site, inclusive a versão antiga, para que não continuem disponíveis por endereço direto.
- Manter os outros **10 profissionais**, suas informações e a apresentação atual, sem substituir o médico nem alterar os artigos.
- Registrar que ele não pertence mais à clínica para evitar sua inclusão em futuras atualizações.

## Verificação
- Conferir que não restam referências ao médico nos textos, dados, descrições de imagens ou informações de compartilhamento do site.
- Abrir **Sobre nós** no computador e no celular e confirmar os 10 cartões restantes, sem espaços vazios ou fotos quebradas.
- Confirmar que `/equipe` continua levando a **Sobre nós** e que os endereços das fotos removidas não entregam mais essas imagens.

## Detalhes técnicos
- A busca confirmou uma única referência ativa ao médico: o objeto em `src/routes/a-clinica.tsx`.
- Remover `public/media/equipe/tiago.webp` e `public/media/medico-marcelo.webp`; as duas imagens foram conferidas visualmente.
- Não alterar planos antigos arquivados: são registros internos e não aparecem no site.
- A atualização do endereço público exige publicação após a remoção.