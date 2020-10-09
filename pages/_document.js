import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            href="/Montserrat-Bold.ttf"
            as="font"
            type="font/ttf"
          />
          <link
            rel="preload"
            href="/Montserrat-Regular.ttf"
            as="font"
            type="font/ttf"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
