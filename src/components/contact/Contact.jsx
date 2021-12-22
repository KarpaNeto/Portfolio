import "./contact.css"
import Phone from "../../img/phone.svg"
import Email from "../../img/email.svg"
import Address from "../../img/address.svg"
import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com'
import { ThemeContext } from "../../context"


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_37vmrsq', 'template_u2mrrtp', formRef.current, 'user_LN5it5jhhM7NFsKOBOPEq')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div id="contact" className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +55(48)98860-5478
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            pedrokn@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Palhoça/SC-Brasil
                        </div>
                    </div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" className="c-social-media"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="c-social-media"/>
                </div>
                <div className="c-right">
                
                    <form ref={formRef} onSubmit={handleSubmit} action="">
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} name="" id="" placeholder="Message" name="message" cols="30" rows="5"></textarea>
                        <button>Submit</button>
                        {done && "Thanks you!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
