import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'
// 服务端渲染才会执行
export default class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => (props) => sheet.collectStyles(<App {...props}/>),
        // enhanceComponent: Component => Component
      })

      const props = await Document.getInitialProps(ctx);

      return {
        ...props,
        styles: <>{props.styles}{sheet.getStyleElement()}</>
      }
    } finally {
      sheet.seal();
    }


  }

  render() {
    return (
      <Html>
      <Head>
        <style>
          {`.test{color: red}`}
        </style>
      </Head>
      <body className="test">
      <Main/>
      <NextScript/>
      </body>
      </Html>
    )
  }
}
