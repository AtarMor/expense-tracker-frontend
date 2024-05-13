export function ExpensePreview ({expense}) {
    return <article>
        <h3 className="expense-category">{expense.category}</h3>
        <h3 className="expense-date">{new Date(expense.date).toLocaleDateString('he-IL')}</h3>
        <h3 className="expense-description">{expense.description}</h3>
        <h3 className="expense-amount">${expense.amount}</h3>
    </article>
}