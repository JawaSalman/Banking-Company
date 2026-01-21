import "./Job Openings.css";
import { JobOpeningsCardData, JobOpeningsHeaderData } from "../JobOpeningsData/JobOpeningsData";
import JobOpeningsHeader from "../Components/JobOpeningsHeader/JobOpeningsHeader";
import JobCard from "../Components/JobCard/JobCard";

const JobOpenings = () => {
  return (

    <section className="hs-job-openings-section hs-section-margin hs-section-margin-btm">
      <JobOpeningsHeader
        title={JobOpeningsHeaderData.title}
        description={JobOpeningsHeaderData.description} />

      <div className="hs-job-cards">
        {JobOpeningsCardData.map((card) => (
          <JobCard key={card.id} job={card} />
        ))}
      </div>
    </section>
  )
}
export default JobOpenings
