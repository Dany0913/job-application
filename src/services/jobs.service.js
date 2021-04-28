const getAllJobs = async () => {
  try {
    const resp = await fetch("http://localhost:3001/api/jobs");
    const jobs = await resp.json();
    return jobs;
  } catch (error) {
    throw Error(error);
  }
};

const getSingleJob = async (id) => {
  try {
    const resp = await fetch(`http://localhost:3001/api/jobs/${id}`);
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
