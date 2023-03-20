import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div>
      <Link href="/">To home page</Link>
      <Link href="/test">To test page</Link>
    </div>
    <Component {...pageProps} />
  </>
}
