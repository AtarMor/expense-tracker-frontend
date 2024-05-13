import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"

const EXPENSES_KEY = 'expensesDB'
_createExpenses()

export const expenseService = {
    query
}

async function query() {
    try {
        const expenses = await storageService.query(EXPENSES_KEY)
        return expenses
    } catch (err) {
        console.log('Had issues getting expenses', err)
    }
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