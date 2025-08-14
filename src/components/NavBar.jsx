import "../styles/navbar.css"
import { Link } from "react-router";

const NavBar = () => {
    const base = "/teach-react"

    return (
    <nav>
        <h3>React Hooks</h3>
        <ul>
            <li><Link to={`${"/use_state"}`}>useState</Link></li>
            <li><Link to={`${"/use_effect"}`}>useEffect</Link></li>
            <li>useMemo</li>
            <li>useCallback</li>
        </ul>
    </nav>);
};

export default NavBar;