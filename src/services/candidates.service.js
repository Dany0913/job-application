const getAllCandidates = async () => {
  try {
    const resp = await fetch("http://localhost:3001/api/candidates");
    const candidates = await resp.json();
    return candidates;
  } catch (error) {
    throw Error(error);
  }
};

const getSingleCandidate = async (id) => {
  try {
    const resp = await fetch(`http://localhost:3001/api/candidates/${id}`);
    const candidates = await resp.json();
    return candidates;
  } catch (error) {
    throw Error(error);
  }
};
const createCandidates = async (candidates) => {
  try {
    return candidates;
  } catch (error) {
    throw Error(error);
  }
};

export { getAllCandidates, getSingleCandidate, createCandidates };
