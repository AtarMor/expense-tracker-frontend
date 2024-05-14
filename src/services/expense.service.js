import { httpService } from "./http.service"

export const expenseService = {
    query,
    getById,
    remove,
    save,
    getEmptyExpense,
    getExpenseCategories,
    getDefaultFilter
}

function query(filterBy) {
    return httpService.get('expense', { ...filterBy})
}

function getById(expenseId) {
    return httpService.get(`expense/${expenseId}`)
}

function remove(expenseId) {
    return httpService.delete(`expense/${expenseId}`)
}

function save(expense) {
    if (expense._id) {
        return httpService.put(`expense/${expense._id}`, expense)
    } else {
        return httpService.post('expense', expense)
    }
}

function getEmptyExpense() {
    return {
        amount: 0,
        category: '',
        date: '',
        description: ''
    }
}

function getDefaultFilter() {
    return { txt: '', category: '', startDate: '', endDate: '' }
}

function getExpenseCategories() {
    return [
        "Food",
        "Utilities",
        "Transportation",
        "Entertainment",
        "Clothing",
        "Healthcare",
        "Rent/Mortgage",
        "Insurance",
        "Education",
        "Shopping"
    ]
}