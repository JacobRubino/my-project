import "./Header.css";

function Header() {
    return (
        <header className="App-header">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#leetcode" className="nav-link">LeetCode</a>
                    </li>
                    <li className="nav-item">
                        <a href="#arcade" className="nav-link">Arcade</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;