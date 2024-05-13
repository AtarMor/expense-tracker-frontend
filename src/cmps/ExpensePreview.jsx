import { Link } from "react-router-dom"

export function ExpensePreview({ expense, onRemoveExpense }) {
    return <article>
        <h3 className="expense-category">{expense.category}</h3>
        <h3 className="expense-date">{new Date(expense.date).toLocaleDateString('he-IL')}</h3>
        <h3 className="expense-description">{expense.description}</h3>
        <h3 className="expense-amount">${expense.amount}</h3>
        <div className="btn-container">
            <Link to={`/expense/edit/${expense._id}`}><button className="edit-btn solid pen"></button></Link>
            <button onClick={() => onRemoveExpense(expense._id)} className="remove-btn solid x"></button>
        </div>
    </article>
}