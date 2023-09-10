import store from '@/redux/config/configStore'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import '@/styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default App;