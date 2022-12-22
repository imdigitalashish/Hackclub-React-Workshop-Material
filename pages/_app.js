import AnimeProvider from '../providers/animeProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <AnimeProvider>
    <Component {...pageProps} />

  </AnimeProvider>;

}
