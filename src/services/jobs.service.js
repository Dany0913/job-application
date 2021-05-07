const API_URL_BASE = process.env.REACT_APP_API_URL;

const getAllJobs = async () => {
  try {
    const resp = await fetch(`${API_URL_BASE}/api/jobs`);
    const jobs = await resp.json();
    console.log(`Get all jobs function: ${jobs.join()}`);

    return jobs;
  } catch (error) {
    throw Error(error);
  }
};

const getSingleJob = async (id) => {
  try {
    const resp = await fetch(`${API_URL_BASE}/api/jobs/${id}`);
    const job = await resp.json();
    console.log(`Get single job function: ${job}`);
    return job;
  } catch (error) {
    throw Error(error);
  }
};

const createJob = async (job) => {
  try {
    return job;
  } catch (error) {
    throw Error(error);
  }
};

const addCandidateToJob = async (job) => {
  try {
    const payload = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    };
    const resp = await fetch(`${API_URL_BASE}/api/jobs/${job.id}`, payload);
    const updatedJob = await resp.json();
    console.log(`Updated job: ${updatedJob}`);
    return updatedJob;
  } catch (error) {
    throw Error(error);
  }
};

export { getAllJobs, getSingleJob, createJob, addCandidateToJob };
