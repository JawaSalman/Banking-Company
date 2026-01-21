import './JobOpeningsHeader.css';

const JobOpeningsHeader = ({ title, description }) => {
  return (

    <div className="hs-jo-header-text">
      <h1 className='hs-jo-title'><span>{title}</span></h1>
      <p className='hs-jo-description'>{description}</p>
    </div>
  );
};

export default JobOpeningsHeader;
