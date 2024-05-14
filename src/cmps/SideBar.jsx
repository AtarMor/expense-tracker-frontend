import { NavLink } from "react-router-dom";

export function SideBar() {
    function closeMenu() {
        document.body.classList.remove('menu-open')
    }

    return <nav className="side-bar">
        <NavLink to="/"><button onClick={closeMenu}>Expenses</button></NavLink>
        <NavLink to="/dashboard"><button onClick={closeMenu}>Dashboard</button></NavLink>
    </nav>
}