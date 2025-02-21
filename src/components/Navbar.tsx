import { NavLink } from "react-router-dom"
import logo from "../assets/ReactLogo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" width={180}/>
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about">
                    <li>About</li>
                </NavLink>
                <NavLink to="/product">
                    <li>Product</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
                <NavLink to="/jobs">
                    <li>Jobs</li>
                </NavLink>
            </ul>
            <button>Get Started</button>
        </div>
    )
}

export default Navbar