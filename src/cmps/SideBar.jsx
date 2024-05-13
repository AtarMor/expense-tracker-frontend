import { NavLink } from "react-router-dom";

export function SideBar() {
    return <nav className="side-bar">
        <NavLink to="/">Expenses</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
}