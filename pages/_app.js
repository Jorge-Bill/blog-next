import App from 'next/app'

import '@styles/globals.css'
import "../styles/style.css"
import { createContext } from "react"
import { fetchAPI } from "@lib/api"

export const GlobalContext = createContext({})
function Application({ Component, pageProps }) {
  const { global } = pageProps

  return <>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
}

Application.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const global = await fetchAPI("/global")

  return { ...appProps, pageProps: { global } }
}


export default Application
