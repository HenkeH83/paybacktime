import './StateHandler.css'

export const states = {
  inProgress : {
    emoji: '🔄',
    text: 'InProgress', 
  },
  readyForApproval : {
    emoji: '☑️',
    text: 'ReadyForApproval',
  },
  approved : {
    emoji: '✅',
    text: 'Approved', 
  },
}

export default function StateHandler({id, setState}) {

  return(
    <select 
      key={id}
      className='mb2'
      onChange={(event) => setState(JSON.parse(event.target.value))}
    > 
      {Object.entries(states).map(([key, value]) => {
        return (
          <option key={key} value={JSON.stringify(value)}>{value.emoji} {value.text}</option>
        )
      })}
    </select>
  )
}
