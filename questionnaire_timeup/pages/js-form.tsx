import { useState, useRef, useEffect } from "react"
import style from "../styles/Home.module.css"
import Timer from "./timer"

const PageWithJsbasedForm = ({ id, onSubmitForm }: any) => {

  const maxSec = 20
  const [answer, setAnswer] = useState("")
  const [sec, setSec] = useState(maxSec)
  const btn = useRef<HTMLButtonElement>(null)

  
  useEffect(() => {
    const id = setInterval(() => {
      if (sec-1 > 0) {
        setSec(sec-1)
      } else {
        btn.current?.click()
        setSec(maxSec)
      }
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [sec])


  const submit = async () => {
    const time: number = onSubmitForm()

    // Get data from the form.
    const data = {
      id: id,
      answer: answer,
      time: time
    }

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send from data.
    const endpoint = '/api/form'
  
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    setAnswer('')
    setSec(maxSec)
    
    const result = await response.json()
    console.log(result)

  }

  // Handles the submit event on form submit.
  const handleSubmit = async (event: any) => {
    // Stop the form from sbmitting and refreshing the page.
    event.preventDefault()
    submit()
  }
  
  return (
    <div className={style.grid}>
      <div className={style.grid}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="answer">Answer: </label>
          <input type="text" id="answer" name="answer" value={answer} autoComplete='off'
            onChange={(e)=>{setAnswer(e.target.value)}}/>
          <button ref={btn} type="submit">回答</button>
        </form>
      </div>
      <div className={style.grid}>
        <Timer sec={sec} maxSec={maxSec}/>
      </div>
    </div>
  )
}

export default PageWithJsbasedForm