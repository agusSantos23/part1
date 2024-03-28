import { useState } from 'react'

const Button = ({text, activated}) => {
  
  return(
    <button onClick={() => activated(text)}>{text}</button>
  )
}
const Buttons = ({activated}) => {
  return(
    <>
      <Button text = {"good"} activated = {activated}/>
      <Button text = {"neutral"} activated = {activated}/>
      <Button text = {"bad"} activated = {activated}/>
    </>
  )
}

const StaticLine = ({text,value}) =>{

  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

}

const Display = ({results}) => {
  const [good, neutral, bad] = results

  const all = good + neutral + bad

  if(all == 0){
    return(
      <>
        <h3>No feedback give</h3>
      </>
    )
  }
  const average = all / 3
  const positive = (good * 100) / all

  return(
    <table>
      <tbody>

        <StaticLine text={"Good"} value={good} />
        <StaticLine text={"Neutral"} value={neutral} />
        <StaticLine text={"Bad"} value={bad} />

        <StaticLine text={"All"} value={all} />
        <StaticLine text={"Average"} value={average} />
        <StaticLine text={"Positive"} value={positive} />

      </tbody>


    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const activated = (action) =>{
    switch (action){
      case "good":
        setGood(good +1)
        break

      case "neutral":
        setNeutral(neutral +1)
        break

      case "bad":
        setBad(bad +1)
        break

    }
  }
  return (
    <>
      <h2>Give feedback</h2>

      <Buttons activated={activated}/>

      <h2>Statistics</h2>

      <Display results = {[good, neutral, bad]}/>
    </>
  )
}


export default App