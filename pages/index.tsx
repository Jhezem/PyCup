import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pycup</title>
        <meta name="description" content="Py Cup sitio web oficial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

    </div>
  )
}
