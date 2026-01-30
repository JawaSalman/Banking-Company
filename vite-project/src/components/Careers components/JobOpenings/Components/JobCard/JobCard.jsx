import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="hs-job-card-container border flex-between flex-col">
      <h2 className="hs-job-card-title">{job.title}</h2>

      <div className="hs-job-card-tags">
        <p className="hs-job-tag border">Location: {job.location}</p>
        <p className="hs-job-tag border">Department: {job.department}</p>
      </div>

      <div className="hs-job-card-section">
        <h3 className='hs-sub-title'>About This Job</h3>
        <p className='hs-sub-title-desc'>{job.description}</p>
      </div>

      <div className="hs-job-card-section">
        <h3 className='hs-sub-title'>Requirements & Qualifications</h3>
        <ul className="hs-jo-requirements">
          {job.requirements.map((requirement, index) => (
            <li key={index} className='hs-sub-title-desc'>

              <img src="/Images/CareersPage/Bag Icon.png" alt="icon" className="hs-requirements-icon" />

              {requirement}
            </li>
          ))}
        </ul>
      </div>
      <button className="hs-apply-btn">Apply Now</button>
    </div>
  );
};

export default JobCard;
