import { ExpensePreview } from "./ExpensePreview"

export function ExpenseList({ expenses }) {
    return <ul className="expense-list clean-list">
        <li className="expense-titles">
            <h3>Category</h3>
            <h3>Date</h3>
            <h3>Description</h3>
            <h3>Amount</h3>
        </li>
        {expenses.map(expense => {
            return <li className="expense-preview" key={expense._id}>
                <ExpensePreview expense={expense} />
            </li>
        }
        )}
    </ul>
}