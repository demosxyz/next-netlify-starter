import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>One Piece API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="One Piece API" />
        <h2> Coming Soon! </h2>
        <h3> mrff@tuta.io </h3>
      </main>

      <Footer />
    </div>
  )
}
