import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export const registerUser = async (username, password, email) => {
  const response = await axios.post("http://127.0.0.1:8000/users/signup/", {
    username,
    password,
    email,
  });
  return response.data;
};

export const fetchHomeData = async () => {
  const response = await axios.get(`${API_BASE_URL}/`);
  return response.data;
};
