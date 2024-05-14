import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { ExpenseIndex } from './pages/ExpenseIndex'
import { ExpenseEdit } from './pages/ExpenseEdit'
import { AppHeader } from './cmps/AppHeader'
import { Dashboard } from './pages/Dashboard'

import { userService } from './services/user.service'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getLoggedInUser()
}, [])

async function getLoggedInUser() {
    try {
        const user = await userService.getLoggedInUser()
        setUser(user)
    } catch (err) {
        console.log('Failed to get logged in user:', err)
    }
}

  function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}
  return (
    <Router>
      <main>
      <div className="backdrop" onClick={onToggleMenu}></div>

      <AppHeader onToggleMenu={onToggleMenu}/>
        <Routes>
          <Route element={<ExpenseIndex user={user} setUser={setUser}/>} path="/" />
          <Route element={<ExpenseEdit />} path="/expense/edit" />
          <Route element={<ExpenseEdit />} path="/expense/edit/:expenseId" />
          <Route element={<Dashboard user={user} setUser={setUser}/>} path="/dashboard" />
        </Routes>
      </main>
    </Router>
  )
}

export default App
