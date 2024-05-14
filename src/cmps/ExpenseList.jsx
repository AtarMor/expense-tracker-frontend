import { ExpensePreview } from "./ExpensePreview"

export function ExpenseList({ expenses, onRemoveExpense, isLoading }) {
    return <ul className="expense-list clean-list">
        <li className="expense-titles">
            <h3>Date</h3>
            <h3>Category</h3>
            <h3>Description</h3>
            <h3>Amount</h3>
        </li>
        {isLoading ? <span className="loader"></span> :
                (!expenses || !expenses.length ? (<p className="no-expenses-msg">No expenses to show.</p>) :
                expenses.map(expense => {
            return <li className="expense-preview" key={expense._id}>
                <ExpensePreview expense={expense} onRemoveExpense={onRemoveExpense}/>
            </li>
        })
        )}
    </ul>
}