import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Pycup</title>
        <meta name="description" content="Py Cup sitio web oficial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </MainLayout>
  );
}
