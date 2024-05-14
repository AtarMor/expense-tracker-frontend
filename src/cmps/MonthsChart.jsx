import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { utilService } from '../services/util.service'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export function MonthsChart({ expenses }) {
    const months = utilService.getMonthsNames()

    const sums = Array(12)
    expenses.forEach(expense => {
        const expenseDate = new Date(expense.date)
        if (expenseDate.getFullYear() === new Date().getFullYear()) {
            const month = expenseDate.getMonth()
            const newSum = sums[month - 1] || 0 + expense.amount
            sums[month - 1] = newSum
        }
    })

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Expenses in USD',
                data: sums,
                backgroundColor: 'rgba(255, 99, 132, 0.6)'
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    }

    return <Bar data={data} options={options} />
}
