export function AppHeader({ onToggleMenu }) {
    return <header className="app-header">
        <button className="toggle-menu-btn" onClick={onToggleMenu}>☰</button>
        <img className="logo" src="/assets/img/dollar-symbol.png" alt="app-icon"/>
        <h1>Expense Tracker</h1>
    </header>
}