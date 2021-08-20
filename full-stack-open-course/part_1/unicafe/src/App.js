import React, { useState } from 'react'

const Header = ({title}) => <h1>{ title }</h1>;
const Button = ({title, clickHandler}) => <button onClick={ clickHandler }>{ title }</button>
const Statistics = ({title, total}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{width:100}}>{title}</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  )
}



  const History = ({clicks, averageClicks, total,  average, positives}) => {
    if (averageClicks?.length > 0) {
      return (
        <div>
          <Statistics title='Good' total={clicks.good}></Statistics>
          <Statistics title='Neutral' total={clicks.neutral}></Statistics>
          <Statistics title='Bad' total={clicks.bad}></Statistics>
          <Statistics title='All' total={total}></Statistics> 
          <Statistics title='Average' total={average}></Statistics>
          <Statistics title='Positive' total={positives + ' %'}>%</Statistics> 
        </div>
      )
    } else {
      return <p>No feedback given</p>
    }
  }


const App = () => {

  const [clicks, setClicks] = useState({good: 0,neutral: 0,bad: 0})
  const [averageClicks, setAverageClicks] = useState([])

  const increaseGood = () => {
    const newClicks = {...clicks, good: clicks.good + 1}
    setAverageClicks(averageClicks.concat(1));
    setClicks(newClicks);
  }
  const increaseNeutral = () => {
    const newClicks = {...clicks, neutral: clicks.neutral + 1}
    setAverageClicks(averageClicks.concat(0));
    setClicks(newClicks)
  }
  const increaseBad = () => {
    const newClicks = {...clicks, bad: clicks.bad + 1}
    setAverageClicks(averageClicks.concat(-1));
    setClicks(newClicks)
  }

  const total = clicks.good + clicks.neutral + clicks.bad

  const average = () =>  {
    let totalAverage = 0;
    averageClicks.forEach((n) => totalAverage += n)
    return (averageClicks.length !== 0) ? (totalAverage)/averageClicks.length : 0;
  }

  const positives = () => ((clicks.good + clicks.neutral + clicks.bad) > 0) ? (clicks.good/(clicks.good + clicks.neutral + clicks.bad))*100 : 0;
  

  return (
    
    <div>
      <Header title='Give Feedback'/>
      <Button title='Good' clickHandler={increaseGood}></Button>
      <Button title='Neutral' clickHandler={increaseNeutral}></Button>
      <Button title='Bad' clickHandler={increaseBad}></Button>
      <Header title='Statistics'/>
      <History clicks={clicks} averageClicks={averageClicks} total={total} average={average()} positives={positives()}></History>
      
    </div>
  )
}

export default App
