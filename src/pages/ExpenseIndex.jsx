import { useEffect, useState } from "react"
import { expenseService } from "../services/expense.service"
import { ExpenseList } from "../cmps/ExpenseList"
import { Link } from "react-router-dom"
import { ExpenseFilter } from "../cmps/ExpenseFilter"
import { SideBar } from "../cmps/SideBar"

export function ExpenseIndex() {
    const [expenses, setExpenses] = useState([])
    const [filterBy, setFilterBy] = useState(expenseService.getDefaultFilter())
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadExpenses()
    }, [filterBy])

    async function loadExpenses() {
        try {
            const expenses = await expenseService.query(filterBy)
            setExpenses(expenses)
        } catch (err) {
            console.log('Cannot load expenses', err) // Add user msg
        } finally {
            setIsLoading(false)
        }
    }

    async function onRemoveExpense(expenseId) {
        try {
            await expenseService.remove(expenseId)
            setExpenses(prevExpenses =>
                prevExpenses.filter(e => e._id !== expenseId))
            console.log('Expense was removed') // Change to user msg
        } catch (err) {
            console.log('Had trouble removing the expense') //userMsg
        }
    }

    return <section className="expense-index main-layout">

        <Link to={'/expense/edit/'}><button className="add-btn solid plus">Add</button></Link>
        <ExpenseFilter filterBy={filterBy} setFilterBy={setFilterBy} />
        <SideBar />
        <ExpenseList
            expenses={expenses}
            onRemoveExpense={onRemoveExpense}
            isLoading={isLoading}
        />
    </section>
}