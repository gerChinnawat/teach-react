import "../styles/navbar.module.css"
import { NavLink } from "react-router";

const NavBar = () => {
    const base = "/teach-react"

    return (
    <nav>
        <h3>React Hooks</h3>
        <ul>
            <li><NavLink to={`${base + "/use_state"}`}>useState</NavLink></li>
            <li><NavLink to={`${base + "/use_effect"}`}>useEffect</NavLink></li>
            <li>useMemo</li>
            <li>useCallback</li>
        </ul>
    </nav>);
};

export default NavBar;