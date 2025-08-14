import "../styles/navbar.module.css"

const NavBar = () => {
    const base = "/teach-react"

    return (
    <nav>
        <h3>React Hooks</h3>
        <ul>
            <li><a href={`${base + "/use_state"}`}>useState</a></li>
            <li><a href={`${base + "/use_effect"}`}>useEffect</a></li>
            <li>useMemo</li>
            <li>useCallback</li>
        </ul>
    </nav>);
};

export default NavBar;