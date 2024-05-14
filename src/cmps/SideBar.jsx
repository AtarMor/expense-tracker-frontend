import { NavLink } from "react-router-dom";
import { LoginSignup } from "./LoginSignup";

export function SideBar({user, setUser}) {
    function closeMenu() {
        document.body.classList.remove('menu-open')
    }

    return <div className="side-bar">
        <LoginSignup user={user} setUser={setUser}/>
        <nav className="side-bar-nav">
            <NavLink to="/"><button onClick={closeMenu}>Expenses</button></NavLink>
            <NavLink to="/dashboard"><button onClick={closeMenu}>Dashboard</button></NavLink>
        </nav>
    </div>
}