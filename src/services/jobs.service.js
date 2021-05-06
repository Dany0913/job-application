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
    const job = await resp.json();
    console.log("Estamos en getSingleJob ", job);
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

// const addCandidateToJob = async (id) => {
// try {
//   const resp = await fetch(`${API_URL_BASE}/api/jobs/${id}`);
//   const payload = {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ user }),
//   };
//   const resp = await fetch(`${API_URL_BASE}/api/users`, payload);
//   const newUser = await resp.json();
//   console.log(newUser);
//   return newUser;
// } catch (error) {
//   throw Error(error);
// }
// };

export { getAllJobs, getSingleJob, createJob };
