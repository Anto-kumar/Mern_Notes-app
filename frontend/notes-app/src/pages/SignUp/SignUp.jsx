import React, { useState } from "react";
import PasswordInput from "../../components/Input/PasswordInput";
import { validEmail } from "../../utils/helper";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e)=> {
    e.preventDefault();

    if(!name || !email || !password || !confirmPassword)
    {
      setError("Please fill in all the fields");
      return;
    }
    if(!validEmail(email))
    {
      setError("Enter Valid Email Address");
      return;
    }
    if( password != confirmPassword )
    {
      setError("Password doen't match");
      return;
    }

    setError(null);

  }

  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 to-white flex justify-center">
        <div className="flex justify-center ">
          <form
            className="bg-gradient-to-b from-blue-300 to-blue-100 p-6 mt-20 rounded shadow-md"
            style={{ width: "350px" }}
            onSubmit={handleSignUp}
          >
            <h1 className="text-2xl font-bold mb-2">SignUp</h1>
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="input-box"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="input-box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">Password</label>
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <PasswordInput
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="btn btn:hover">SignUp</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
