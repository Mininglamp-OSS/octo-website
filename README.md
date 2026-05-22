# octo-website

Official landing page for [Octo](https://github.com/Mininglamp-OSS) — the open-source AI-native team collaboration platform.

**Live design**: v10 Swiss International Style redesign.  
**Tagline**: *Agents Do, Humans Decide.*

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, fully static SSG — `output: 'export'`, outputs `out/`)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

```bash
nvm use        # uses Node 20 (see .nvmrc)
npm install
npm run dev    # http://localhost:3000
```

## Build

```bash
npm run build  # production build
npm run lint   # ESLint check
```

## Design System

| Token | Value |
|---|---|
| Background | `#F5F3EE` (warm cream) |
| IKB Blue | `#0000FF` |
| Safety Orange | `#FF4400` |
| Lemon Yellow | `#FFE600` |
| Display font | Bebas Neue |
| Serif accent | Playfair Display italic |
| Body font | Plus Jakarta Sans |

All copy and links are configured in [`src/config/site.ts`](src/config/site.ts).

## Contributing

Issues and PRs welcome. See [CONTRIBUTING.md](https://github.com/Mininglamp-OSS/.github/blob/main/CONTRIBUTING.md).

## License

[Apache 2.0](https://github.com/Mininglamp-OSS/octo-website/blob/main/LICENSE)
