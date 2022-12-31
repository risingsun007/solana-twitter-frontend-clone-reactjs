import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {

    render() {
        return (
            <Html translate="no">
                <Head>
                    {process.env.NEXT_PUBLIC_NODE_PRODUCTION && (
                        <link rel="preconnect" href={process.env.NEXT_PUBLIC_NODE_PRODUCTION} />
                    )}
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Web site created using create-react-app" />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                </Head>
                <body>
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTAG}`}
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                    <Main />
                    <NextScript />
                    <div id="portal-root" />
                </body>
            </Html>
        )
    }
}

export default MyDocument