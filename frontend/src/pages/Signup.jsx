import React, { useState } from "react";
import Button from "../components/Button";
import GradientCirclesForLoginPage from "../assets/GradientCirclesForLoginPage";
import { registerUser } from "../services/api";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const data = await registerUser(
        formData.username,
        formData.password,
        formData.email
      );
      setMessage(data.message); // Success message from backend
      setError("");
    } catch (err) {
      setError(err.error || "An error occurred"); // Error from backend
    }
  };

  return (
    <div className="w-full h-screen flex items-center gap-10 bg-black">
      <GradientCirclesForLoginPage />

      <div className="w-5/12 flex justify-end">
        <span className="text-white text-[80px] font-outfit text-right">
          Your Journey Begins Here!
        </span>
      </div>
      <form onSubmit={handleSubmit} className="w-7/12 flex justify-start">
        <div className="w-[300px] h-[500px] rounded-2xl border-2 border-[#626262] backdrop-blur-xl">
          <div className="p-8">
            <h1 className="text-left text-white font-outfit text-3xl font-medium">
              Sign Up
            </h1>
            <span className="text-left text-white pt-10 font-outfit text-sm">
              Just some details to get you in!
            </span>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              className="w-full bg-transparent font-outfit text-white font-extralight text-sm placeholder:text-white border-[1px] rounded-lg px-3 py-[5px] mt-7 outline-none"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-transparent font-outfit text-white font-extralight text-sm placeholder:text-white border-[1px] rounded-lg px-3 py-[5px] mt-4 outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-transparent font-outfit text-white font-extralight text-sm placeholder:text-white border-[1px] rounded-lg px-3 py-[5px] mt-4 outline-none"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-transparent font-outfit text-white font-extralight text-sm placeholder:text-white border-[1px] rounded-lg px-3 py-[5px] mt-4 outline-none"
            />
            <Button
              type="submit"
              className="w-full mt-7 text-white font-outfit bg-gradient-to-r from-red-500 to-violet-800 rounded-md py-1 hover:brightness-125 transition-all ease-out duration-300"
            >
              Sign up
            </Button>
            {error && (
              <p className="text-red-500 font-outfit text-sm text-center mt-3">
                {error}
              </p>
            )}
            {message && (
              <p className="text-green-500 font-outfit text-sm text-center mt-3">
                {message}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
