const BenefitsCard = ({ image, title, description }) => {
  return (
    <div className="mh-card">
      <img src="/Images/CareersPage/background.png" alt="" className="mh-card-bachground" />
      <div className="mh-card-head">
        <span className="mh-card-icon">
          <img src={image} alt={title} />
        </span>

        <h3 className="mh-card-title">{title}</h3>
      </div>

      <p className="mh-card-desc">{description}</p>
    </div>
  );
};

export default BenefitsCard;
