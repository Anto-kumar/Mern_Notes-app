import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (!validEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError(null);

    // Login API call 

  };

  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
        <div className="flex items-center justify-center ">
          <form
            className="bg-gradient-to-b from-blue-300 to-blue-100 p-6 mt-20 rounded shadow-md"
            style={{ width: "350px" }}
            onSubmit={handleLogin}
          >
            <h1 className="text-2xl font-bold mb-2">Login</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="input-box"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
         
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Password</label>
              <PasswordInput
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            <button type="submit" className="btn btn:hover">
              Login
            </button>

            <div className="mt-4">
              <p className="text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500">
                  <span className="font-bold underline">Sign Up</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
