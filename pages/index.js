import Head from 'next/head'
import Gallery from '../components/gallery'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Antonin Spontak - Photographie</title>
        <meta name="description" content="Antonin Spontak - Photographie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          MAIN
        </div>

        <Gallery folder="../public/images/overview" />
      </main>
    </div>
  )
}
