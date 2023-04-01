import { useState, useEffect } from 'react'
import Form from './components/form'
import Card from './components/card'
import './App.css'
import { mockdata } from './mockdata'

function App() {
  const [data, setData] = useState(mockdata)
  const [displayData, setDisplayData] = useState(mockdata)

  useEffect(() => {
    setDisplayData(data)
  },[data])

  function sortByDate(isChecked) {
    if(isChecked) {
      const copy = [...displayData]
      const sorted = copy.sort((a,b) => new Date(a.date) - new Date(b.date))
      setDisplayData(sorted)
    } else {
      setDisplayData(data)
    }
  }

  function addExpense(newExpense) {
    setData([newExpense, ...data]) 
  } 

  function removeExpense(id) {
    setData(data.filter(expense => expense.id !== id))
  }

  function setState(newState, id) {
    const newData = [...data]
    const index = data.findIndex(expense => expense.id === id)
    if(index === -1) {
      return
    }
    newData[index].state = newState
    setData(newData)
  }

  function filterOnName(event) {
    const input = event.target.value.toLowerCase()
    setDisplayData(data.filter(expense => expense.userName.substring(0, input.length).toLowerCase() === input))
  }
  
  return (
    <div className='App'>
      <Form addExpense={addExpense} />
      <div className='flex-row justify-around align-center mb2'>
        <label htmlFor='filter'>filtrera på namn</label> 
        <input 
          type='text' 
          id='filter'
          onChange={event => filterOnName(event)} 
        /> 
        <label htmlFor='sortDate'>Sortera på datum</label> 
        <input type='checkbox' id='sortDate' onChange={(event) => sortByDate(event.target.checked)} /> 
      </div>
      {displayData.map((expense)=> (
        <Card
          expense={expense}
          remove={removeExpense}
          setState={setState}
          id={expense.id}
          key={expense.id}
        />
      ))}
    </div>
  )
}

export default App
