import '@style/tailwind.css'
import React from 'react'
import NextApp, { AppInitialProps } from 'next/app'

class App extends NextApp<AppInitialProps> {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default App
