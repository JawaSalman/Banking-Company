import "./PressReleasesCard.css";

const PressReleasesCard = ({ card }) => {
  return (

    <div className="hs-pr-card border">

      <div className="hs-pr-card-image">
        <img src={card.image} alt={card.title} />
      </div>

      <div className="hs-pr-card-content">

        <h3 className="hs-pr-card-title">{card.title}</h3>

        <div className="hs-pr-card-tags">
          <p className="hs-pr-tag border">Location: {card.location}</p>
          <p className="hs-pr-tag border">Date: {card.date}</p>
        </div>

        <p className="hs-pr-card-description">{card.description}</p>

      </div>

    </div>

  );
};

export default PressReleasesCard;
