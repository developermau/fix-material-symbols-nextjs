/*

Next.js Resources

- https://nextjs.org/docs/app/guides/migrating/app-router-migration
- [No Page Custom Font](https://nextjs.org/docs/messages/no-page-custom-font)
- [Custom fonts not added in `pages/_document.js` will only load for a single page. This is discouraged.](https://github.com/vercel/next.js/issues/80963)

Google Material Symbols & Icons

- [Google Material Symbols & Icons](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:home:FILL@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%23e3e3e3)

*/

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
