import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ExpenseIndex } from './pages/ExpenseIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Expense Tracker</h1>
      <ExpenseIndex/>
    </main>
  )
}

export default App
