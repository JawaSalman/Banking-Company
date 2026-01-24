import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="mh-login-page">
      <img
        src="/Images/LoginPage/Main Texture.png"
        className="mh-mainTexture"
        alt=""
      />

      <form className="mh-login-card">
        <h1 className="mh-title">Login</h1>

        <p className="mh-desc">
          Welcome back! Please log in to access your account.
        </p>

        <div className="mh-inputs">
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
              onClick={() => setShowPassword(!showPassword)} 
            />
          </div>
        </div>

        <a className="mh-forgot" href="#">
          Forgot Password?
        </a>
        <br />
        <input className="mh-btn-login" type="submit" value="Login" />
        <br />
        <button className="mh-btn-signup">
          <a href="#">Sign Up</a>
        </button>

        <div className="mh-divider">
          <span></span>
          <p>Or Continue with</p>
          <span></span>
        </div>

        <div className="mh-social">
          <span className="mh-social-icon">
            <img src="/Images/LoginPage/Google.png" alt="google" />
          </span>
          <span className="mh-social-icon">
            <img src="/Images/LoginPage/Facebook.png" alt="Facebook" />
          </span>
          <span className="mh-social-icon">
            <img src="/Images/LoginPage/Apple.png" alt="Apple" />
          </span>
        </div>
      </form>
    </section>
  );
}
