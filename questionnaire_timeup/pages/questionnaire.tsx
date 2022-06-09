import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import PageWithJsbasedForm from './js-form'
import styles from '../styles/Home.module.css'
import pretestjson from '../data/pretest.json'
import posttestjson from '../data/posttest.json'

type Questions = {
  questions: Question[]
}

type Question = {
  id: number
  jp: string
  question: string
}

const Questionnaire: NextPage<Questions> = ({ questions } : Questions) => {

  const router = useRouter()
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(Date.now())

  const nextQuestion = () => {
    const time: number = Date.now() - timer

    if ((count+1) < questions.length) {
      setCount(count+1);
    } else {
      router.push('/')
    }
    setTimer(Date.now())

    return time
  }

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <p> Q.{questions[count].id} </p>
        <p> {questions[count].jp} </p>
        <p> {questions[count].question.replace(/\s/g, '\u00A0')} </p>
        <PageWithJsbasedForm 
          id={questions[count].id} 
          onSubmitForm={nextQuestion} />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const questions = posttestjson
  return { props: { questions } }
}

export default Questionnaire