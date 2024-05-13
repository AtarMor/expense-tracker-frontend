import { Link, useNavigate, useParams } from "react-router-dom"
import { expenseService } from "../services/expense.service"
import { useEffect, useState } from "react"

export function ExpenseEdit() {
    const navigate = useNavigate()
    const [expenseToEdit, setExpenseToEdit] = useState(expenseService.getEmptyExpense())
    const { expenseId } = useParams()
    let expenseCategories = expenseService.getExpenseCategories()

    useEffect(() => {
        if (expenseId) loadExpense()
        expenseCategories = expenseService.getExpenseCategories()
    }, [])

    async function loadExpense() {
        try {
            const expense = await expenseService.getById(expenseId)
            setExpenseToEdit(expense)
        } catch (err) {
            console.log('Had issues in expense edit', err)
            navigate('/')
        }
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setExpenseToEdit(prevExpense => ({ ...prevExpense, [field]: value }))
    }

    async function onSaveExpense(ev) {
        ev.preventDefault()
        try {
            await expenseService.save(expenseToEdit)
            console.log('Expense saved successfully')
            navigate('/')
        } catch (err) {
            console.log('Had issues saving expense', err)
        }
    }

    return (
        <section className="expense-edit">
            <h2>{expenseToEdit._id ? 'Edit' : 'Add'} Expense</h2>

            <form onSubmit={onSaveExpense} >
                <label htmlFor="date">Date</label>
                <input type="date"
                    name="date"
                    id="date"
                    value={expenseToEdit.date}
                    onChange={handleChange}
                />
                <label htmlFor="amount">Amount</label>
                <input type="number"
                    name="amount"
                    id="amount"
                    value={expenseToEdit.amount}
                    onChange={handleChange}
                />
                <label htmlFor="category">Category</label>
                <select id="category" name="category"
                    value={expenseToEdit.category}
                    onChange={handleChange}
                >
                    {expenseCategories.map(category =>
                        <option>{category}</option>
                    )}
                </select>
                <label htmlFor="description">Description</label>
                <input type="text"
                    name="description"
                    id="description"
                    value={expenseToEdit.description}
                    onChange={handleChange}
                />

                <div className="btn-container">
                    <button className="save-btn">{expenseToEdit._id ? 'Save' : 'Add'}</button>
                    <Link to="/"><button className="cancel-btn">Cancel</button></Link>
                </div>
            </form>
        </section>
    )
}