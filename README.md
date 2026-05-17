# iFishing — site institucional

Site público do [iFishing](https://ifishing.com.br), o app que conecta pescadores a guias de pesca em todo o Brasil.

Construído com **Astro 4 + Tailwind CSS + TypeScript estrito**, hospedado em **GitHub Pages** com domínio custom `ifishing.com.br`.

## Stack

- [Astro 4](https://astro.build/) — gerador estático, zero JS por default
- [Tailwind CSS](https://tailwindcss.com/) — utility-first
- [TypeScript estrito](./tsconfig.json) — sem `any`
- `@astrojs/sitemap` — sitemap automático
- GitHub Actions — build e deploy a cada push em `main`

## Estrutura

```
src/
  components/   # SEO, Header, Footer, StoreBadges, OpenInApp
  layouts/      # BaseLayout, LegalLayout
  lib/          # site.ts (constantes da marca)
  pages/        # rotas: /, /como-funciona, /para-guias, /baixar, /contato, /termos, /privacidade, /guide/[id], /chat/[...slug], 404, 500
  styles/       # global.css com camadas Tailwind
public/
  .well-known/  # apple-app-site-association + assetlinks.json
  .nojekyll     # impede o Jekyll de ignorar arquivos .well-known
  CNAME         # ifishing.com.br
  favicon.svg
  robots.txt
```

## Dev local

```bash
npm install
npm run dev
# → http://localhost:4321
```

Outros scripts:

```bash
npm run build     # astro check + astro build → dist/
npm run preview   # serve dist/ localmente
npm run check     # só typecheck
```

## Deploy

Push em `main` → o workflow `.github/workflows/deploy.yml` faz build e publica via GitHub Pages.

### Setup inicial do repo no GitHub

1. Em **Settings → Pages**, escolher **Source: GitHub Actions**.
2. Adicionar `ifishing.com.br` em **Custom domain** (vai bater com o `public/CNAME`).
3. No DNS, criar registros:
   - `ifishing.com.br` → CNAME `ti-ifishing.github.io`
   - `www.ifishing.com.br` → CNAME `ti-ifishing.github.io`
4. Aguardar emissão do certificado HTTPS pelo GitHub (até 24h).

## Deep links (Universal Links / App Links)

O app abre URLs do tipo `/guide/{id}` e `/chat/{guideId}/{fishermanId}` direto via deep link. Pra isso funcionar:

- **iOS**: o arquivo [`public/.well-known/apple-app-site-association`](public/.well-known/apple-app-site-association) é servido sem extensão. Substituir `TEAMID` pelo Apple Team ID real antes do deploy de produção.
- **Android**: [`public/.well-known/assetlinks.json`](public/.well-known/assetlinks.json) precisa ter o SHA-256 fingerprint do certificado de assinatura.

Pra deep links que caem na web (usuário sem app), a página `404.astro` detecta o path `/guide/...` ou `/chat/...` e mostra um stub com "Abrir no app / Baixar".

## Brand

Cores no [`tailwind.config.mjs`](tailwind.config.mjs):

| Token | Hex |
|---|---|
| `brand` | `#18A348` |
| `brand-dark` | `#0F7A35` |
| `brand-light` | `#E8F7EE` |
| `ink` | `#0F172A` |
| `ink-muted` | `#64748B` |
| `surface` | `#F8FAFC` |
| `surface-border` | `#E2E8F0` |
| `danger` | `#DC2626` |
| `warning` | `#F59E0B` |
| `success` | `#10B981` |

Tipografia via Google Fonts (Inter + Manrope, display swap).

## Constantes da marca

Tudo que muda por ambiente (URLs de loja, CNPJ, endereço, email de suporte, handles de social) vive em [`src/lib/site.ts`](src/lib/site.ts). Edite só esse arquivo.

## Placeholders pendentes

- `TEAMID` no AASA
- SHA-256 fingerprint no `assetlinks.json`
- URLs reais da App Store / Play Store
- CNPJ, razão social, endereço
- Foto hero (substituir o placeholder na home)
- Screenshots do app em `/baixar`
- Formspree IDs (`PLACEHOLDER_FORMSPREE_ID`) ou trocar pra Supabase no `/para-guias` e `/contato`

## Padrão de código

- TS estrito, sem `any`
- `.astro` pra UI estática; `.tsx` só se precisar de ilha interativa
- Sem CSS modules ou styled-components — só Tailwind
- A11y: ARIA roles, contraste AA, navegação por teclado, skip link
- Lighthouse alvo: 95+ na home
