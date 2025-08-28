import React, { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    console.log("button Clicked");

    navigate("/login");
  };

  const handleOnChange = (e) =>
  {
    setSearchQuery(e.target.value);
  }

  const handleSearch = () => {

  }
  const onClearSearch = () => {
    setSearchQuery("")

  }
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <div className="text-lg font-bold">Notes App</div>
      <div className="flex space-x-15">
        {/* <NavLink to="/about">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            About
          </button>
        </NavLink>
        <NavLink to="/contact">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            Contact
          </button>
        </NavLink>
        <NavLink to="/faq">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            FAQ
          </button>
        </NavLink> */}
        <SearchBar
          value={searchQuery}
          onChange={handleOnChange}
          handleSearch = {handleSearch}
          onClearSearch = {onClearSearch}
        />
      </div>
      <div>
        {/* <NavLink to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
        </NavLink> */}

        <ProfileInfo onLogout={onLogout} />
      </div>
    </div>
  );
};

export default Navbar;
