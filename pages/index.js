import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PHOTO</title>
        <meta name="description" content="Private photo website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          MAIN
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          FOOTER
        </div>
      </footer>
    </div>
  )
}
