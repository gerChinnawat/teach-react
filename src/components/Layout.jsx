import NavBar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;