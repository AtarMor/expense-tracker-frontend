import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ExpenseIndex } from './pages/ExpenseIndex'
import { ExpenseEdit } from './pages/ExpenseEdit'

function App() {
  return (
    <Router>
      <h1>Expense Tracker</h1>
      <main>
        <Routes>
          <Route element={<ExpenseIndex />} path="/" />
          <Route element={<ExpenseEdit />} path="/expense/edit" />
          <Route element={<ExpenseEdit />} path="/expense/edit/:expenseId" />
        </Routes>
      </main>
    </Router>
  )
}

export default App
