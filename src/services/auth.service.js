const API_URL_BASE = process.env.REACT_APP_API_URL;

const loginAccount = async (email) => {
  try {
    const resp = await fetch(`${API_URL_BASE}/api/users`);
    const allUsers = await resp.json();
    console.log(email);
    const userDB = allUsers.find((item) => email === item.user.email);
    console.log("login account service:", userDB);
    return userDB;
  } catch (error) {
    throw Error(error);
  }
};

const registerAccount = async (user) => {
  try {
    const payload = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user }),
    };
    const resp = await fetch(`${API_URL_BASE}/api/users`, payload);
    const newUser = await resp.json();
    console.log(newUser);
    return newUser;
  } catch (error) {
    throw Error(error);
  }
};

const forgotPassword = () => {};

export { forgotPassword, loginAccount, registerAccount };
