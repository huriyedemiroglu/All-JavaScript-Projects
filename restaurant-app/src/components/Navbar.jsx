import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <div className="nav-brand">
                <Link className="nav-brand-link" to="/">Restaurant</Link>
            </div>
            <div className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link className="nav-link" to="/menu">Menu</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar