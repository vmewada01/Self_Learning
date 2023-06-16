import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/contact",
      title: "Contact Us",
    },
    {
      to: "/user",
      title: "Users",
    }, {
      to: "/login",
      title: "Login",
    }
  ];

  const active = {
    color: "red",
    textDecoration: "none"
  };
  const inactive = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        {links.map((items) => {
          return (
            <NavLink
             
              to={items.to}
              key={items.to}
              style={({ isActive }) => (isActive ? active : inactive)}
            >
              {items.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
