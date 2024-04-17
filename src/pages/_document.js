import Document, { Html, Head, Main, NextScript } from 'next/document'

/*
    The main use for this file is to load Google analytics
*/
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-N790JJJH7W
                        `}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-N790JJJH7W', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
    Doc() {
        return (
          <Html>
            <Head>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
}
export default MyDocument
