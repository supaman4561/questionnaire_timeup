import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import PageWithJsbasedForm from './js-form'
import styles from '../styles/Home.module.css'

type Questions = {
  questions: Question[]
}

type Question = {
  id: number
  jp: string
  question: string
}

const Questionnaire: NextPage<Questions> = ({ questions } : Questions) => {

  let count = 0

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <p> Q.{questions[count].id} </p>
        <p> {questions[count].jp} </p>
        <p> {questions[count].question} </p>
        <PageWithJsbasedForm />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/questionnaire/pre')
  const questions = await res.json()
  return { props: { questions } }
}

export default Questionnaire