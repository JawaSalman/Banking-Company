import "./Job Openings.css";
import { JobOpeningsCardData, JobOpeningsHeaderData } from "../JobOpeningsData/JobOpeningsData";
import JobOpeningsHeader from "../Components/JobOpeningsHeader/JobOpeningsHeader";
import JobCard from "../Components/JobCard/JobCard";
import { useEffect, useState } from "react";

const JobOpenings = () => {

  // Key name for browser storage
  const storageKey = "tableData-2-2";

  const [jobs, setJobs] = useState(JobOpeningsCardData);

  useEffect(() => {
    const savedData = localStorage.getItem(storageKey);

    if (savedData) {
      setJobs(JSON.parse(savedData));
    } else {
      localStorage.setItem(storageKey, JSON.stringify(JobOpeningsCardData));
    }

  }, []);


  return (
    <section className="hs-job-openings-section hs-section-margin hs-section-margin-btm">
      {/* Top section with title and description */}
      <JobOpeningsHeader
        title={JobOpeningsHeaderData.title}
        description={JobOpeningsHeaderData.description}
      />

      {/* Grid container to show all job cards */}
      <div className="hs-job-cards">
        {jobs.map((card) => (
          <JobCard key={card.id} job={card} />
        ))}
      </div>
    </section>
  );
};

export default JobOpenings;
