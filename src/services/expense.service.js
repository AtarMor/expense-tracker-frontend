import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"

const EXPENSES_KEY = 'expensesDB'
_createExpenses()

export const expenseService = {
    query,
    getById,
    remove,
    save,
    getEmptyExpense,
    getExpenseCategories,
    getDefaultFilter
}

async function query(filterBy = {}) {
    try {
        let expenses = await storageService.query(EXPENSES_KEY)
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            expenses = expenses.filter(e => regex.test(e.category) || regex.test(e.description))
        }
        if (filterBy.category) {
            expenses = expenses.filter(e => e.category === filterBy.category)
        }
        if (filterBy.startDate) {
            expenses = expenses.filter(e => e.date >= filterBy.startDate)
        }
        return expenses
    } catch (err) {
        console.log('Had issues getting expenses', err)
    }
}

function getById(expenseId) {
    return storageService.get(EXPENSES_KEY, expenseId)
}

function remove(expenseId) {
    return storageService.remove(EXPENSES_KEY, expenseId)
}

function save(expense) {
    if (expense._id) {
        return storageService.put(EXPENSES_KEY, expense)
    } else {
        return storageService.post(EXPENSES_KEY, expense)
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

function _createExpenses() {
    const expenses = [
        {
            _id: 'e101',
            amount: 50.00,
            category: 'Food',
            date: '2024-05-13',
            description: 'Lunch with friends'
        },
        {
            _id: 'e102',
            amount: 25.00,
            category: 'Transportation',
            date: '2024-05-12',
            description: 'Taxi fare'
        },
        {
            _id: 'e103',
            amount: 100.00,
            category: 'Entertainment',
            date: '2024-05-11',
            description: 'Concert tickets'
        },
        {
            _id: 'e104',
            amount: 35.00,
            category: 'Shopping',
            date: '2024-05-10',
            description: 'New shoes'
        },
        {
            _id: 'e105',
            amount: 75.00,
            category: 'Utilities',
            date: '2024-05-09',
            description: 'Electricity bill'
        }
    ]
    utilService.saveToStorage(EXPENSES_KEY, expenses)
}