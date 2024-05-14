import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ExpenseIndex } from './pages/ExpenseIndex'
import { ExpenseEdit } from './pages/ExpenseEdit'
import { AppHeader } from './cmps/AppHeader'
import { Dashboard } from './pages/Dashboard'

function App() {
  function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}
  return (
    <Router>
      <main>
      <div className="backdrop" onClick={onToggleMenu}></div>

      <AppHeader onToggleMenu={onToggleMenu}/>
        <Routes>
          <Route element={<ExpenseIndex />} path="/" />
          <Route element={<ExpenseEdit />} path="/expense/edit" />
          <Route element={<ExpenseEdit />} path="/expense/edit/:expenseId" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </main>
    </Router>
  )
}

export default App
