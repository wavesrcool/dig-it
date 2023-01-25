/* eslint-disable @next/next/no-css-tags */

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

const DESCRIPTION = `Get help digging up your lawn to turn it into a vegetable garden!`;

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection webs document
 * @notes [ ]
 *
 */
class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link href={"https://dig-it.earth/"} rel={"canonical"} />
          <meta property={"title"} content={"Dig It!"} />
          <meta name={"description"} content={DESCRIPTION} />
          <meta property={"author"} content={"Tyson Lupul"} />
          <meta
            property={"og:image"}
            content={"https://open.dig-it.earth/images/logo.png"}
          />
          <meta property={"og:url"} content={"https://dig-it.earth/"} />
          <meta property={"og:site_name"} content={"dig-it.earth"} />
          <meta property={"og:title"} content={"Dig It!"} />
          <meta property={"og:description"} content={DESCRIPTION} />
          <meta name={"twitter:title"} content={"Dig It!"} />
          <meta
            name={"twitter:image"}
            content={"https://open.dig-it.earth/images/logo.png"}
          />
          <meta name={"twitter:card"} content={"summary_large_image"} />
          <meta name={"twitter:site"} content={"Dig It!"} />
          <meta name={"twitter:creator"} content={"Dig It!"} />

          <link
            rel={"apple-touch-icon"}
            sizes={"57x57"}
            href={"images/favicon/apple-icon-57x57.png"}
          />
          <link
            rel={"apple-touch-icon"}
            sizes={"60x60"}
            href={"images/favicon/apple-icon-60x60.png"}
          />
          <link
            rel={"apple-touch-icon"}
            sizes={"72x72"}
            href={"images/favicon/apple-icon-72x72.png"}
          />
          <link
            rel={"apple-touch-icon"}
            sizes={"76x76"}
            href={"images/favicon/apple-icon-76x76.png"}
          />
          <link
            rel={"apple-touch-icon"}
            sizes={"114x114"}
            href={"images/favicon/apple-icon-114x114.png"}
          />
          <link
            rel={"apple-touch-icon"}
            sizes={"120x120"}
            href={"images/favicon/apple-icon-120x120.png"}
          />
          <link
            rel={"apple-touch-icon"}
            sizes={"144x144"}
            href={"images/favicon/apple-icon-144x144.png"}
          />
          <link
            rel={"apple-touch-icon"}
            sizes={"152x152"}
            href={"images/favicon/apple-icon-152x152.png"}
          />
          <link
            rel={"apple-touch-icon"}
            sizes={"180x180"}
            href={"images/favicon/apple-icon-180x180.png"}
          />
          <link
            rel={"icon"}
            type={"image/png"}
            sizes={"192x192"}
            href={"images/favicon/android-icon-192x192.png"}
          />
          <link
            rel={"icon"}
            type={"image/png"}
            sizes={"32x32"}
            href={"images/favicon/favicon-32x32.png"}
          />
          <link
            rel={"icon"}
            type={"image/png"}
            sizes={"96x96"}
            href={"images/favicon/favicon-96x96.png"}
          />
          <link
            rel={"icon"}
            type={"image/png"}
            sizes={"16x16"}
            href={"images/favicon/favicon-16x16.png"}
          />
          <link rel={"manifest"} href={"images/favicon/manifest.json"} />
          <meta name={"msapplication-TileColor"} content={"#ffffff"} />
          <meta
            name={"msapplication-TileImage"}
            content={"/ms-icon-144x144.png"}
          />
          <meta name={"theme-color"} content={"#ffffff"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
