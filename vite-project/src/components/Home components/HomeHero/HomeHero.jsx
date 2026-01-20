// Import reusable IconText component
import IconText from "../../Shared components/IconText/IconText"
// Import component-specific styles
import "./HomeHero.css"
// Import Link for client-side navigation (React Router)
import { Link } from "react-router-dom"
// Import hero data
import homeHeroData from "./HomeHeroData"

const HomeHero = () => {
  const {
    icon,
    iconText,
    title,
    description,
    buttonText,
    images,
  } = homeHeroData;

  return (
    <section className="ma-hero-container">
      {/* Left side */}
      <div className="ma-hero-left">
        <IconText icon={icon} text={iconText} />

        <h1
          className="ma-hero-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p className="ma-hero-description">{description}</p>

        <Link to="/signup">
          <button className="ma-hero-btn">
            {buttonText}
          </button>
        </Link>
      </div>

      {/* Right side */}
      <div className="ma-hero-right">
        {images.map((img, index) => (
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
