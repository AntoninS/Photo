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

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer+SC&display=swap" rel="stylesheet"/> 
      </Head>

      <main className={styles.main}>
        <Gallery theme="overview" />
      </main>
    </div>
  )
}
