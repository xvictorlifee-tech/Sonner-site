# Sonner — Website institucional

Site oficial da Sonner — Agência Criativa ([agenciasonner.com.br](https://agenciasonner.com.br)).

Feito com [Astro](https://astro.build) e [Tailwind CSS](https://tailwindcss.com), 100% estático, pronto para o Cloudflare Pages.

## Rodar localmente

Requer Node.js 22.23.4 ou mais recente.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site em dist/
npm run preview  # serve o build localmente
```

## Onde editar o conteúdo

| O que | Arquivo |
|---|---|
| WhatsApp, e-mail, redes sociais, mensagem padrão | `src/data/site.ts` |
| Serviços (Home e página Soluções) | `src/data/services.ts` |
| Metodologia, diferenciais e FAQ | `src/data/home.ts` |
| Cores e tipografia | `src/styles/global.css` |
| Logotipos e onda (arquivos oficiais) | `src/assets/brand/` |

Campos de contato vazios (ex.: uma rede social sem URL) ficam escondidos no site.

## Identidade visual

O site segue o Manual de Identidade Visual v1.0:

- Apenas as cores oficiais: Amarelo `#FFCE00`, Preto `#1C1904`, Verde Noite `#162113`, Ouro `#C6A000` e Branco.
- Poppins 400, 500 e 600, hospedada no próprio site.
- Logotipos usados a partir dos arquivos oficiais, sem redesenho. A cor muda só entre as aplicações aprovadas.
- A onda aparece sempre em Ouro sobre Amarelo, nunca sob ou sobre textos.

## Publicação no Cloudflare Pages

O site é 100% estático: não precisa de servidor, banco de dados nem variáveis secretas.

### 1. Criar o projeto

1. No painel da Cloudflare, abra **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Autorize o GitHub e escolha o repositório `sonner-site`.
3. Configure o build:

| Campo | Valor |
|---|---|
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Variável de ambiente | `NODE_VERSION` = `22.23.4` |

4. Clique em **Save and Deploy**. Cada push na `main` publica o site, e cada pull request ganha um link de prévia.

### 2. Conectar o domínio

1. No projeto, abra **Custom domains** → **Set up a custom domain** e adicione `agenciasonner.com.br`.
2. Repita para `www.agenciasonner.com.br`.
3. Se o domínio já usa os nameservers da Cloudflare, os registros DNS são criados automaticamente. Caso contrário, siga as instruções da tela para criar o registro CNAME no provedor do domínio (ex.: Registro.br).
4. O HTTPS é emitido automaticamente pela Cloudflare em poucos minutos.
5. Para mandar `www` para o domínio principal, crie uma **Redirect Rule** em **Rules** → **Redirect Rules**: quando o hostname for `www.agenciasonner.com.br`, redirecionar (301) para `https://agenciasonner.com.br` mantendo o caminho.

### 3. Depois de publicar

- Envie o sitemap (`https://agenciasonner.com.br/sitemap-index.xml`) no [Google Search Console](https://search.google.com/search-console).
- Opcional: ative o **Web Analytics** da Cloudflare (gratuito e sem cookies) em **Analytics & Logs** → **Web Analytics**.

### O que já vem configurado

- `public/_headers`: cabeçalhos de segurança e cache longo para os arquivos com hash.
- `public/robots.txt` e sitemap gerado no build.
- Página 404 personalizada (`src/pages/404.astro`), servida automaticamente pelo Cloudflare Pages.
- GitHub Actions (`.github/workflows/build.yml`): roda o build em cada pull request para pegar erros antes do deploy.
