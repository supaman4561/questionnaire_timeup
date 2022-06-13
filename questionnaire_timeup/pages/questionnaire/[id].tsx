import { GetStaticProps, GetStaticPaths } from 'next'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { getAllQuestionIds, getQuestionData } from '../../lib/questions'
import PageWithJsbasedForm from '../js-form'
import styles from '../../styles/Home.module.css'

type Questions = {
  questions: Question[]
}

type Question = {
  id: number
  jp: string
  question: string
}

const Questionnaire: NextPage<Questions> = ({ questionData } : any) => {

  const router = useRouter()
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(Date.now())
  const userId = router.query.userid

  const nextQuestion = () => {
    const time: number = Date.now() - timer

    if ((count+1) < questionData.questions.length) {
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
        <p> Q.{questionData.questions[count].id} </p>
        <p> {questionData.questions[count].jp} </p>
        <p> {questionData.questions[count].question.replace(/\s/g, '\u00A0')} </p>
        <PageWithJsbasedForm 
          params={{
            userid: userId,
            setid: questionData.id,
            qid: questionData.questions[count].id,
          }} 
          onSubmitForm={nextQuestion} />
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllQuestionIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const questionId = params.id
  const questionData = {
    id: questionId,
    questions: getQuestionData(questionId).jsonObject
  }
  return { props: { questionData } }
}

export default Questionnaire