import "./about.css"

const About = () => {
    return (
        <div id="about" className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://cdn.dribbble.com/users/1957569/screenshots/14102338/media/ef87238dc32272d4179b25c5ee9c0292.jpg?compress=1&resize=800x600" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Front-end & UI/UX Developer
                </p>
                <p className="a-desc">
                    I'm 30 years old, I'm from Campo Mourão - Paraná. I live in Florianópolis for at least 20 years.
                    I have a degree in Law from UNIVALI - Universidade do Vale do Itajaí since 2017.
                    I am currently studying the 2nd semester of Systems Analysis and Development at Anhanguera.
                    I love to code, i'm passionate for learn, mainly tech stuff, love to building my own apps.
                    I also really like Design, I study UI / UX design in parallel with programming.
                    <strong>I'm looking for my first job opportunity.</strong>
                </p>

                <div className="a-tec">
                    <h1 className="a-title">Technologies</h1>
                    <div className="a-tec-container-imgs">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" className="a-tec-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" className="a-tec-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" className="a-tec-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" className="a-tec-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" className="a-tec-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" className="a-tec-img" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="" className="a-tec-img" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About
