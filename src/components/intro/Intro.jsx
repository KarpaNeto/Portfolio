import "./intro.css"
import Logo from "../../img/logo.png"
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Intro = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name" style={{textShadow: darkMode && "0 0 50px rgb(29, 238, 168)"
                    }} >Pedro Karpinski Neto</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item" style={{color: darkMode && "white", textShadow: darkMode && "0 0 9px rgb(29, 238, 168)"
                    }}>Front-End Developer</div>
                            <div className="i-title-item" style={{color: darkMode && "white", textShadow: darkMode && "0 0 9px rgb(29, 238, 168)"
                    }}>UI/UX Designer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro cupiditate dolor a facilis similique accusamus animi tenetur delectus in. Excepturi voluptate doloremque, quam vero numquam nemo cumque tenetur dolore illo.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
               <img src={Logo} alt="" className="i-img" /> 
            </div>
        </div>
    )
}
export default Intro
