import api from "./index.js";

const registerUser = async (newData) => {
  return await api.post("/user/signin", newData);
};

const loginUser = async (loginData) => {
  return await api.post("/user/login", loginData);
};

export { registerUser, loginUser };
