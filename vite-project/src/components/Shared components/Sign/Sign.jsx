import { useState } from "react";
import "./Sign.css";
import "../../Login components/Login/Login.css"

// Social icons data 
const SOCIAL_ICONS = [
    { id: 1, src: "/Images/LoginPage/Google.png", alt: "Google" },
    { id: 2, src: "/Images/LoginPage/Facebook.png", alt: "Facebook" },
    { id: 3, src: "/Images/LoginPage/Apple.png", alt: "Apple" },
];

export default function Sign() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="mh-login-page">

            <img
                src="/Images/LoginPage/Main Texture.png"
                className="mh-mainTexture"
                alt=""
            />

            <form className="mh-login-card">
                <h1 className="mh-title">Sign Up</h1>

                <p className="mh-desc">
                    Join our community today! Create an account to unlock exclusive features and personalized experiences.
                </p>

                {/* Inputs */}
                <div className="mh-signin-inputs">
                    <input type="text" placeholder="Enter First Name" />
                    <input type="text" placeholder="Enter Last Name" />
                    <input type="email" placeholder="Enter your Email" />

                    <div className="mh-password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your Password"
                        />

                        <img
                            src="/Images/LoginPage/Show Password.png"
                            alt="toggle password"
                            className="mh-password-eye"
                            onClick={() => setShowPassword((prev) => !prev)}
                        />
                    </div>
                </div>

                <a className="mh-forgot" href="#">
                    Forgot Password?
                </a>


                <div className="mh-loginOrSignup">
                    <input className="mh-btn-login" type="submit" value="Login" />
                    <button className="mh-btn-signup" type="button">Sign Up</button>
                </div>


                {/* Divider */}
                <div className="mh-divider">
                    <span></span>
                    <p>Or Continue with</p>
                    <span></span>
                </div>

                {/* Social */}
                <div className="mh-social">
                    {SOCIAL_ICONS.map((icon) => (
                        <span key={icon.id} className="mh-social-icon">
                            <img src={icon.src} alt={icon.alt} />
                        </span>
                    ))}
                </div>
            </form>
        </section>
    );
}