import { useEffect, useState } from "react"
import { expenseService } from "../services/expense.service"
import { ExpenseList } from "../cmps/ExpenseList"

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

    if(!expenses.length) return <div>Loading...</div>
    return <section className="expense-index">
        <ExpenseList expenses={expenses}/>
    </section>
}