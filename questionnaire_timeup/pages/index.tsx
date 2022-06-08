import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Questionnaire</title>
        <meta name="description" content="Questions with Time up" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Questionnaire Time Up
        </h1>

        <Link href="/questionnaire">
          <a className={styles.card}>
            <h2>Start!</h2>
          </a>
        </Link>
        
      </main>
    </div>
  )
}

export default Home
