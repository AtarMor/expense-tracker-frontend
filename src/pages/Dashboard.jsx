import { useEffect, useState } from "react";

import { CategoriesChart } from "../cmps/CategoriesChart";
import { SideBar } from "../cmps/SideBar";

import { expenseService } from "../services/expense.service";
import { useNavigate } from "react-router-dom";

export function Dashboard({ user, setUser }) {
    const [expenses, setExpenses] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [totalExpenses, setTotalExpenses] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        loadExpenses()
    }, [user])

    async function loadExpenses() {
        try {
            if (!user) {
                setExpenses([])
                navigate('/')
            } else {
                const expenses = await expenseService.query()
                setExpenses(expenses)
                const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0)
                setTotalExpenses(totalAmount)
            }
        } catch (err) {
            console.log('Cannot load expenses', err) // Add user msg
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) return <span className="loader"></span>
    return <section className="dashboard main-layout">
        <SideBar user={user} setUser={setUser} />
        <div className="dashboard-container">
            <div className="total-expenses">
                <h2>{totalExpenses}$</h2>
                <p>Expenses</p>
            </div>
            <div className="total-transactions">
                <h2>{expenses.length}</h2>
                <p>Transactions</p>
            </div>
            <div className="categories-chart-container">
                <h3>Expenses by category</h3>
                <div className="categories-chart">
                    <CategoriesChart expenses={expenses} totalExpenses={totalExpenses} />
                </div>
            </div>
        </div>
    </section >
}