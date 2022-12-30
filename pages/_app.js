import AnimeProvider from '../providers/animeProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  // TODO: Wrap Component with AnimeProvider.jsx
  return <AnimeProvider>
    <Component {...pageProps} />

  </AnimeProvider>



}
