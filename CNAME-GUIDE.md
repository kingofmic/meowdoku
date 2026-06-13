# meowdoku.xyz Cloudflare CNAME Guide

Use this when pointing `meowdoku.xyz` at the Cloudflare Pages project from your DNS provider.

## CNAME Record

If your DNS provider supports CNAME flattening, ALIAS, or ANAME at the apex/root domain, set:

- Type: `CNAME` / `ALIAS` / `ANAME`
- Name/Host: `@`
- Target/Value: `meowdoku-twp.pages.dev`

If your DNS provider does not support CNAME-style records at the apex/root domain, use `www` instead:

- Type: `CNAME`
- Name/Host: `www`
- Target/Value: `meowdoku-twp.pages.dev`

Current project:

- Pages project: `meowdoku`
- Pages subdomain: `meowdoku-twp.pages.dev`
- Pages custom domains: `www.meowdoku.xyz`, `meowdoku.xyz`
- Redirect: `meowdoku.xyz/*` -> `www.meowdoku.xyz/*`
