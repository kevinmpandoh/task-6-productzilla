import { NavLink } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center max-w-screen-lg">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-10 font-bold">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "underline text-purple-400" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline text-purple-400" : "hover:underline"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-purple-400" : "hover:underline"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
