import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import { utilService } from '../services/util.service'

ChartJS.register(ArcElement, Tooltip, Legend)

export function CategoriesChart({ expenses, totalExpenses }) {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
    const [position, setPosition] = useState('right')

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        viewportWidth < 600 ? setPosition('bottom') : setPosition('right')

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [viewportWidth])

    function handleResize() {
        setViewportWidth(window.innerWidth)
    }

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
                backgroundColor: utilService.getChartColors(),
                borderWidth: 1,
                borderColor: 'white'
            },
        ],
    };

    const options = {
        plugins: {
            responsive: true,

            legend: {
                position,
            },
        },
    }

    return <Doughnut data={data} options={options} />
}
