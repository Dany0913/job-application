import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleJob } from "../../../services/jobs.service";

const Header = () => {
  const { id } = useParams();
  let [job, setJob] = useState({ image: "" });
  console.log("Estamos en FORM", job);

  const getJob = async () => {
    const selectedJob = await getSingleJob(id);
    console.log(selectedJob);
    setJob(selectedJob);
  };

  useEffect(() => {
    getJob();
  }, [id]);

  // const handleApplyNow = () => {};
  return (
    <header
      className="page-header bg-img size-lg"
      style={{ backgroundImage: "url(/img/bg-banner1.jpg)" }}
    >
      <div className="container no-shadow">
        <h1 className="text-center">Apply for the job</h1>
        <p className="lead text-center">
          Apply with your online resume, create new resume for the job, or make
          a custom application.
        </p>

        <hr />
        <a className="item-block item-block-flat" href="job-detail.html">
          <header>
            <img src={job.image} alt={job.company} />
            <div className="hgroup">
              <h4>{job.title}</h4>
              <h5>{job.company}</h5>
            </div>
            <div className="header-meta">
              <span className="location">{job.location}</span>
              <time>{job.ago}</time>
            </div>
          </header>
        </a>

        <div className="button-group">
          <div className="action-buttons">
            <button className="btn btn-primary">Apply now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
