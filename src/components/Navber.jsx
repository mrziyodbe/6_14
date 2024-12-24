import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className="flex gap-4 p-4 justify-center">
        <li className="border border-blue-500 rounded-lg px-4 py-2">
          <NavLink to="/home" className="hover:text-blue-500">
            Home
          </NavLink>
        </li>
        <li className="border border-blue-500 rounded-lg px-4 py-2">
          <NavLink to="/about" className="hover:text-blue-500">
            About
          </NavLink>
        </li>
        <li className="border border-blue-500 rounded-lg px-4 py-2">
          <NavLink to="/contact" className="hover:text-blue-500">
            Contact
          </NavLink>
        </li>
        <li className="border border-blue-500 rounded-lg px-4 py-2">
          <NavLink to="/products" className="hover:text-blue-500">
            Products
          </NavLink>
        </li>
      </ul>
    </>
  );
}
