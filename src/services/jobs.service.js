const API_URL_BASE = process.env.REACT_APP_API_URL;

const getAllJobs = async () => {
  try {
    const resp = await fetch(`${API_URL_BASE}/api/jobs`);
    const jobs = await resp.json();
    return jobs;
  } catch (error) {
    throw Error(error);
  }
};

const getSingleJob = async (id) => {
  try {
    const resp = await fetch(`${API_URL_BASE}/api/jobs/${id}`);
    const jobs = await resp.json();
    return jobs;
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

export { getAllJobs, getSingleJob, createJob };
