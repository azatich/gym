import React, { useState } from "react";
import Button from "../components/Button";
import GradientCirclesForLoginPage from "../assets/GradientCirclesForLoginPage";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await registerUser(username, password, email);
      setMessage("User registered successfully! Redirecting...");
      setError("");
      navigate("/login");
    } catch (err) {
      setError(
        err.username?.[0] ||
          err.email?.[0] ||
          `${err}`
      );
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
      <div className="w-7/12 flex justify-start">
        <div className="w-[300px] h-[500px] rounded-2xl border-2 border-[#626262] backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="p-8">
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full bg-transparent font-outfit text-white font-extralight text-sm placeholder:text-white border-[1px] rounded-lg px-3 py-[5px] mt-7 outline-none"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent font-outfit text-white font-extralight text-sm placeholder:text-white border-[1px] rounded-lg px-3 py-[5px] mt-4 outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent font-outfit text-white font-extralight text-sm placeholder:text-white border-[1px] rounded-lg px-3 py-[5px] mt-4 outline-none"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
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
          </form>
          <div className="flex justify-center">
            <div className="flex gap-1 mt-8">
              <span className="text-center text-white font-outfit text-sm font-light">
                Already have an account?
              </span>
              <Button
                to="/login"
                className="text-center text-white font-outfit text-sm hover:underline font-light"
              >
                {" "}
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
