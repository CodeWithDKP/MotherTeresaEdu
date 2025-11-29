import { NavLink } from "react-router-dom";
import { useApp } from "../components/context/AppContext";
import '../components/styles/Header.css';
export default function Header() {
    const { logo, menus } = useApp();

    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
            <div className="container navBar">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="logo" style={{ height: "80px" }} />
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ms-auto gap-3 nav-mobile-list">
                        {menus.map((item, i) => (
                            <li className="nav-item" key={i}>
                                <NavLink to={item.path} className="nav-link">
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
