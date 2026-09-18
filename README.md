# DeVitrê PRO — protótipo pronto para GitHub Pages

Versão ampliada do protótipo DeVitrê. Não usa backend: os dados demonstrativos ficam no `localStorage` do navegador.

## Contas de demonstração
- Cliente: `julia@devitre.com` / `123456`
- Loja: `charlotts@devitre.com` / `123456`

## Principais recursos
- Novo visual editorial e responsivo, tema claro/escuro.
- Catálogo com busca, categoria, tamanho, cor, preço, estoque e ordenação.
- Lojas com avaliação, status aberto/fechado, seguir loja e compartilhamento.
- Favoritos, vistos recentemente e sacola de reserva.
- Reserva por 24h, pagamento simulado de 50%, cupom VITRE10 e código de retirada.
- Linha do tempo da reserva: reservada → sinal pago → pronta → retirada.
- Mensagens entre cliente e loja no protótipo.
- Central de notificações.
- Perfil editável, pontos DeVitrê e preferências.
- Avaliação da compra depois da retirada.
- Painel da loja com métricas, cadastro de peças com foto, estoque, alertas de estoque baixo, reservas, status de retirada, configurações e resumo de pedidos.
- Exportação dos dados demonstrativos em JSON.
- PWA básica: manifest + service worker para o shell do aplicativo.
- Migração automática dos dados da versão anterior (`devitre_demo_state_v3`) quando possível.

## Hospedar no GitHub Pages
Envie **todo o conteúdo desta pasta** para a raiz do repositório e configure:

`Settings → Pages → Deploy from a branch → main → /(root)`

## Importante
Pagamento, login, mensagens sincronizadas e estoque multi-dispositivo são simulações locais. Para uso comercial real, será necessário backend, autenticação, banco de dados, armazenamento de imagens e gateway de pagamento.
