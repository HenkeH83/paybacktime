import { useState } from 'react'
import StateHandler from './statehandler'
import './card.css'

export default function Card ({expense, remove, setState, id}) {
  const [isOpen, setIsOpen] = useState(false)
  const { userName, description, sum, date, state, image:{url, altTag}} = expense
 
  function removeexpense(event) {
    event.preventDefault();
    remove(id)
  }

  return (
    <div
      key={id}
      id='card'
      className={isOpen ?
        'flex-column align-center justify-around p2 mb2' :
        'flex-row align-center justify-around p2 mb2'}
    >
      <button 
        className={isOpen ? 'isOpen' : ''} 
        id='toggleBtn' 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'close' : 'open'}
      </button>
      <p>Användarnamn: {userName}</p>
      {isOpen &&
      <p>Beskrivning: {description}</p>
      }
      <p>Summa: {sum}</p>
      <p>Datum: {date}</p>  
      {isOpen && 
        <>
          <StateHandler id={id} state={state} setState={setState} />
          <img 
            className='mb2'
            src={url}
            alt={altTag}
          /> 
          <button onClick={(event) => removeexpense(event)}>
            Ta bort utlägg
          </button>
        </>
      }
    </div>
  )
}
