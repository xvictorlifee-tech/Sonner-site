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

Campos marcados com `[PREENCHER]` ainda não foram fornecidos e ficam escondidos enquanto estiverem vazios. Itens com `[VALIDAR]` foram redigidos e aguardam a confirmação da Sonner.

## Identidade visual

O site segue o Manual de Identidade Visual v1.0:

- Apenas as cores oficiais: Amarelo `#FFCE00`, Preto `#1C1904`, Verde Noite `#162113`, Ouro `#C6A000` e Branco.
- Poppins 400, 500 e 600, hospedada no próprio site.
- Logotipos usados a partir dos arquivos oficiais, sem redesenho. A cor muda só entre as aplicações aprovadas.
- A onda aparece sempre em Ouro sobre Amarelo, nunca sob ou sobre textos.
