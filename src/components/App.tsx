import React from 'react'
import { Machine } from 'xstate'
import { useMachine } from '@xstate/react'

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'red',
  states: {
    red: {
      on: { TOGGLE: 'green' }
    },
    green: {
      on: { TOGGLE: 'red' }
    }
  }
})

function App() {
  const [current, send] = useMachine(toggleMachine)

  console.log(current.value)

  return (
    <div>
      <div
        className={`${(current.value.match('red') && 'bg-red-500') ||
          (current.value.match('green') && 'bg-green-500')} h-32 w-32`}
      ></div>
      <button
        className="border border-dashed border-black mt-2 ml-2"
        onClick={() => send('TOGGLE')}
      >
        toggle red/green
      </button>
    </div>
  )
}

export default App
