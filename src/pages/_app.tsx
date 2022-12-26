import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Eduardo Pacheco</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#32322C" />
        <meta
          name="description"
          content="Website built to serve as a portfolio to the articles and projects written by Eduardo Pacheco Celeste"
        />
      </Head>
      <GlobalStyles />
      <NextNProgress
        color="#C5A7C5"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
