const BenefitsCard = ({ image, title, desc }) => {
  return (
    <div className="mh-card">
      <div className="mh-card-head">
        <span className="mh-card-icon">
          <img src={image} alt={title} />
        </span>

        <h3 className="mh-card-title">{title}</h3>
      </div>

      <p className="mh-card-desc">{desc}</p>
    </div>
  );
};

export default BenefitsCard;
