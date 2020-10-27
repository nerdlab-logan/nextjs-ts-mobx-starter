import '@style/tailwind.css'
import React from 'react'
import NextApp, { AppInitialProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'

class App extends NextApp<AppInitialProps> {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    )
  }
}

export default App
