import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export const registerUser = async (username, password, email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/signup/`, {
      username,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const loginUser = async (emailOrUsername, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login/`, {
      email_or_username: emailOrUsername,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/logout/`);
    return response.data;
  } catch (error) {
    console.error("Error logging out user:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const validateSession = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/session/`);
    return response.data.isAuthenticated;
  } catch (error) {
    console.error("Error validating session:", error.response?.data || error.message);
    return false;
  }
};

export const getWhoAmI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/whoami/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching current user:", error.response?.data || error.message);
    return null;
  }
};
