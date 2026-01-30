import './PressReleasesHeader.css';

const PressReleasesHeader = ({ title, description }) => {
  return (
    <div className="hs-pr-header">
      <h1 className="hs-pr-header-title">
        <span>{title}</span>
      </h1>
      <p className="hs-pr-header-description">{description}</p>

    </div>
  );
};

export default PressReleasesHeader;
