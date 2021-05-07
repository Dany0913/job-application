import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleJob, addCandidateToJob } from "../../services/jobs.service";
import Header from "./Header";
import Form from "./Form";

const ApplyJob = () => {
  const { id } = useParams();
  // console.log(`id: ${id}`);
  let [job, setJob] = useState({ image: "" });
  // console.log("Apply for job component", job);

  const getJob = async () => {
    const selectedJob = await getSingleJob(id);
    setJob(selectedJob);
    console.log(selectedJob);
  };
  const updateJobCandidadte = async (job) => {
    try {
      await updateJobCandidadte(job);
      // console.log("Job update with the applicant");
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (applicant) => {
    // console.log(applicant);
    const { candidates = [] } = job;
    candidates.push(applicant);
    addCandidateToJob({ ...job, candidates });
  };

  useEffect(() => {
    getJob();
  }, [id]);
  return (
    <div>
      <Header job={job} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default ApplyJob;
