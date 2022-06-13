import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'

import styles from '../styles/Home.module.css'
import { getAllQuestionIds } from '../lib/questions'

const Home: NextPage = ({ allQuestionIds }: any) => {

  const [questionId, setQuestionId] = useState(allQuestionIds[0].params.id)


  const handleChangeSelector = (event: any) => {
    setQuestionId(event.target.value)
  }

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

        <p className={styles.description}>
          英文法テスト 全20問 <br />
          空欄を埋める英文法テストです。<br />
          空欄には単語が<b>複数</b>入ることがあるので注意してください。<br />
          「Start!」ボタンを押すとすぐに開始します。
        </p>

        <select value={questionId} onChange={handleChangeSelector}>
          {allQuestionIds.map(({ params }: any) => (
            <option value={params.id} key={params.id}>
              { params.id }
            </option>
          ))}
        </select>

        <Link href={`questionnaire/${questionId}`}>
          <a className={styles.card}>
            <h2>Start!</h2>
          </a>
        </Link>
        
      </main>
    </div>
  )
}



export const getStaticProps: GetStaticProps = async () => {
  const allQuestionIds = getAllQuestionIds()
  return {
    props: { allQuestionIds }
  }
}

export default Home
