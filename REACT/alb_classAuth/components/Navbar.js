import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const links = [
  {
    title: "Home",
    to: "/"
  },
  {
    title: "About",
    to: "/About"
  },

  {
    title: "User",
    to: "/User"
  },
  {
    title: "Login",
    to: "/Login"
  }
];

function Navbar() {
  const Style = {
    color: "black"
  };
  const activeStyle = {
    color: "blue"
  };
  const [state] = useContext(AuthContext);

  return (
    <div>
      {links.map((res) => {
        return (
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : Style)}
            key={res.title}
            to={res.to}
          >
            {res.title}
          </NavLink>
        );
      })}
      <div>token: {state.token}</div>
    </div>
  );
}

export default Navbar;

// style={({ isActive }) => (isActive ? activeStyle : Style)}
