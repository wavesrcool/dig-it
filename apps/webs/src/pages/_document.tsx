/* eslint-disable @next/next/no-css-tags */

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

const TMP_DESCRIPTION = `Get help digging up your lawn to turn it into a vegetable garden!`;

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
          <link href={"https://www.dig-it.earth/"} rel={"canonical"} />

          <meta property={"title"} content={"Dig It!"} />
          <meta content={TMP_DESCRIPTION} name={"description"} />
          <meta property={"author"} content={"Tyson Lupul"} />
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
