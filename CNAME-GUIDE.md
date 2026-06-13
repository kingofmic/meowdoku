# meowdoku.xyz Cloudflare CNAME Guide

Use this when connecting `meowdoku.xyz` to the Cloudflare Pages project.

1. In Cloudflare, open the `meowdoku.xyz` zone.
2. Add or confirm this DNS record:
   - Type: `CNAME`
   - Name: `@`
   - Target: `<your-cloudflare-pages-project>.pages.dev`
   - Proxy status: Proxied
3. In Cloudflare Pages, open the Meowdoku Pages project.
4. Go to `Custom domains` and add `meowdoku.xyz`.
5. Wait for Cloudflare to show the custom domain as active.

Cloudflare supports CNAME flattening at the apex, so `meowdoku.xyz` can point to a Pages `.pages.dev` hostname.
