import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service"
import { expenseService } from "../services/expense.service"

export function ExpenseFilter({ filterBy, setFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    setFilterBy = useRef(utilService.debounce(setFilterBy, 300))
    const categories = expenseService.getExpenseCategories()

    useEffect(() => {
        setFilterBy.current(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    return (
        <section className="expense-filter">

            <fieldset>
                <legend>Filter By</legend>
                <div className="search-by-txt">
                <label className="search solid magnifying-glass"></label>
                <input
                    type="text"
                    name="txt"
                    placeholder="Search"
                    value={filterByToEdit.txt}
                    onChange={handleChange}
                    autoComplete="off"
                />
                </div>

                <label htmlFor="category">Category</label>
                <select
                    id="category"
                    name="category"
                    value={filterByToEdit.category}
                    onChange={handleChange}>
                    <option></option>
                    {categories.map(category => <option key={category}>{category}</option>)}
                </select>

                <label htmlFor="startDate">From</label>
                <input type="date"
                    name="startDate"
                    id="startDate"
                    value={filterByToEdit.startDate}
                    onChange={handleChange}
                />
            </fieldset>

        </section>
    )
}