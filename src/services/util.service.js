export const utilService = {
    saveToStorage,
    loadFromStorage,
    debounce,
    getChartColors,
    getMonthsNames
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}

function getChartColors() {
    return [
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
    ]
}

function getMonthsNames() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}