import { useState } from "react"

const PageWithJsbasedForm = () => {

  const [answer, setAnswer] = useState("")
  // Handles the submit event on form submit.
  const handleSubmit = async (event: any) => {
    // Stop the form from sbmitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      answer: event.target.answer.value,
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
    
    const result = await response.json()
    console.log(result)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="answer">Answer: </label>
      <input type="text" id="answer" name="answer" value={answer} 
        onChange={(e)=>{setAnswer(e.target.value)}}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default PageWithJsbasedForm