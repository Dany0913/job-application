import React from "react";

const Header = (job) => {
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
            <img src={job.job.image} alt={job.job.company} />
            <div className="hgroup">
              <h4>{job.job.title}</h4>
              <h5>{job.job.company}</h5>
            </div>
            <div className="header-meta">
              <span className="location">{job.job.location}</span>
              <time>{job.job.ago}</time>
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
