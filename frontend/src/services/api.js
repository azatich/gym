import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export const registerUser = async (username, password, email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/signup/`, {
      username,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message
    );
    throw error.response?.data || error.message;
  }
};

export const loginUser = async (emailOrUsername, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login/`, {
      email_or_username: emailOrUsername,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { detail: "An unexpected error occurred." };
  }
};
