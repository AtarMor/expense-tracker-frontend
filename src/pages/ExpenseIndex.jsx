import { useEffect, useState } from "react"
import { expenseService } from "../services/expense.service"
import { ExpenseList } from "../cmps/ExpenseList"
import { Link } from "react-router-dom"

export function ExpenseIndex() {
    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        loadExpenses()
    }, [])

    async function loadExpenses() {
        try {
            const expenses = await expenseService.query()
            setExpenses(expenses)
        } catch (err) {
            console.log('Cannot load expenses', err) // Add user msg
        }
    }

    async function onRemoveExpense(expenseId) {
        try {
            await expenseService.remove(expenseId)
            setExpenses(prevExpenses => 
                prevExpenses.filter(e => e._id !== expenseId))
                console.log('Expense was removed') // Change to user msg
        } catch(err) {
            console.log('Had trouble removing the expense') //userMsg
        }
    }

    if(!expenses.length) return <div>Loading...</div>
    return <section className="expense-index main-layout">
        <Link to={'/expense/edit/'}><button className="add-btn solid plus">Add</button></Link>
        <div>filter</div>
        <div>navbar</div>
        <ExpenseList expenses={expenses} onRemoveExpense={onRemoveExpense}/>
    </section>
}