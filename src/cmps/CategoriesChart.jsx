import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import { expenseService } from "../services/expense.service"

ChartJS.register(ArcElement, Tooltip, Legend)

export function CategoriesChart({ expenses, totalExpenses }) {
    const categoryPercentages = {}
    expenses.forEach(expense => {
        if (!categoryPercentages[expense.category]) {
            categoryPercentages[expense.category] = 0
        }
        categoryPercentages[expense.category] += (expense.amount / totalExpenses) * 100
    })

    const categoryPercentageStrings = Object.entries(categoryPercentages)
        .map(([category, percentage]) => `${category}: ${percentage.toFixed(2)}%`)

    const data = {
        labels: categoryPercentageStrings,
        datasets: [
            {
                data: Object.values(categoryPercentages),
                backgroundColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(156, 39, 176, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(63, 81, 181, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(29, 104, 32, 1)',
                    'rgba(139, 195, 74, 1)',
                ],
                borderWidth: 1,
                borderColor: 'white'
            },
        ],
    };

    const options = {
        plugins: {
            responsive: true,

            legend: {
                position: 'right',
            },
        },
    }

    return <Doughnut data={data} options={options} />
}
