export function AppHeader({ onToggleMenu }) {
    return <header className="app-header">
        <button className="toggle-menu-btn" onClick={onToggleMenu}>☰</button>
        <h1>Expense Tracker</h1>
    </header>
}