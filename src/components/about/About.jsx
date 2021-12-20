import "./about.css"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://cdn.dribbble.com/users/1957569/screenshots/14102338/media/ef87238dc32272d4179b25c5ee9c0292.jpg?compress=1&resize=800x600" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Deserunt laborum expedita facilis exercitationem illum impedit accusantium quidem saepe accusamus adipisci explicabo, alias cupiditate asperiores placeat perferendis consectetur voluptates unde officiis.
                </p>
                <div className="a-tec">
                    <img src="" alt="" className="a-tec-img" />
                </div>
            </div>

        </div>
    )
}

export default About
