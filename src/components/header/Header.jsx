import "./header.css"
import Logo from "../../img/logo.png"
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Header = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div>
            <nav className="h">
            <div className="h-logo">
                        <img src={Logo} alt="" />
                    </div>
                <ul className="h-list">  
                    <li className="h-list-item"><a href="#home" className="h-link" style={{ textShadow: darkMode && "0px 0px 10px rgb(29, 238, 168) 0 0 15px rgb(29, 238, 168)" }}>Home</a></li>
                    <li className="h-list-item"><a href="#about" className="h-link">About</a></li>
                    <li className="h-list-item"><a href="#projects" className="h-link">Projects</a></li>
                    <li className="h-list-item"><a href="#contact" className="h-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
