import "./intro.css"
import Logo from "../../img/logo.png"
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Intro = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div id="home" className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name" style={{
                        textShadow: darkMode && "0 0 50px rgb(29, 238, 168)"
                    }} >Pedro Karpinski Neto</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item" style={{
                                color: darkMode && "white", textShadow: darkMode && "0 0 9px rgb(29, 238, 168)"
                            }}>Front-End Developer</div>
                            <div className="i-title-item" style={{
                                color: darkMode && "white", textShadow: darkMode && "0 0 9px rgb(29, 238, 168)"
                            }}>UI/UX Designer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Welcome to my space, i hope you enjoy. Here you can find a little about me. I'm brazilian guy who loves Tech and Design stuffs.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src="" alt="" className="i-img" />
            </div>
        </div>
    )
}
export default Intro
