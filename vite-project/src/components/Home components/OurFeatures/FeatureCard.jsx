// FeatureCard.jsx
const FeatureCard = ({ title, description }) => {
  return (
    <div className="mh-feature-card">
      <div className="mh-card-header">
        <h3>{title}</h3>
        <img src="/Images/HomePage/Arrow.png"  className="mh-arrow" alt="" />
      </div>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard
