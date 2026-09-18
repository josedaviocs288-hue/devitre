# DeVitrê — Demo funcional para GitHub Pages

Versão estática pronta para apresentação sem Supabase ou backend.

## Funciona no navegador
- cadastro de cliente e loja
- login e logout
- manter sessão
- redefinição local de senha
- contas demo
- perfil, favoritos, sacola e reservas
- pagamento de 50% simulado
- mensagens simuladas
- painel de loja, estoque e cadastro de produtos com foto
- PWA básica e tema claro/escuro

Os dados são salvos em `localStorage`/`sessionStorage`, portanto funcionam somente no navegador/dispositivo em que foram criados. Não use senhas reais. Para produção, autenticação, banco, chat e pagamentos precisam de backend.

## Contas demo
Cliente: `julia@devitre.com` / `123456`
Loja: `charlotts@devitre.com` / `123456`

## Atualização do catálogo
Esta versão revisa os nomes, categorias, tamanhos e descrições das peças para combinar melhor com as imagens exibidas. A atualização também migra automaticamente os produtos de demonstração já salvos no navegador, preservando estoque e dados personalizados.
