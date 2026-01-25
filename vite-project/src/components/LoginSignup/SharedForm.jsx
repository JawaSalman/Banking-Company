import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SharedForm.css";

// Social icons data
const SOCIAL_ICONS = [
  { id: 1, src: "/Images/LoginPage/Google.png", alt: "Google" },
  { id: 2, src: "/Images/LoginPage/Facebook.png", alt: "Facebook" },
  { id: 3, src: "/Images/LoginPage/Apple.png", alt: "Apple" },
];

export default function SharedForm({ title, description, fields, submitText, secondaryText }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

 
  const handleSecondaryClick = () => {
    if (secondaryText === "Sign Up") navigate("/signup");
    else if (secondaryText === "Login") navigate("/login");
  };

  return (
    <section className="mh-login-page">
      <img
        src="/Images/LoginPage/Main Texture.png"
        className="mh-mainTexture"
        alt=""
      />

      <form className="mh-login-card" onSubmit={(e) => e.preventDefault()}>
        <h1 className="mh-title">{title}</h1>
        <p className="mh-desc">{description}</p>

        <div className="mh-auth-inputs">
          {fields.map((field, index) => {
            if (field.type === "password") {
              return (
                <div key={index} className="mh-password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={field.placeholder}
                  />
                  <img
                    src="/Images/LoginPage/Show Password.png"
                    alt="toggle password"
                    className="mh-password-eye"
                    onClick={() => setShowPassword(prev => !prev)}
                  />
                </div>
              );
            }

            return (
              <input
                key={index}
                type={field.type}
                placeholder={field.placeholder}
              />
            );
          })}
        </div>

        {title === "Login" && (
          <a className="mh-forgot" href="#">
            Forgot Password?
          </a>
        )}

        <div className="mh-loginOrSignup">
          <input className="mh-btn-login" type="submit" value={submitText} />
          <button
            className="mh-btn-signup"
            type="button"
            onClick={handleSecondaryClick}
          >
            {secondaryText}
          </button>
        </div>

        <div className="mh-divider">
          <span></span>
          <p>Or Continue with</p>
          <span></span>
        </div>

        <div className="mh-social">
          {SOCIAL_ICONS.map(icon => (
            <span key={icon.id} className="mh-social-icon">
              <img src={icon.src} alt={icon.alt} />
            </span>
          ))}
        </div>
      </form>
    </section>
  );
}
