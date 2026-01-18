// Import component-specific styles
import "./FinancialCTA.css";
// Import Link for client-side routing
import { Link } from "react-router-dom";
/**
 * FinancialCTA Component
 * ----------------------
 * A Call-To-Action section used to encourage users
 * to create a new account (Sign Up).
 *
 * This component displays:
 * - Optional background/image
 * - Title (supports HTML for styling)
 * - Description text
 * - CTA button that navigates to the Sign Up page
 *
 * Props:
 * @param {string} title - CTA title (HTML allowed)
 * @param {string} description - CTA description text
 * @param {string} buttonText - Text displayed on the CTA button
 * @param {string} image - Optional image displayed in the CTA section
 */
const FinancialCTA = ({ title, description, buttonText, image }) => {
  return (
    // Main CTA container
    <div className="ma-financial-cta">

      {/* Optional CTA image */}
      {image && (
        <img
          src={image}
          alt="cta"
          className="ma-cta-image"
        />
      )}

      {/* Text overlay content */}
      <div className="ma-text-overlay">

        {/* CTA title (HTML allowed for custom styling) */}
        <h1
          className="ma-card-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* CTA description */}
        <p className="ma-card-description">
          {description}
        </p>
      </div>

      {/* CTA button → redirects user to Sign Up page */}
      <Link to="/signup">
        <button className="ma-finical-btn">
          {buttonText}
        </button>
      </Link>

    </div>
  );
};

export default FinancialCTA;
