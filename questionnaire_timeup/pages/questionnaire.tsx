import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
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
  console.log(questions.questions[0])

  return (
    <main className={styles.main}>
      <p> {questions.questions[count].jp} </p>
      <p> {questions.questions[count].question} </p>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/questionnaire/pre')
  const questions = await res.json()
  return { props: { questions } }
}

export default Questionnaire