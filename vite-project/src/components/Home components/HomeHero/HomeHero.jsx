// Import reusable IconText component
import IconText from "../../Shared components/IconText/IconText";
// Import component-specific styles
import "./HomeHero.css";
// Import Link for client-side navigation (React Router)
import { Link } from "react-router-dom";

/**
 * HomeHero Component
 * -----------------
 * This component renders the hero section on the Home page.
 * It displays:
 * - An icon with text
 * - A title (supports HTML content)
 * - A description paragraph
 * - A call-to-action button that navigates to the Sign Up page
 * - A set of hero images on the right side
 *
 * Props:
 * @param {string} icon - Icon image source
 * @param {string} iconText - Text displayed next to the icon
 * @param {string} title - Main hero title (HTML allowed)
 * @param {string} description - Hero description text
 * @param {string} buttonText - Text displayed inside the CTA button
 * @param {string[]} images - Array of image URLs for hero visuals
 */
const HomeHero = ({
  icon,
  iconText,
  title,
  description,
  buttonText,
  images,
}) => {
  return (
    // Main hero container
    <section className="ma-hero-container">

      {/* Left side: text content */}
      <div className="ma-hero-left">

        {/* Icon with text */}
        <IconText icon={icon} text={iconText} />

        {/* Hero title (HTML content allowed for styling) */}
        <h1
          className="ma-hero-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* Hero description */}
        <p className="ma-hero-description">{description}</p>

        {/* Call-to-action button that redirects to Sign Up page */}
        <Link to="/signup">
          <button className="ma-hero-btn">
            {buttonText}
          </button>
        </Link>
      </div>

      {/* Right side: hero images */}
      <div className="ma-hero-right">
        {images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`hero-${index}`}
            className={`ma-hero-image-${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
