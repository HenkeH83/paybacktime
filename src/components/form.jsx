import { states } from './statehandler';
import './form.css';

export default function Form({addExpense}) {

  function handleSubmit (event) {
    event.preventDefault()

    const id = Math.floor(Math.random() * 90000 + 10000)
    const name = event.target.name.value
    const description = event.target.description.value
    const sum = event.target.sum.value
    const date = event.target.date.value

    const newExpense = {
      id: id, 
      userName: name,
      description: description, 
      sum: sum, 
      date: date, 
      state: states.inProgress,
      image: {
        url: 'src/assets/react.svg',
        altTag: 'React loggan' 
      } 
    }
    addExpense(newExpense)
  }

  return (
    <div id='form' className='flex-column align-center p2 m2'>
      <p>Nytt utlägg</p>
      
      <form className='flex-column p2 m2' onSubmit={handleSubmit} >
        <div className='flex-column'>
          <label htmlFor='name'>Namn:</label>
          <input type='text' id='name' name='name' />
        </div>
        <div className='flex-column'>
          <label htmlFor='desctiption'>Beskrivning:</label>
          <input type='text' id='discription' name='description' />
        </div>
        <div className='flex-column'>
          <label htmlFor='sum'>Summa:</label>
          <input type='number' id='sum' name='sum' />
        </div>
        <div className='flex-column'>
          <label htmlFor='date'>Datum:</label>
          <input type='date' id='date' name='date' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
